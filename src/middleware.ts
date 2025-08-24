import {NextRequest, NextResponse} from "next/server";
import {jwtVerify} from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    try {
        const {payload} = await jwtVerify(token, secret);

        const validateRes = await fetch(new URL("/api/auth/session/validate", req.url), {
            headers: {
                cookie: req.headers.get("cookie") ?? "",
                "user-agent": req.headers.get("user-agent") ?? ""
            },
            cache: "no-store"
        });

        if (!validateRes.ok) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        const {ok, userId} = await validateRes.json();

        if (!ok || (payload.userId && String(payload.userId) !== String(userId))) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        const requestHeaders = new Headers(req.headers);
        requestHeaders.set("x-user-id", String(userId));
        return NextResponse.next({request: {headers: requestHeaders}});
    } catch {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export const config = {
    matcher: ["/panel/:path*"]
};
