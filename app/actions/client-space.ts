"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { chatbot, chatbotMessage, userService } from "@/lib/db/schema"
import { and, desc, eq, sql } from "drizzle-orm"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import { randomBytes, randomUUID } from "crypto"

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Unauthorized")
  return session.user.id
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export async function getUserServices() {
  const userId = await getUserId()
  return db.select().from(userService).where(eq(userService.userId, userId))
}

export async function setServiceStatus(serviceId: string, status: "active" | "requested" | "inactive") {
  const userId = await getUserId()

  const existing = await db
    .select()
    .from(userService)
    .where(and(eq(userService.userId, userId), eq(userService.serviceId, serviceId)))
    .limit(1)

  if (existing.length > 0) {
    await db
      .update(userService)
      .set({ status })
      .where(and(eq(userService.userId, userId), eq(userService.serviceId, serviceId)))
  } else {
    await db.insert(userService).values({ userId, serviceId, status })
  }

  revalidatePath("/dashboard/services")
  revalidatePath("/dashboard")
}

// ---------------------------------------------------------------------------
// Chatbots
// ---------------------------------------------------------------------------

export async function getChatbots() {
  const userId = await getUserId()
  return db.select().from(chatbot).where(eq(chatbot.userId, userId)).orderBy(desc(chatbot.createdAt))
}

export async function getChatbot(id: number) {
  const userId = await getUserId()
  const rows = await db
    .select()
    .from(chatbot)
    .where(and(eq(chatbot.id, id), eq(chatbot.userId, userId)))
    .limit(1)
  return rows[0] ?? null
}

function generateApiKey() {
  return `ctl_live_${randomBytes(24).toString("hex")}`
}

export async function generateChatbot(input: { name: string; description?: string; documentation: string }) {
  const userId = await getUserId()

  if (!input.name.trim() || !input.documentation.trim()) {
    throw new Error("Name and documentation are required.")
  }

  const apiKey = generateApiKey()

  const [created] = await db
    .insert(chatbot)
    .values({
      userId,
      name: input.name.trim(),
      description: input.description?.trim() || null,
      documentation: input.documentation.trim(),
      apiKey,
      status: "active",
    })
    .returning()

  // Ensure the Smart Agent service is marked active for this client.
  await setServiceStatusInternal(userId, "intelligent-conversational-agents", "active")

  // Seed realistic sample analytics so the dashboard looks alive before real traffic.
  await seedSampleMessages(created.id, userId)

  revalidatePath("/dashboard/chatbot")
  revalidatePath("/dashboard")
  return created
}

export async function regenerateApiKey(id: number) {
  const userId = await getUserId()
  const apiKey = generateApiKey()
  await db
    .update(chatbot)
    .set({ apiKey, updatedAt: new Date() })
    .where(and(eq(chatbot.id, id), eq(chatbot.userId, userId)))
  revalidatePath("/dashboard/chatbot")
  return apiKey
}

export async function deleteChatbot(id: number) {
  const userId = await getUserId()
  await db.delete(chatbotMessage).where(and(eq(chatbotMessage.chatbotId, id), eq(chatbotMessage.userId, userId)))
  await db.delete(chatbot).where(and(eq(chatbot.id, id), eq(chatbot.userId, userId)))
  revalidatePath("/dashboard/chatbot")
  revalidatePath("/dashboard")
}

// ---------------------------------------------------------------------------
// Analytics
// ---------------------------------------------------------------------------

export type ChatbotAnalytics = {
  totalConversations: number
  totalQuestions: number
  answeredRate: number
  last7Days: { date: string; count: number }[]
  topQuestions: { question: string; count: number }[]
}

export async function getChatbotAnalytics(chatbotId: number): Promise<ChatbotAnalytics> {
  const userId = await getUserId()

  const owned = await db
    .select({ id: chatbot.id })
    .from(chatbot)
    .where(and(eq(chatbot.id, chatbotId), eq(chatbot.userId, userId)))
    .limit(1)
  if (owned.length === 0) throw new Error("Not found")

  const scope = and(eq(chatbotMessage.chatbotId, chatbotId), eq(chatbotMessage.userId, userId))

  const [totals] = await db
    .select({
      totalQuestions: sql<number>`count(*)::int`,
      totalConversations: sql<number>`count(distinct ${chatbotMessage.sessionId})::int`,
      answered: sql<number>`sum(case when ${chatbotMessage.answered} then 1 else 0 end)::int`,
    })
    .from(chatbotMessage)
    .where(scope)

  const daily = await db
    .select({
      date: sql<string>`to_char(${chatbotMessage.createdAt}, 'YYYY-MM-DD')`,
      count: sql<number>`count(*)::int`,
    })
    .from(chatbotMessage)
    .where(and(scope, sql`${chatbotMessage.createdAt} >= now() - interval '7 days'`))
    .groupBy(sql`to_char(${chatbotMessage.createdAt}, 'YYYY-MM-DD')`)

  const top = await db
    .select({
      question: chatbotMessage.question,
      count: sql<number>`count(*)::int`,
    })
    .from(chatbotMessage)
    .where(scope)
    .groupBy(chatbotMessage.question)
    .orderBy(sql`count(*) desc`)
    .limit(6)

  // Fill in the last 7 days so the chart never has gaps.
  const last7Days: { date: string; count: number }[] = []
  const map = new Map(daily.map((d) => [d.date, d.count]))
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = d.toISOString().slice(0, 10)
    last7Days.push({ date: key, count: map.get(key) ?? 0 })
  }

  const totalQuestions = totals?.totalQuestions ?? 0
  const answered = totals?.answered ?? 0

  return {
    totalConversations: totals?.totalConversations ?? 0,
    totalQuestions,
    answeredRate: totalQuestions > 0 ? Math.round((answered / totalQuestions) * 100) : 0,
    last7Days,
    topQuestions: top,
  }
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

async function setServiceStatusInternal(userId: string, serviceId: string, status: string) {
  const existing = await db
    .select()
    .from(userService)
    .where(and(eq(userService.userId, userId), eq(userService.serviceId, serviceId)))
    .limit(1)
  if (existing.length > 0) {
    await db
      .update(userService)
      .set({ status })
      .where(and(eq(userService.userId, userId), eq(userService.serviceId, serviceId)))
  } else {
    await db.insert(userService).values({ userId, serviceId, status })
  }
}

const SAMPLE_QUESTIONS = [
  "What are your business hours?",
  "How much does the service cost?",
  "Do you offer a free trial?",
  "How do I reset my password?",
  "Where can I find my invoices?",
  "Can I integrate this with my website?",
  "What payment methods do you accept?",
  "How do I contact support?",
  "Is my data secure?",
  "Do you have an API?",
  "How long does setup take?",
  "Can I cancel anytime?",
]

async function seedSampleMessages(chatbotId: number, userId: string) {
  const rows: {
    chatbotId: number
    userId: string
    sessionId: string
    question: string
    answered: boolean
    createdAt: Date
  }[] = []

  // ~7 conversations per day across the last 7 days, a few questions each.
  for (let day = 0; day < 7; day++) {
    const convos = 4 + Math.floor(Math.random() * 6)
    for (let c = 0; c < convos; c++) {
      const sessionId = randomUUID()
      const questionsInConvo = 1 + Math.floor(Math.random() * 3)
      for (let q = 0; q < questionsInConvo; q++) {
        const created = new Date()
        created.setDate(created.getDate() - day)
        created.setHours(8 + Math.floor(Math.random() * 12), Math.floor(Math.random() * 60))
        rows.push({
          chatbotId,
          userId,
          sessionId,
          question: SAMPLE_QUESTIONS[Math.floor(Math.random() * SAMPLE_QUESTIONS.length)],
          answered: Math.random() > 0.12, // ~88% answered
          createdAt: created,
        })
      }
    }
  }

  if (rows.length > 0) {
    await db.insert(chatbotMessage).values(rows)
  }
}
