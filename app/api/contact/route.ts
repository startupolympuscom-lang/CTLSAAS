import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Forward the request to your Railway webhook
    const webhookResponse = await fetch(
      "https://primary-production-663b.up.railway.app/webhook/2d88147e-e27d-4913-a4ed-38ac1999ed6d",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          company: body.company,
          message: body.message,
          timestamp: new Date().toISOString(),
          source: "CTL Website Contact Form",
        }),
      },
    )

    if (!webhookResponse.ok) {
      throw new Error(`Webhook responded with status: ${webhookResponse.status}`)
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again or contact us directly.",
      },
      { status: 500 },
    )
  }
}
