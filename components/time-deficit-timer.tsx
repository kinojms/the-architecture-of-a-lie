"use client"

import { useState, useEffect, useRef } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

export function TimeDeficitTimer() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.5 })
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [factChecks, setFactChecks] = useState(0)
  const [shares, setShares] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (!isVisible || hasStartedRef.current) return

    hasStartedRef.current = true
    const duration = 8000 // 8 seconds to complete
    startTimeRef.current = Date.now()

    const animate = () => {
      if (!startTimeRef.current) return

      const elapsed = Date.now() - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const newTimeElapsed = Math.floor(progress * 240)

      setTimeElapsed(newTimeElapsed)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      // Keep animation running even if component scrolls out of view
    }
  }, [isVisible])

  useEffect(() => {
    setFactChecks(Math.floor(timeElapsed / 240)) // 1 fact-check over 8 seconds
    const exponentialGrowth = Math.pow(2, Math.floor(timeElapsed / 30)) * 100
    setShares(Math.min(exponentialGrowth, 50000))
  }, [timeElapsed])

  const minutes = Math.floor(timeElapsed / 60)
  const seconds = timeElapsed % 60

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
      {/* Left Side: The Fact Checker */}
      <div className="bg-slate-900 border border-cyan-500/30 rounded-lg p-6">
        <div className="text-center mb-4">
          <p className="text-gray-400 text-sm font-light">The Fact Checker</p>
        </div>
        <div className="bg-slate-950 rounded p-4 min-h-[100px] flex items-center justify-center">
          <div className="text-left font-mono text-sm text-cyan-400">
            <div className="text-xs text-gray-500 mb-2">&gt; fact_check.verify()</div>
            <div className="text-cyan-400">
              {factChecks > 0 ? (
                <>
                  <span>Claim analyzed</span>
                  <br />
                  <span>Sources verified</span>
                  <br />
                  <span>Report published</span>
                </>
              ) : (
                <span className="animate-pulse">Researching...</span>
              )}
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-4 text-center font-light tabular-nums">
          {factChecks} fact-checks completed
        </p>
      </div>

      {/* Right Side: The Viral Spread */}
      <div className="bg-slate-900 border border-red-500/30 rounded-lg p-6">
        <div className="text-center mb-4">
          <p className="text-gray-400 text-sm font-light">Viral Misinformation</p>
        </div>
        <div className="bg-slate-950 rounded p-4 min-h-[100px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-500 tabular-nums">{shares.toLocaleString()}</div>
            <p className="text-gray-500 text-xs mt-2 font-light">shares & reshares</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-4 text-center font-light">Growing exponentially</p>
      </div>

      {/* Timer */}
      <div className="col-span-2 text-center">
        <p className="text-gray-400 text-sm mb-2 font-light">Time Elapsed</p>
        <p className="text-4xl font-mono text-cyan-400 font-bold tabular-nums">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </p>
        <p className="text-xs text-gray-500 mt-2 font-light">Out of 4 hours (240 minutes)</p>
      </div>
    </div>
  )
}
