"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

export function DisinformationHierarchy() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <div className="space-y-4">
        {/* Tier 1: Architects */}
        <div
          className={`bg-gradient-to-r from-red-900/40 to-red-800/20 border-l-4 border-red-500 rounded-lg p-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
        >
          <h3 className="font-serif font-bold text-red-400 mb-2">Tier 1: The Architects</h3>
          <p className="text-sm text-gray-300 font-light">
            PR firms, political strategists, and corporate entities design disinformation campaigns. They set
            objectives, allocate budgets, and coordinate messaging across networks.
          </p>
        </div>

        {/* Tier 2: Digital Influencers */}
        <div
          className={`bg-gradient-to-r from-orange-900/40 to-orange-800/20 border-l-4 border-orange-500 rounded-lg p-6 transition-all duration-700 ml-4 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
        >
          <h3 className="font-serif font-bold text-orange-400 mb-2">Tier 2: Digital Influencers</h3>
          <p className="text-sm text-gray-300 font-light">
            Semi-anonymous accounts with moderate follower bases amplify messaging. They add credibility and reach by
            reshaping architect content into seemingly organic posts.
          </p>
        </div>

        {/* Tier 3: Community Operators */}
        <div
          className={`bg-gradient-to-r from-yellow-900/40 to-yellow-800/20 border-l-4 border-yellow-500 rounded-lg p-6 transition-all duration-700 ml-8 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <h3 className="font-serif font-bold text-yellow-400 mb-2">Tier 3: Troll Communities</h3>
          <p className="text-sm text-gray-300 font-light">
            Thousands of managed accounts (using fake profiles and bulk SIM cards) flood comment sections, like/share
            content, and create the illusion of grassroots support. Velocity is created here.
          </p>
        </div>

        {/* Key Insight */}
        <div className="bg-slate-900 border border-cyan-500/30 rounded-lg p-6 mt-8">
          <p className="text-sm text-gray-300 font-light mb-3">
            <span className="text-cyan-400 font-semibold">The Critical Difference:</span> We treat misinformation like a
            "glitch" or "accident." In the Philippines, it is an{" "}
            <span className="text-red-400 font-semibold">industry</span>—professionalized, coordinated, and paid.
          </p>
          <p className="text-xs text-gray-500 italic font-light">
            Source: Ong & Cabañes (2018), "Architects of Networked Disinformation"
          </p>
        </div>
      </div>
    </div>
  )
}
