"use client"

import { useState } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"
import { ExternalLink } from "lucide-react"

interface Policy {
  id: string
  title: string
  description: string
  effectiveness: number
  effectivenessLabel: string
  challenge: string
  color: string
  source: string
  sourceUrl: string
}

const POLICIES: Policy[] = [
  {
    id: "fact-check",
    title: "Fact-Checking",
    description: "Independent verification of claims reduces belief in false information.",
    effectiveness: 15,
    effectivenessLabel: "12-15% reduction in belief",
    challenge: "Reaches only a fraction of misinformation consumers; often dismissed as biased.",
    color: "from-blue-900 to-blue-700",
    source: "PNAS (2021) - Argentina, Nigeria, South Africa, UK",
    sourceUrl: "https://www.pnas.org/doi/10.1073/pnas.2104235118",
  },
  {
    id: "labels",
    title: "Content Labels / Community Notes",
    description: "Crowd-sourced labels significantly reduce engagement with false content.",
    effectiveness: 45,
    effectivenessLabel: "~45% reduction in reposts",
    challenge: "Requires scale and coordination; effectiveness varies by platform.",
    color: "from-yellow-900 to-yellow-700",
    source: "PNAS (2024/2025)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12478135/",
  },
  {
    id: "literacy",
    title: "Media Literacy",
    description: "Educational interventions improve ability to discern credible from false news.",
    effectiveness: 26,
    effectivenessLabel: "26.5% improvement (US), 17.5% (India)",
    challenge: "Requires sustained education; difficult to scale globally.",
    color: "from-green-900 to-green-700",
    source: "PNAS (2022) - US & India",
    sourceUrl: "https://www.pnas.org/doi/10.1073/pnas.1920498117",
  },
  {
    id: "design",
    title: "Platform Design / Accuracy Nudges",
    description: "Subtle prompts asking users to consider accuracy improve quality of shared news.",
    effectiveness: 20,
    effectivenessLabel: "~20% improvement in news quality",
    challenge: "Platforms still prioritize engagement over accuracy economically.",
    color: "from-purple-900 to-purple-700",
    source: "Nature (2021)",
    sourceUrl: "https://www.nature.com/articles/s41586-021-03344-2",
  },
  {
    id: "regulation",
    title: "Regulation (e.g., NetzDG)",
    description: "Legal frameworks requiring platform accountability and content removal.",
    effectiveness: 11,
    effectivenessLabel: "11% reduction in toxic content",
    challenge: "Enforcement varies; risk of censorship; not globally comparable.",
    color: "from-red-900 to-red-700",
    source: "ZEW (2021) - Germany's NetzDG Law",
    sourceUrl: "https://ftp.zew.de/pub/zew-docs/dp/dp21103.pdf",
  },
  {
    id: "community",
    title: "Community Action",
    description: "Users report, debunk, and contextualize misinformation—rated highly trustworthy.",
    effectiveness: 85,
    effectivenessLabel: "High trust across political spectrum",
    challenge: "Difficult to organize at scale; requires sustained community engagement.",
    color: "from-cyan-900 to-cyan-700",
    source: "PNAS Nexus (2024)",
    sourceUrl: "https://academic.oup.com/pnasnexus/article/3/7/pgae217/7686087",
  },
]

export function GovernanceInteractive() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })
  const [hoveredPolicy, setHoveredPolicy] = useState<string | null>(null)

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Potential Solutions</h2>
        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
          No single approach solves misinformation. Each solution has demonstrable promise and documented limitations.
          Hover over each approach to see research-backed effectiveness scores and challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {POLICIES.map((policy) => (
          <div
            key={policy.id}
            onMouseEnter={() => setHoveredPolicy(policy.id)}
            onMouseLeave={() => setHoveredPolicy(null)}
            className={`bg-gradient-to-br ${policy.color} rounded-lg p-6 cursor-pointer transition-all duration-300 border border-gray-700 ${
              hoveredPolicy === policy.id
                ? "scale-105 shadow-lg shadow-white/20"
                : hoveredPolicy === null
                  ? "scale-100"
                  : "scale-95 opacity-60"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>

            {hoveredPolicy === policy.id ? (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-200 font-light mb-2">Effectiveness</p>
                  <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full transition-all duration-300"
                      style={{ width: `${policy.effectiveness}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-300 mt-1 text-balance">{policy.effectivenessLabel}</p>
                </div>
                <div className="bg-black/40 rounded p-3 border border-gray-700">
                  <p className="text-xs text-gray-300 font-light text-balance">
                    <span className="text-red-400 font-semibold">Challenge:</span> {policy.challenge}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-200 font-light line-clamp-3 text-balance">{policy.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 rounded-lg border border-gray-800 p-8 mb-8">
        <h3 className="text-xl font-serif font-bold text-white mb-6">Research Sources & Geographic Context</h3>

        <div className="space-y-4 text-sm mb-6">
          {POLICIES.map((policy) => (
            <div key={policy.id} className="border-l-2 border-cyan-600 pl-4">
              <div className="flex items-start gap-2 mb-1">
                <span className="font-semibold text-cyan-400 whitespace-nowrap">{policy.title}:</span>
                <a
                  href={policy.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline flex items-center gap-1 group"
                >
                  {policy.source}
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
              <p className="text-xs text-gray-400 italic">
                ⚠️ Geographic Note:{" "}
                {policy.id === "fact-check"
                  ? "Study conducted in Argentina, Nigeria, South Africa, and the United Kingdom—findings may not apply universally to all contexts."
                  : policy.id === "literacy"
                    ? "Study conducted in the United States and India—effectiveness may vary in different cultural and educational contexts."
                    : policy.id === "regulation"
                      ? "Study analyzed Germany's NetzDG law specifically—regulatory effectiveness differs by country and legal framework."
                      : "Results may not generalize to all countries or communities without further research."}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-black/40 rounded p-4 border border-gray-700">
          <p className="text-xs text-gray-400 font-light">
            <span className="text-yellow-400 font-semibold">Important Disclaimer:</span> This research represents
            academic findings from specific geographic regions and time periods. Effectiveness of misinformation
            countermeasures varies significantly based on local media ecosystems, cultural contexts, political
            environments, and platform-specific algorithms. No single solution works universally.
          </p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 rounded-lg border border-gray-800 p-8 text-center">
        <p className="text-gray-300 text-lg font-light leading-relaxed text-pretty">
          The most effective approach combines all of these:{" "}
          <span className="text-cyan-400 font-semibold">
            platform accountability, media literacy, community engagement, and thoughtful regulation
          </span>
          .
        </p>
        <p className="text-gray-500 text-sm mt-4 font-light">
          But success requires commitment from users, platforms, and policymakers alike.
        </p>
      </div>
    </div>
  )
}
