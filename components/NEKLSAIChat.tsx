"use client"

import { FormEvent, useState } from "react"
import { Bot, Loader2, Send, Sparkles, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const promptButtons = [
  "Help me understand this math problem",
  "Explain this without giving me the answer",
  "Help me study for a science assignment",
  "I'm stuck on social studies",
  "Where should I start?",
]

type ChatMessage = {
  role: "student" | "assistant"
  text: string
}

function buildFakeResponse(prompt: string) {
  const lower = prompt.toLowerCase()

  if (lower.includes("math")) {
    return "Let's slow the problem down. First, identify what the question is asking for, then write the known numbers beside it. What operation seems connected to the words in the problem?"
  }

  if (lower.includes("science")) {
    return "A strong science response usually starts with a claim, then evidence from your notes, then reasoning. What observation from your lab best supports your claim?"
  }

  if (lower.includes("social")) {
    return "Start by naming the main idea in your own words. Then connect it to one example from class or your community. What part of the prompt feels most familiar?"
  }

  if (lower.includes("answer")) {
    return "I can guide you without giving the final answer. Tell me what you have tried so far, and we'll choose the next step together."
  }

  return "A good starting point is to pick the smallest next action. Read the directions once, underline the task, and tell me which word or step feels unclear."
}

export function NEKLSAIChat() {
  const [input, setInput] = useState("")
  const [isThinking, setIsThinking] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi Jordan. I can help you think through assignments step by step. I will guide you, ask questions, and help you try the next move.",
    },
  ])

  function submitPrompt(prompt: string) {
    const trimmed = prompt.trim()

    if (!trimmed) {
      return
    }

    setMessages((current) => [...current, { role: "student", text: trimmed }])
    setInput("")
    setIsThinking(true)

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: buildFakeResponse(trimmed) },
      ])
      setIsThinking(false)
    }, 450)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    submitPrompt(input)
  }

  return (
    <Card className="portal-card rounded-[2rem] shadow-xl shadow-[#3B5584]/10">
      <CardHeader className="px-6 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
              <Sparkles className="size-5" aria-hidden="true" />
            </span>
            <div>
              <CardTitle className="text-2xl font-semibold text-[#3B5584]">
                NEKLSAI
              </CardTitle>
              <p className="mt-1 text-sm font-medium text-[#5A6D8D]">
                Mock study helper - no real AI API
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-6 pb-6">
        <div className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-3">
          <p className="mb-3 text-sm font-semibold text-[#3B5584]">
            Try a study prompt
          </p>
          <div className="flex flex-wrap gap-2">
          {promptButtons.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => submitPrompt(prompt)}
              disabled={isThinking}
              className="rounded-full border border-[#dbe3ef] bg-white px-4 py-2 text-sm font-semibold text-[#3B5584] transition hover:border-[#E2D1B0] hover:bg-[#E2D1B0]/30 disabled:opacity-60"
            >
              {prompt}
            </button>
          ))}
          </div>
        </div>

        <div className="max-h-[520px] space-y-4 overflow-y-auto rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-4">
          {messages.map((message, index) => {
            const isStudent = message.role === "student"

            return (
              <div
                key={`${message.role}-${index}`}
                className={`flex gap-3 ${isStudent ? "justify-end" : ""}`}
              >
                {!isStudent ? (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <Bot className="size-4" aria-hidden="true" />
                  </span>
                ) : null}
                <div
                  className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-sm ${
                    isStudent
                      ? "bg-[#3B5584] text-white"
                      : "border border-[#dbe3ef] bg-white text-[#5A6D8D]"
                  }`}
                >
                  {message.text}
                </div>
                {isStudent ? (
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-[#3B5584] text-white">
                    <User className="size-4" aria-hidden="true" />
                  </span>
                ) : null}
              </div>
            )
          })}
          {isThinking ? (
            <div className="flex gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-[#E2D1B0]/45 text-[#3B5584]">
                <Bot className="size-4" aria-hidden="true" />
              </span>
              <div className="flex items-center gap-2 rounded-3xl border border-[#dbe3ef] bg-white px-4 py-3 text-sm font-semibold text-[#5A6D8D] shadow-sm">
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Thinking about the next hint...
              </div>
            </div>
          ) : null}
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask for a hint or study plan..."
            disabled={isThinking}
            className="h-12 rounded-2xl border-[#dbe3ef] bg-white px-4 text-[#24314a]"
          />
          <Button
            disabled={isThinking}
            className="h-12 rounded-2xl bg-[#3B5584] px-5 text-white hover:bg-[#2f456d]"
          >
            <Send className="size-4" aria-hidden="true" />
            Send
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
