"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { useState, useEffect } from "react"
import { CitationLink } from "@/components/citation-link"

export function SplitScreenComparison() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })
  const [showImages, setShowImages] = useState(false)

  useEffect(() => {
    if (isVisible && !showImages) {
      const timer = setTimeout(() => setShowImages(true), 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, showImages])

  return (
    <div ref={ref} className="w-full">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">The Pattern Repeats</h2>
        <p className="text-center text-gray-400 text-lg font-light max-w-2xl mx-auto">
          What we see today isn't new. The mechanics of misinformation stretch back centuries, but the speed and scale
          are unprecedented.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {/* 1895 Section */}
        <div
          className={`flex flex-col gap-4 transition-all duration-700 ${
            showImages ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden border border-gray-800">
            <img
              src="public/images/the-yellow-press-era.jpg" 
              alt="1895 Newspaper Era - Yellow Press newsstand"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-2 rounded">
              <p className="text-xs font-mono text-gray-300">1895</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3 text-pretty">The Yellow Press Era</h3>
            <div className="space-y-3 text-gray-300 font-light leading-relaxed">
              <p className="text-balance">
                <CitationLink
                  href="https://www.ebsco.com/research-starters/communication-and-mass-media/yellow-journalism"
                  tooltip="Historical research on yellow journalism and sensationalism"
                >
                  Newspapers competed for readers with <br /> sensational, often false stories.
                </CitationLink>
              </p>
              <p className="text-balance">
                The <span className="text-yellow-500 font-semibold">engagement economics</span> of the era incentivized
                misinformation over accuracy.
              </p>
              <p className="text-sm text-gray-500 italic">Speed of spread: Weeks to months across regions</p>
            </div>
          </div>
        </div>

        {/* 2024 Section */}
        <div
          className={`flex flex-col gap-4 transition-all duration-700 ${
            showImages ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden border border-gray-800">
            <img
              src="public/images/the-algorithmic-age.jpg"
              alt="2024 Digital Networks - Social media apps on smartphone"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-2 rounded">
              <p className="text-xs font-mono text-gray-300">2024</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3 text-pretty">The Algorithmic Age</h3>
            <div className="space-y-3 text-gray-300 font-light leading-relaxed">
              <p className="text-balance">Same dynamics, same incentives, amplified by algorithms and automation.</p>
              <p className="text-balance">
                <CitationLink
                  href="https://ieeexplore.ieee.org/document/9179098"
                  tooltip="IEEE research on algorithmic bias and engagement optimization"
                >
                  Social platforms optimize for{" "}
                  <span className="text-red-400 font-semibold">engagement over accuracy</span>
                </CitationLink>
                , recreating yellow journalism at unprecedented scale.
              </p>
              <p className="text-sm text-gray-500 italic">Speed of spread: Minutes to hours globally</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline comparison */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-16 border-t border-gray-800">
        <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center text-pretty">The Acceleration</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { year: 1890, time: "Months" },
            { year: 1950, time: "Weeks" },
            { year: 2000, time: "Days" },
            { year: 2024, time: "Minutes" },
          ].map((item, i) => (
            <div
              key={item.year}
              className={`bg-slate-900 rounded-lg p-6 border border-gray-800 text-center transition-all duration-500 ${
                showImages ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{
                transitionDelay: showImages ? `${i * 100}ms` : "0ms",
              }}
            >
              <p className="text-lg font-bold text-white">{item.year}</p>
              <p className="text-sm text-cyan-400 font-semibold mt-2 text-balance">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
