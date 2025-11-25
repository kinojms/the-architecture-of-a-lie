"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { ScrollTextCard } from "./scroll-text-card"

export function FirehoseVisualization() {
  const { ref: chartRef, isVisible: chartVisible } = useScrollTrigger({ threshold: 0.3 })

  return (
    <div className="space-y-8">
      {/* Main narrative text */}
      <ScrollTextCard text="The Philippines is 'Patient Zero' of the disinformation epidemic." animation="fadeInUp" />

      {/* Bar chart comparison */}
      <div ref={chartRef} className="max-w-3xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
          <h4 className="text-sm font-light text-gray-400 mb-8">Daily Time Spent on Social Media</h4>

          <div className="space-y-6">
            {/* Global Average Bar */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm text-gray-300">Global Average</span>
                <span
                  className={`text-2xl font-bold transition-opacity duration-500 ${chartVisible ? "opacity-100" : "opacity-0"}`}
                >
                  2h 23m
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-gray-500 h-3 rounded-full transition-all duration-1000 ease-out ${chartVisible ? "w-2/5" : "w-0"}`}
                />
              </div>
            </div>

            {/* Philippines Bar */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm text-cyan-300">Philippines</span>
                <span
                  className={`text-2xl font-bold text-cyan-400 transition-opacity duration-500 ${chartVisible ? "opacity-100" : "opacity-0"}`}
                >
                  3h 34m
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`bg-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out ${chartVisible ? "w-3/5" : "w-0"}`}
                />
              </div>
              <p className="text-xs text-cyan-400 mt-2 font-light">
                #1 globally <span className="text-gray-500">| Source: We Are Social 2024</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis text */}
      <ScrollTextCard
        text="This isn't just screen time. It's exposure time. The longer you stay, the more the algorithm needs extreme content to keep you watching."
        animation="fadeInUp"
        delay={200}
      />
    </div>
  )
}
