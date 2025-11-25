"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgressIndicator() {
  const { scrollProgress } = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-black z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
