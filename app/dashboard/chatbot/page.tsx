import { getChatbots, getChatbotAnalytics } from "@/app/actions/client-space"
import { ChatbotWorkspace } from "@/components/dashboard/chatbot-workspace"

export const metadata = {
  title: "Smart Agent — CTL Client Space",
}

export default async function ChatbotPage() {
  const chatbots = await getChatbots()

  // Load analytics for the most recent chatbot (the one shown by default).
  const primary = chatbots[0]
  const analytics = primary ? await getChatbotAnalytics(primary.id) : null

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Smart Agent</h1>
        <p className="mt-1 text-muted-foreground">
          Generate a chatbot from your documentation, get an API key, and track its performance.
        </p>
      </div>
      <ChatbotWorkspace
        initialChatbots={chatbots.map((c) => ({
          id: c.id,
          name: c.name,
          description: c.description,
          apiKey: c.apiKey,
          status: c.status,
          createdAt: c.createdAt.toISOString(),
        }))}
        initialAnalytics={analytics}
      />
    </div>
  )
}
