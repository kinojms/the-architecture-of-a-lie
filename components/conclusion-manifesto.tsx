"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { useState } from "react"
import { CitationLink } from "@/components/citation-link"

export function ConclusionManifesto() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })
  const [commitments, setCommitments] = useState<string[]>([])

  const MANIFESTO_ITEMS = [
    "I will question what I believe",
    "I will seek multiple sources before sharing",
    "I will recognize my own biases",
    "I will engage with opposing viewpoints",
    "I will support media literacy education",
    "I will hold platforms accountable",
  ]

  const toggleCommitment = (item: string) => {
    setCommitments((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  return (
    <div
      ref={ref}
      className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Main message */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-balance">Break the Loop</h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Understanding how misinformation spreads is the first step. But understanding alone changes nothing. What
          matters is what we do with that knowledge.
        </p>
      </div>

      {/* Key takeaways */}
      <div className="bg-slate-900/50 border border-gray-800 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-serif font-bold text-white mb-6">What We Learned</h3>
        <ul className="space-y-4 text-gray-300 font-light text-lg">
          <li className="flex gap-3 items-start">
            <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
            <span>
              <CitationLink href="https://rappler.com" tooltip="Research on engagement economics and viral content">
                <span className="font-semibold text-white">Engagement economics</span>
              </CitationLink>{" "}
              create incentives for sensational, often false content.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
            <span>
              <CitationLink
                href="https://www.aljazeera.com/news/2025/7/15/ai-and-disinformation-fuel-political-tensions-in-the-philippines"
                tooltip="Studies on algorithmic bias amplification"
              >
                <span className="font-semibold text-white">Algorithms amplify</span>
              </CitationLink>{" "}
              our biases faster than we can correct them.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
            <span>
              <CitationLink
                href="https://verafiles.org/"
                tooltip="Historical analysis of misinformation spread velocity"
              >
                <span className="font-semibold text-white">Scale and speed</span>
              </CitationLink>{" "}
              are what distinguishes modern misinformation from historical parallels.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
            <span>
              <CitationLink
                href="https://rappler.com/newsbreak/fact-check/"
                tooltip="Fact-checking resources and best practices"
              >
                <span className="font-semibold text-white">No single solution</span>
              </CitationLink>{" "}
              defeats misinformation; we need systemic change.
            </span>
          </li>
        </ul>
      </div>

      {/* Interactive manifesto */}
      <div className="mb-12">
        <h3 className="text-2xl font-serif font-bold text-white mb-6">Personal Commitment</h3>
        <p className="text-gray-400 text-sm font-light mb-6">What will you commit to doing differently?</p>
        <div className="space-y-3">
          {MANIFESTO_ITEMS.map((item, i) => (
            <button
              key={i}
              onClick={() => toggleCommitment(item)}
              className={`w-full text-left px-4 py-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                commitments.includes(item)
                  ? "border-cyan-500 bg-cyan-500/10"
                  : "border-gray-700 bg-gray-900/50 hover:border-gray-600"
              }`}
            >
              <div
                className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                  commitments.includes(item) ? "border-cyan-400 bg-cyan-400" : "border-gray-500"
                }`}
              >
                {commitments.includes(item) && <span className="text-black font-bold text-sm">✓</span>}
              </div>
              <span className="text-white font-light">{item}</span>
            </button>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-500 text-sm font-light">
          {commitments.length > 0 && (
            <span className="text-cyan-400 font-semibold">
              You've committed to {commitments.length} action{commitments.length !== 1 ? "s" : ""}
            </span>
          )}
        </p>
      </div>

      {/* Resources and bibliography */}
      <div className="bg-slate-900/50 border border-gray-800 rounded-lg p-8">
        <h3 className="text-xl font-serif font-bold text-white mb-6">Learn More</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400 font-light">
          <div>
            <h4 className="font-semibold text-white mb-3 text-base">Philippine Fact-Checking & Media</h4>
            <ul className="space-y-2 text-xs">
              <li>
                •{" "}
                <CitationLink href="https://rappler.com" tooltip="Independent news with fact-checking">
                  Rappler
                </CitationLink>
              </li>
              <li>
                •{" "}
                <CitationLink href="https://verafiles.org" tooltip="Philippine fact-checking organization">
                  Vera Files
                </CitationLink>
              </li>
              <li>
                •{" "}
                <CitationLink href="https://www.abs-cbnnews.com" tooltip="Major Philippine news outlet">
                  ABS-CBN News
                </CitationLink>
              </li>
              <li>
                •{" "}
                <CitationLink href="https://www.gmanetwork.com" tooltip="Major Philippine broadcast network">
                  GMA Network
                </CitationLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-base">International Research & Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                •{" "}
                <CitationLink
                  href="https://medium.com/@franciscobryaaan/is-it-legit-combatting-ai-driven-misinformation-in-the-philippines-329e034be367"
                  tooltip="AI-driven misinformation analysis"
                >
                  AI Misinformation Studies
                </CitationLink>
              </li>
              <li>
                •{" "}
                <CitationLink
                  href="https://www.aljazeera.com/news/2025/7/15/ai-and-disinformation-fuel-political-tensions-in-the-philippines"
                  tooltip="International coverage of Philippine misinformation"
                >
                  Al Jazeera Coverage
                </CitationLink>
              </li>
              <li>
                •{" "}
                <CitationLink href="https://snopes.com" tooltip="Fact-checking resource">
                  Snopes.com
                </CitationLink>
              </li>
              <li>
                •{" "}
                <CitationLink href="https://www.factcheck.org" tooltip="Fact-checking resource">
                  FactCheck.org
                </CitationLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
