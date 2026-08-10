"use client"

import { useState, useTransition, useEffect, useRef } from "react"
import Image from "next/image"
import {
  generateChatbot,
  getChatbotAnalytics,
  regenerateApiKey,
  deleteChatbot,
  type ChatbotAnalytics,
} from "@/app/actions/client-space"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bot,
  Sparkles,
  Loader2,
  Copy,
  Check,
  KeyRound,
  RefreshCw,
  Trash2,
  MessagesSquare,
  MessageCircleQuestion,
  CheckCircle2,
  Send,
  Play,
} from "lucide-react"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"

type ChatbotDTO = {
  id: number
  name: string
  description: string | null
  apiKey: string
  status: string
  createdAt: string
}

export function ChatbotWorkspace({
  initialChatbots,
  initialAnalytics,
}: {
  initialChatbots: ChatbotDTO[]
  initialAnalytics: ChatbotAnalytics | null
}) {
  const [chatbots, setChatbots] = useState<ChatbotDTO[]>(initialChatbots)
  const [selectedId, setSelectedId] = useState<number | null>(initialChatbots[0]?.id ?? null)
  const [analytics, setAnalytics] = useState<ChatbotAnalytics | null>(initialAnalytics)
  const [showGenerator, setShowGenerator] = useState(initialChatbots.length === 0)
  const [justGeneratedId, setJustGeneratedId] = useState<number | null>(null)

  const selected = chatbots.find((c) => c.id === selectedId) ?? null

  const selectChatbot = (id: number) => {
    setSelectedId(id)
    setJustGeneratedId(null)
    getChatbotAnalytics(id).then(setAnalytics)
  }

  const handleGenerated = (bot: ChatbotDTO, freshAnalytics: ChatbotAnalytics) => {
    setChatbots((prev) => [bot, ...prev])
    setSelectedId(bot.id)
    setAnalytics(freshAnalytics)
    setShowGenerator(false)
    setJustGeneratedId(bot.id)
  }

  const handleDeleted = (id: number) => {
    const remaining = chatbots.filter((c) => c.id !== id)
    setChatbots(remaining)
    if (remaining.length > 0) {
      selectChatbot(remaining[0].id)
    } else {
      setSelectedId(null)
      setAnalytics(null)
      setShowGenerator(true)
    }
  }

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      {chatbots.length > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Select value={selectedId ? String(selectedId) : undefined} onValueChange={(v) => selectChatbot(Number(v))}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select a chatbot" />
              </SelectTrigger>
              <SelectContent>
                {chatbots.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={() => setShowGenerator((v) => !v)}
            variant={showGenerator ? "outline" : "default"}
            className={showGenerator ? "" : "rounded-full bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90"}
          >
            {showGenerator ? "Close" : (
              <>
                <Sparkles className="mr-1 h-4 w-4" />
                New chatbot
              </>
            )}
          </Button>
        </div>
      )}

      {/* Generator */}
      {showGenerator && <GeneratorForm onGenerated={handleGenerated} />}

      {/* Selected chatbot details */}
      {selected && !showGenerator && (
        <>
          <ChatbotDetails
            bot={selected}
            highlightKey={justGeneratedId === selected.id}
            onKeyRegenerated={(key) =>
              setChatbots((prev) => prev.map((c) => (c.id === selected.id ? { ...c, apiKey: key } : c)))
            }
            onDeleted={() => handleDeleted(selected.id)}
          />
          {analytics && <AnalyticsPanel analytics={analytics} />}
        </>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Generator form                                                             */
/* -------------------------------------------------------------------------- */

function GeneratorForm({
  onGenerated,
}: {
  onGenerated: (bot: ChatbotDTO, analytics: ChatbotAnalytics) => void
}) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [documentation, setDocumentation] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const submit = () => {
    setError(null)
    if (!name.trim() || !documentation.trim()) {
      setError("Please provide a name and the documentation to train the chatbot on.")
      return
    }
    startTransition(async () => {
      try {
        const created = await generateChatbot({ name, description, documentation })
        const analytics = await getChatbotAnalytics(created.id)
        onGenerated(
          {
            id: created.id,
            name: created.name,
            description: created.description,
            apiKey: created.apiKey,
            status: created.status,
            createdAt: created.createdAt.toISOString?.() ?? new Date().toISOString(),
          },
          analytics,
        )
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to generate chatbot.")
      }
    })
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center gap-4 border-b bg-moroccan-yellow/10 p-6">
        <Image src="/images/neo-mascot.png" alt="NEO" width={64} height={64} className="h-16 w-auto" />
        <div>
          <h2 className="text-lg font-semibold text-foreground">Feed NEO your documentation</h2>
          <p className="text-sm text-muted-foreground">
            Paste the content your chatbot should learn from — FAQs, product docs, policies. Then generate.
          </p>
        </div>
      </div>
      <CardContent className="space-y-5 p-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="bot-name">Chatbot name</Label>
            <Input
              id="bot-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Support Assistant"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="bot-desc">Description (optional)</Label>
            <Input
              id="bot-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Answers questions on our help center"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="bot-doc">Documentation / knowledge base</Label>
          <Textarea
            id="bot-doc"
            value={documentation}
            onChange={(e) => setDocumentation(e.target.value)}
            placeholder="Paste your FAQs, product descriptions, policies, or any content the chatbot should answer from…"
            className="min-h-48 resize-y font-mono text-sm"
          />
          <p className="text-xs text-muted-foreground">{documentation.length.toLocaleString()} characters</p>
        </div>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <Button
          onClick={submit}
          disabled={isPending}
          size="lg"
          className="rounded-full bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-1 h-4 w-4 animate-spin" />
              Generating chatbot…
            </>
          ) : (
            <>
              <Sparkles className="mr-1 h-4 w-4" />
              Generate chatbot
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

/* -------------------------------------------------------------------------- */
/* Chatbot details (API key + embed)                                          */
/* -------------------------------------------------------------------------- */

function ChatbotDetails({
  bot,
  highlightKey,
  onKeyRegenerated,
  onDeleted,
}: {
  bot: ChatbotDTO
  highlightKey: boolean
  onKeyRegenerated: (key: string) => void
  onDeleted: () => void
}) {
  const [copiedKey, setCopiedKey] = useState(false)
  const [copiedSnippet, setCopiedSnippet] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [origin, setOrigin] = useState("")

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  const snippet = `<script src="${origin || "https://your-ctl-domain.com"}/api/widget/${bot.apiKey}" async></script>`

  const copy = (text: string, which: "key" | "snippet") => {
    navigator.clipboard.writeText(text)
    if (which === "key") {
      setCopiedKey(true)
      setTimeout(() => setCopiedKey(false), 1500)
    } else {
      setCopiedSnippet(true)
      setTimeout(() => setCopiedSnippet(false), 1500)
    }
  }

  const regen = () => startTransition(async () => onKeyRegenerated(await regenerateApiKey(bot.id)))
  const remove = () =>
    startTransition(async () => {
      await deleteChatbot(bot.id)
      onDeleted()
    })

  return (
    <Card className={highlightKey ? "border-moroccan-yellow ring-2 ring-moroccan-yellow/40" : ""}>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-moroccan-charcoal text-moroccan-yellow">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">{bot.name}</CardTitle>
            {bot.description && <p className="text-sm text-muted-foreground">{bot.description}</p>}
          </div>
        </div>
        <Badge className="bg-moroccan-teal/15 text-moroccan-teal hover:bg-moroccan-teal/15">
          {bot.status === "active" ? "Active" : bot.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {highlightKey && (
          <div className="flex items-center gap-2 rounded-lg bg-moroccan-teal/10 px-4 py-3 text-sm text-moroccan-teal">
            <CheckCircle2 className="h-4 w-4" />
            Your chatbot is ready. Copy your API key below and embed it on your site.
          </div>
        )}

        {/* API key */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <KeyRound className="h-4 w-4" />
            API key
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 truncate rounded-lg border bg-muted px-3 py-2.5 font-mono text-sm text-foreground">
              {bot.apiKey}
            </code>
            <Button variant="outline" size="icon" onClick={() => copy(bot.apiKey, "key")} aria-label="Copy API key">
              {copiedKey ? <Check className="h-4 w-4 text-moroccan-teal" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon" onClick={regen} disabled={isPending} aria-label="Regenerate API key">
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Keep this key secret. Regenerating it will invalidate the previous key.
          </p>
        </div>

        {/* Embed snippet */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Embed on your website</span>
            <Button variant="ghost" size="sm" onClick={() => copy(snippet, "snippet")}>
              {copiedSnippet ? (
                <>
                  <Check className="mr-1 h-4 w-4 text-moroccan-teal" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-1 h-4 w-4" />
                  Copy snippet
                </>
              )}
            </Button>
          </div>
          <pre className="overflow-x-auto rounded-lg bg-moroccan-charcoal p-4 text-xs leading-relaxed text-moroccan-yellow">
            <code>{snippet}</code>
          </pre>
          <p className="text-xs text-muted-foreground">
            Paste this before the closing <code>&lt;/body&gt;</code> tag. A floating chat bubble will appear on your
            site, answering only from the documentation you provided.
          </p>
        </div>

        {/* Live test */}
        <TestChatPanel bot={bot} />

        <div className="flex justify-end border-t pt-4">
          <Button variant="ghost" size="sm" onClick={remove} disabled={isPending} className="text-destructive hover:text-destructive">
            <Trash2 className="mr-1 h-4 w-4" />
            Delete chatbot
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

/* -------------------------------------------------------------------------- */
/* Live test chat                                                             */
/* -------------------------------------------------------------------------- */

type TestMessage = { role: "user" | "bot"; text: string; grounded?: boolean }

function TestChatPanel({ bot }: { bot: ChatbotDTO }) {
  const [messages, setMessages] = useState<TestMessage[]>([])
  const [input, setInput] = useState("")
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, loading])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput("")
    setMessages((prev) => [...prev, { role: "user", text }])
    setLoading(true)
    try {
      const res = await fetch(`/api/chat/${bot.apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      })
      const data = await res.json()
      if (data.sessionId) setSessionId(data.sessionId)
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || data.error || "No response.", grounded: data.answeredFromDocs },
      ])
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Network error. Please try again." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Play className="h-4 w-4 text-moroccan-teal" />
        Test your chatbot live
        <Badge variant="secondary" className="ml-1 font-normal">
          real AI · real logging
        </Badge>
      </div>
      <div ref={scrollRef} className="flex max-h-72 min-h-32 flex-col gap-2 overflow-y-auto rounded-lg bg-background p-3">
        {messages.length === 0 && (
          <p className="m-auto text-center text-sm text-muted-foreground">
            Ask a question to see how {bot.name} answers from your documentation.
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "max-w-[85%] self-end rounded-2xl rounded-br-sm bg-moroccan-charcoal px-3 py-2 text-sm text-moroccan-yellow"
                : "max-w-[85%] self-start rounded-2xl rounded-bl-sm border bg-card px-3 py-2 text-sm text-foreground"
            }
          >
            <p className="whitespace-pre-wrap">{m.text}</p>
            {m.role === "bot" && m.grounded === false && (
              <span className="mt-1 block text-xs text-muted-foreground">Not found in documentation</span>
            )}
          </div>
        ))}
        {loading && (
          <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm border bg-card px-3 py-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="Ask a question…"
          disabled={loading}
        />
        <Button
          onClick={send}
          disabled={loading || !input.trim()}
          size="icon"
          className="shrink-0 bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Analytics                                                                  */
/* -------------------------------------------------------------------------- */

function AnalyticsPanel({ analytics }: { analytics: ChatbotAnalytics }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={<MessagesSquare className="h-5 w-5" />}
          value={analytics.totalConversations.toLocaleString()}
          label="Conversations"
        />
        <StatCard
          icon={<MessageCircleQuestion className="h-5 w-5" />}
          value={analytics.totalQuestions.toLocaleString()}
          label="Questions asked"
        />
        <StatCard
          icon={<CheckCircle2 className="h-5 w-5" />}
          value={`${analytics.answeredRate}%`}
          label="Answered rate"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Questions over the last 7 days</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalyticsChart data={analytics.last7Days} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Top questions</CardTitle>
          </CardHeader>
          <CardContent>
            {analytics.topQuestions.length === 0 ? (
              <p className="text-sm text-muted-foreground">No questions recorded yet.</p>
            ) : (
              <ul className="space-y-3">
                {analytics.topQuestions.map((q, i) => (
                  <li key={i} className="flex items-start justify-between gap-3">
                    <span className="text-sm text-foreground">{q.question}</span>
                    <Badge variant="secondary" className="shrink-0">
                      {q.count}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moroccan-yellow text-moroccan-charcoal">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}
