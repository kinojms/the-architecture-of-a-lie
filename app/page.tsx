"use client"

import { ScrollSection } from "@/components/scroll-section"
import { ScrollTextCard } from "@/components/scroll-text-card"
import { PhoneMockup } from "@/components/phone-mockup"
import { MatrixTransition } from "@/components/matrix-transition"
import { NetworkVisualization } from "@/components/network-visualization"
import { FilterBubbleExplainer } from "@/components/filter-bubble-explainer"
import { SplitScreenComparison } from "@/components/split-screen-comparison"
import { GovernanceInteractive } from "@/components/governance-interactive"
import { ConclusionManifesto } from "@/components/conclusion-manifesto"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { FakeNewsQuiz } from "@/components/fake-news-quiz"
import { ScaleMismatch } from "@/components/scale-mismatch"

export default function Home() {
  return (
    <main className="w-full">
      <ScrollProgressIndicator />

      {/* Hero/Title Section */}
      <ScrollSection className="bg-gradient-to-b from-black via-slate-900 to-black" id="hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-balance mb-6">The Architecture of a Lie</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            How misinformation spreads through digital networks and reshapes reality
          </p>
          <p className="text-sm text-gray-600 mt-2">Created by Justin Sacdalan</p>
          <div className="mt-12 text-gray-500 animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </ScrollSection>

      {/* Introduction Section */}
      <ScrollSection className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollTextCard
            title="The Modern Crisis"
            text="In an age of unprecedented information flow, falsehoods spread faster and further than ever before. This journey explores how misinformation moves through networks, captures minds, and shapes society—revealing the mechanisms behind the lies we believe."
            delay={100}
          />
        </div>
      </ScrollSection>

      {/* Section 1: Dopamine Loop */}
      <ScrollSection className="bg-black py-20" id="dopamine-loop">
        <PhoneMockup />
      </ScrollSection>

      {/* Matrix Transition */}
      <MatrixTransition />

      {/* Section 2: Network Visualization */}
      <ScrollSection className="bg-black py-20" id="network">
        <div className="max-w-6xl mx-auto px-6">
          <NetworkVisualization />
        </div>
      </ScrollSection>

      {/* Filter Bubble Section */}
      <ScrollSection className="bg-slate-950 py-20">
        <FilterBubbleExplainer />
      </ScrollSection>

      {/* Section 3: Historical Context */}
      <ScrollSection className="bg-black py-20" id="history">
        <SplitScreenComparison />
      </ScrollSection>

      {/* Section 4: Scale Mismatch */}
      <ScrollSection className="bg-slate-950 py-20" id="scale-mismatch">
        <ScaleMismatch />
      </ScrollSection>

      {/* Section 5: Governance and Solutions */}
      <ScrollSection className="bg-slate-950 py-20">
        <GovernanceInteractive />
      </ScrollSection>

      {/* Section 6: Fake News Quiz */}
      <ScrollSection className="bg-black py-20" id="quiz">
        <FakeNewsQuiz />
      </ScrollSection>

      {/* Section 7: Conclusion */}
      <ScrollSection className="bg-black py-20" id="conclusion">
        <ConclusionManifesto />
      </ScrollSection>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm font-light">
          <p>Built as an interactive exploration of misinformation dynamics and digital literacy.</p>
          <p className="mt-4">
            © Justin Sacdalan 2025. The Architecture of a Lie. A project about understanding systems, not spreading misinformation.
          </p>
        </div>
      </footer>
    </main>
  )
}
