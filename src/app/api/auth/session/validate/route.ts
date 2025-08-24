import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import {cookies, headers} from "next/headers";

export async function GET() {
    const cookie = await cookies();
    const agent = await headers();
    const token = cookie.get("token")?.value;
    const ua = agent.get("user-agent") ?? "";

    if (!token) {
        return NextResponse.json({ok: false}, {status: 200});
    }

    const session = await prisma.session.findUnique({
        where: {token},
        select: {userId: true, userAgent: true, expiresAt: true},
    });

    if (!session) {
        return NextResponse.json({ok: false}, {status: 401});
    }
    if (session.expiresAt < new Date()) {
        return NextResponse.json({ok: false}, {status: 401});
    }
    if (session.userAgent && session.userAgent !== ua) {
        return NextResponse.json({ok: false}, {status: 401});
    }

    return NextResponse.json({ok: true, userId: session.userId});
}
