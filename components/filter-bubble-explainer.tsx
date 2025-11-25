"use client"

import { useState } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { CitationLink } from "@/components/citation-link"
import { FilterBubbleModal } from "@/components/filter-bubble-modal"

export function FilterBubbleExplainer() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-pretty">
          The Filter Bubble Effect
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Diagram representation */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-6 border border-blue-500">
              <h4 className="font-semibold text-white mb-2">You Engage</h4>
              <p className="text-sm text-blue-100 text-balance">Click, like, share content aligned with your beliefs</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 rounded-lg p-6 border border-cyan-500">
              <h4 className="font-semibold text-white mb-2">Algorithm Learns</h4>
              <p className="text-sm text-cyan-100 text-balance">Your preferences get encoded into your feed</p>
            </div>

            <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-lg p-6 border border-red-500">
              <h4 className="font-semibold text-white mb-2">Bubble Forms</h4>
              <p className="text-sm text-red-100 text-balance">
                You see mostly confirmatory content, rarely contradictions
              </p>
            </div>
          </div>

          {/* Text explanation */}
          <div className="space-y-4 text-gray-300 text-lg font-light leading-relaxed">
            <p className="text-balance">
              <CitationLink
                href="https://arxiv.org/pdf/1703.01049"
                tooltip="Research on personalization algorithms and feedback loops"
              >
                Personalization algorithms create feedback loops
              </CitationLink>
              The more you engage with content, the more of it the algorithm shows you.
            </p>
            <p className="text-balance">
              This isn't malicious design—it's just optimized for engagement. But engagement maximization has a dark
              side:{" "}
              <CitationLink
                href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0321361"
                tooltip="Studies on false information virality and engagement"
              >
                <span className="text-red-400 font-semibold">false information engages more</span>
              </CitationLink>
              
            </p>
            <p className="text-balance">
              When your information diet consists exclusively of confirmatory content, misinformation becomes
              indistinguishable from fact.
            </p>
            <p className="text-balance">
              The lie fits perfectly into your worldview. You share it. Others share it. The bubble expands.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-black border-2 border-cyan-500 rounded-lg p-6 mt-8 cursor-pointer hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-left"
        >
          <p className="text-gray-300 text-center font-light text-balance">
            Want to understand your own filter bubble?{" "}
            <span className="text-cyan-400 font-semibold">Explore your feed patterns</span>
          </p>
        </button>
      </div>

      <FilterBubbleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
