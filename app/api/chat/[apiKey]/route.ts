import { db } from "@/lib/db"
import { chatbot, chatbotMessage } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { generateObject } from "ai"
import { z } from "zod"
import { randomUUID } from "crypto"

// Public, cross-origin endpoint hit by the embeddable widget on client sites.
export const runtime = "nodejs"

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  })
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS })
}

export async function POST(req: Request, { params }: { params: Promise<{ apiKey: string }> }) {
  const { apiKey } = await params

  let payload: { message?: string; sessionId?: string }
  try {
    payload = await req.json()
  } catch {
    return json({ error: "Invalid JSON body." }, 400)
  }

  const message = (payload.message ?? "").toString().trim()
  const sessionId = (payload.sessionId ?? "").toString().trim() || randomUUID()

  if (!message) return json({ error: "A 'message' is required." }, 400)
  if (message.length > 2000) return json({ error: "Message too long." }, 400)

  // Resolve the chatbot from its API key.
  const rows = await db.select().from(chatbot).where(eq(chatbot.apiKey, apiKey)).limit(1)
  const bot = rows[0]
  if (!bot) return json({ error: "Invalid API key." }, 401)
  if (bot.status !== "active") return json({ error: "This chatbot is currently paused." }, 403)

  // Answer strictly from the client's documentation.
  const system = [
    `You are "${bot.name}", a helpful customer-support assistant for a business.`,
    bot.description ? `Your purpose: ${bot.description}.` : "",
    "Answer ONLY using the DOCUMENTATION below. Do not invent facts, prices, policies, or URLs.",
    "If the documentation does not contain the answer, set answeredFromDocs to false and politely say you don't have that information and suggest contacting a human.",
    "Keep replies concise, friendly, and in the same language as the user's question.",
    "",
    "=== DOCUMENTATION START ===",
    bot.documentation,
    "=== DOCUMENTATION END ===",
  ]
    .filter(Boolean)
    .join("\n")

  let reply = "Sorry, something went wrong on our end. Please try again."
  let answeredFromDocs = false

  try {
    const { object } = await generateObject({
      model: "openai/gpt-4o-mini",
      system,
      prompt: message,
      schema: z.object({
        reply: z.string().describe("The answer to show the user."),
        answeredFromDocs: z
          .boolean()
          .describe("True only if the documentation actually contained the information to answer."),
      }),
    })
    reply = object.reply
    answeredFromDocs = object.answeredFromDocs
  } catch (err) {
    console.log("[v0] chat generation error:", err instanceof Error ? err.message : err)
    // Log the failed attempt as unanswered, then surface a friendly error.
    await db.insert(chatbotMessage).values({
      chatbotId: bot.id,
      userId: bot.userId,
      sessionId,
      question: message,
      answer: null,
      answered: false,
    })
    return json({ error: "The assistant is temporarily unavailable.", sessionId }, 502)
  }

  // Real event logging — every genuine conversation turn is persisted and feeds analytics.
  await db.insert(chatbotMessage).values({
    chatbotId: bot.id,
    userId: bot.userId,
    sessionId,
    question: message,
    answer: reply,
    answered: answeredFromDocs,
  })

  return json({ reply, sessionId, answeredFromDocs })
}
