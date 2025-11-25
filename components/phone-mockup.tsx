"use client"

import { useEffect, useState } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { CitationLink } from "@/components/citation-link"

interface Notification {
  id: number
  app: string
  title: string
  message: string
  icon: string
  delay: number
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    app: "SocialHub",
    title: "Breaking News!",
    message: "Celebrity spotted at mysterious location",
    icon: "📱",
    delay: 0,
  },
  {
    id: 2,
    app: "NewsAlert",
    title: "Viral Story",
    message: "⚠️ This changes everything",
    icon: "🔔",
    delay: 1500,
  },
  {
    id: 3,
    app: "Trending",
    title: "100K people talking",
    message: "You won't believe what happened...",
    icon: "🔥",
    delay: 3000,
  },
  {
    id: 4,
    app: "Updates",
    title: "Friends are sharing",
    message: "Epic scandal revealed",
    icon: "👥",
    delay: 4500,
  },
]

export function PhoneMockup() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.4 })
  const [activeNotifications, setActiveNotifications] = useState<number[]>([])

  useEffect(() => {
    if (!isVisible) {
      setActiveNotifications([])
      return
    }

    const timers = NOTIFICATIONS.map((notif) =>
      setTimeout(() => {
        setActiveNotifications((prev) => [...prev, notif.id])
      }, notif.delay),
    )

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [isVisible])

  return (
    <div ref={ref} className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center">
      {/* Phone Frame */}
      <div className="relative w-72 h-96 bg-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden flex-shrink-0">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />

        {/* Screen */}
        <div className="w-full h-full bg-gradient-to-b from-slate-950 to-black flex flex-col pt-12 px-4 overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between text-white text-xs mb-8 px-2">
            <span>9:41</span>
            <div className="flex gap-1">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2">
            {NOTIFICATIONS.map((notif) => (
              <div
                key={notif.id}
                className={`bg-gray-900 rounded-lg p-3 border border-gray-700 transition-all duration-500 ${
                  activeNotifications.includes(notif.id) ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              >
                <div className="flex gap-3 items-start">
                  <div className="text-xl flex-shrink-0">{notif.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{notif.app}</p>
                    <p className="text-cyan-400 text-xs font-bold mt-0.5 leading-tight">{notif.title}</p>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{notif.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-md">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-pretty">The Dopamine Loop</h2>
        <div className="space-y-4 text-gray-300 text-lg">
          <p className="font-light leading-relaxed text-balance">
            <CitationLink
              href="https://ijsrem.com/download/the-silent-epidemic-the-rising-addiction-to-smartphones"
              tooltip="Research on smartphone addiction and dopamine mechanisms"
            >
              Notifications trigger dopamine release
            </CitationLink>
            Each <span className="text-cyan-400 font-semibold">alert</span> promises social connection and urgent
            information, compelling us to engage.
          </p>
          <p className="font-light leading-relaxed text-balance">
            This cycle—<span className="text-cyan-400 font-semibold">notification, engagement, reward</span>—is
            engineered into every platform, making it impossible to ignore potential information, regardless of its
            truth.
          </p>
          <p className="font-light leading-relaxed text-balance">
            <CitationLink
              href="https://linkinghub.elsevier.com/retrieve/pii/S258900422100465X"
              tooltip="Elsevier research on misinformation spread velocity"
            >
              Misinformation exploits this biological vulnerability
            </CitationLink>
            It spreads through our networks faster than facts ever could.
          </p>
        </div>
      </div>
    </div>
  )
}
