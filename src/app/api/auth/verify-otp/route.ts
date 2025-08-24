import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken"
import {cookies} from "next/headers"

const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: Request) {
    const {phone, code} = await req.json()
    const userAgent = req.headers.get("user-agent") || "unknown"

    const otp = await prisma.oTP.findFirst({
        where: {phone, code},
        orderBy: {createdAt: "desc"},
    })

    if (!otp || otp.expiresAt < new Date()) {
        return Response.json({error: "OTP نامعتبر یا منقضی شده"}, {status: 400})
    }

    let user = await prisma.user.findUnique({where: {phone}})

    if (user === null) {
        user = await prisma.user.create({
            data: {
                phone: phone,
            }
        })
    }

    const token = jwt.sign(
        {userId: user.id, phone: user.phone},
        JWT_SECRET,
        {expiresIn: "7d"}
    )

    await prisma.session.create({
        data: {
            userId: user.id,
            token,
            userAgent,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        },
    })

    await prisma.oTP.delete({where: {id: otp.id}})

    const set = await cookies()
    set.set("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60,
        path: "/",
    })

    return Response.json({success: true})
}
