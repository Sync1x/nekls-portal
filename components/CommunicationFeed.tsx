import { Bell, Mail, MessageCircle } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { adminCommunications, communications, reminders } from "@/lib/mockData"

type CommunicationFeedProps = {
  mode?: "student" | "admin"
}

function AdminCommunicationFeed() {
  return (
    <Card className="portal-card">
      <CardHeader className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <CardTitle className="text-xl font-semibold text-[#3B5584]">
            Communication Feed
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 px-6 pb-6 lg:grid-cols-2">
        {adminCommunications.map((item) => (
          <article
            key={`${item.timestamp}-${item.subject}`}
            className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-4 transition hover:border-[#E2D1B0] hover:bg-white"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#5A6D8D]">
                  {item.type}
                </p>
                <h3 className="mt-2 font-semibold text-[#3B5584]">
                  {item.subject}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#5A6D8D]">
                  From {item.from} - {item.timestamp}
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#3B5584]">
                {item.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#5A6D8D]">
              {item.preview}
            </p>
          </article>
        ))}
      </CardContent>
    </Card>
  )
}

export function CommunicationFeed({ mode = "student" }: CommunicationFeedProps) {
  if (mode === "admin") {
    return <AdminCommunicationFeed />
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
      <Card className="portal-card">
        <CardHeader className="px-6 pt-6">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <CardTitle className="text-xl font-semibold text-[#3B5584]">
              Teacher Messages
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 px-6 pb-6">
          {communications.map((message) => (
            <article
              key={`${message.date}-${message.subject}`}
            className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-4 transition hover:border-[#E2D1B0] hover:bg-white"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-[#3B5584]">
                    {message.subject}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A6D8D]">
                    From {message.from} - {message.date}
                  </p>
                </div>
                {message.unread ? (
                  <span className="rounded-full bg-[#f6ca43]/30 px-3 py-1 text-xs font-semibold text-[#3B5584]">
                    New
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-[#5A6D8D]">
                {message.preview}
              </p>
            </article>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-5">
        <Card className="portal-card">
          <CardHeader className="px-6 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                <Bell className="size-5" aria-hidden="true" />
              </span>
              <CardTitle className="text-xl font-semibold text-[#3B5584]">
                Reminders
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 px-6 pb-6">
            {reminders.slice(0, 2).map((reminder) => (
              <div key={reminder.title} className="rounded-3xl bg-[#f6f8fb] p-4">
                <p className="font-semibold text-[#3B5584]">
                  {reminder.title}
                </p>
                <p className="mt-1 text-sm text-[#5A6D8D]">
                  {reminder.dueDate} - {reminder.status}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="portal-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-[#3B5584]">Check-in note</p>
                <p className="mt-1 text-sm leading-6 text-[#5A6D8D]">
                  Bring one question about Math Unit 8 to your next advisor
                  meeting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
