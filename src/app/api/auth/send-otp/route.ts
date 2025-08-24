import prisma from "@/lib/prisma"

export async function POST(req: Request) {
    const {phone} = await req.json()

    const otp = Math.floor(1000 + Math.random() * 9000).toString()
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000)

    await prisma.oTP.create({
        data: {
            phone,
            code: otp,
            expiresAt,
        },
    })

    return Response.json({success: true})
}
