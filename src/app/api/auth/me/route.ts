import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {jwtVerify} from "jose";
import prisma from "@/lib/prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function GET() {
    const cookie = await cookies();
    try {
        const token = cookie.get("token")?.value;
        if (!token) {
            return NextResponse.json({user: null}, {status: 401});
        }

        const {payload} = await jwtVerify(token, secret);
        const userId = payload.userId as number | undefined;

        if (!userId) {
            return NextResponse.json({user: null}, {status: 401});
        }

        const user = await prisma.user.findUnique({
            where: {id: userId},
        });

        if (!user) {
            return NextResponse.json({user: null}, {status: 404});
        }

        return NextResponse.json({user});
    } catch (err) {
        console.error(err);
        return NextResponse.json({user: null}, {status: 401});
    }
}
