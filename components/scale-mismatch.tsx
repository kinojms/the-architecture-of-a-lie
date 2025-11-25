"use client"
import { ScrollTextCard } from "@/components/scroll-text-card"
import { TimeDeficitTimer } from "@/components/time-deficit-timer"
import { FirehoseVisualization } from "@/components/firehose-visualization"
import { DisinformationHierarchy } from "@/components/disinformation-hierarchy"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

export function ScaleMismatch() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })

  return (
    <div className="max-w-6xl mx-auto px-6" ref={ref}>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-balance text-cyan-400">
        The Mathematics of a Lie
      </h2>

      {/* Sequence 1: The Time Deficit */}
      <div className="mb-20">
        <ScrollTextCard
          title="Sequence 1: The Time Deficit"
          text="It takes a fact-checker an average of 4 hours to verify a complex claim. In that same 4 hours, a single piece of viral misinformation in the Philippines can generate 50,000 shares."
          delay={0}
        />
        <div className="mt-12">
          <TimeDeficitTimer />
        </div>
      </div>

      {/* Sequence 2: The Firehose (Digital 2024 Data) */}
      <div className="mb-20">
        <ScrollTextCard
          title="Sequence 2: Patient Zero"
          text="The Philippines ranks #1 globally in time spent on social media—averaging 3 hours 34 minutes daily (86.75 million users, 73.4% penetration). This isn't just screen time. It's exposure time. The longer users stay, the more algorithms need extreme content to maintain engagement. Source: Digital 2024: The Philippines (We Are Social & Meltwater, 2024)."
          delay={100}
        />
        <div className="mt-12">
          <FirehoseVisualization />
        </div>
      </div>

      {/* Sequence 3: The Industrialized Lie */}
      <div className="mb-20">
        <ScrollTextCard
          title="Sequence 3: This Is Professional"
          text="As identified by Ong & Cabañes (2018) in 'Architects of Networked Disinformation,' misinformation in the Philippines is not accidental—it is an industrialized 'shadow economy' involving PR firms, digital strategists, and coordinated troll networks. Lies are pushed by paid professionals; truth is defended by volunteers."
          delay={100}
        />
        <div className="mt-12">
          <DisinformationHierarchy />
        </div>
      </div>

      {/* Sequence 4: The Conclusion */}
      <div className="mb-20">
        <ScrollTextCard
          title="The reality is..."
          text="We cannot fact-check our way out of this. When the flow of lies is automated, industrialized, and algorithmically amplified, the defense cannot be manual. Since the vulnerability is structural, the solution must be too."
          delay={100}
        />
      </div>

      {/* Research Sources Container */}
      <div className="mt-20 bg-slate-900 border border-slate-700 rounded-lg p-8">
        <h3 className="text-xl font-serif font-bold text-cyan-400 mb-6">Research Sources & Geographic Context</h3>

        <div className="space-y-6 text-sm text-gray-300">
          <div>
            <h4 className="font-semibold text-gray-100 mb-2">The "Velocity & Structure" Problem</h4>
            <p className="mb-2">
              <a
                href="https://scholarworks.umass.edu/communication_faculty_pubs/74/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Architects of Networked Disinformation: Behind the Scenes of Troll Accounts and Fake News Production in
                the Philippines
              </a>{" "}
              (Ong & Cabañes, 2018)
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong>Key Finding:</strong> Disinformation in the Philippines is industrialized, involving PR firms,
              seeded accounts, and coordinated troll networks operating at a speed that defies manual verification.
            </p>
            <p className="text-xs text-gray-500 italic">
              <strong>Geographic Scope:</strong> Study focused specifically on Philippines context during 2016-2018
              period. Findings reflect Philippine social media ecosystem and may not universalize to other countries
              with different platform adoption, cultural factors, or regulatory environments.
            </p>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h4 className="font-semibold text-gray-100 mb-2">The "Vulnerability" Problem</h4>
            <p className="mb-2">
              <a
                href="https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20220311085023&fbclid=IwY2xjawOSk-VleHRuA2FlbQIxMABicmlkETEwNEdudnRZWFJ3UEEwQnQ5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqrGwWNDDogcgvX-Gske_xDFVX7XBUEAjBAuWCUoPPay7E262H8vxwffbTRy_aem_2SbY9J3sHK1R2w5TmCV2eg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Fourth Quarter 2021 Social Weather Survey
              </a>{" "}
              (SWS, February 2022)
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong>Key Finding:</strong> 51% of Filipino adults find it "difficult" to spot fake news; 69% consider
              misinformation a serious problem.
            </p>
            <p className="text-xs text-gray-500 italic">
              <strong>Geographic Scope:</strong> Philippine adults only. Results reflect Filipino media literacy context
              and cannot be directly applied to other nations with different educational systems, media literacy
              programs, or information ecosystems.
            </p>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h4 className="font-semibold text-gray-100 mb-2">The "Volume" Problem</h4>
            <p className="mb-2">
              <a
                href="https://datareportal.com/reports/digital-2024-philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Digital 2024: The Philippines
              </a>{" "}
              (Datareportal / We Are Social & Meltwater, 2024)
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong>Key Finding:</strong> Filipinos spend an average of 3 hours 34 minutes on social media
              daily—ranking #1 or #2 globally. 86.75 million social media users represent 73.4% of population
              penetration.
            </p>
            <p className="text-xs text-gray-500 italic">
              <strong>Geographic Scope:</strong> Philippines only. Time-on-platform metrics vary significantly by
              region, age group, internet infrastructure, and economic factors. Cannot be directly compared to global
              averages as methodology and population demographics differ.
            </p>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h4 className="font-semibold text-gray-100 mb-2">Youth Susceptibility Study</h4>
            <p className="mb-2">
              <a
                href="https://archium.ateneo.edu/asog-pubs/267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                The Link Between Fake News Susceptibility and Political Polarization of the Youth in the Philippines
              </a>{" "}
              (Deinla et al., 2022)
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong>Key Finding:</strong> Filipino student sample scored only "Fair" (6.79/10) in discerning fake
              news, indicating concerning vulnerability among youth demographics.
            </p>
            <p className="text-xs text-gray-500 italic">
              <strong>Geographic Scope:</strong> Philippines student population only. Results specific to Philippine
              educational context and may not apply to other countries with different curricula, media literacy
              programs, or digital native experience.
            </p>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h4 className="font-semibold text-gray-100 mb-2">The "Capacity Gap"</h4>
            <p className="mb-2">
              <a
                href="https://www.rappler.com/technology/features/analysis-fake-news-internet-propaganda-2022-philippine-elections/#:~:text=To%20measure%20prevalence%2C%20interactions%2C%20or,been%20exposed%20to%20fake%20news."
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                Analysis: Fake news and internet propaganda, and the Philippine elections: 2022
              </a>{" "}
              (Rappler, 2022)
            </p>
            <p className="text-xs text-gray-400 mb-2">
              <strong>Key Finding:</strong> While the #FactsFirstPH coalition achieved 4.36 million interactions, opposing
              disinformation networks generated hundreds of millions of views across TikTok and YouTube. The scale
              mismatch demonstrates why volunteer fact-checking cannot compete with industrialized misinformation.
            </p>
            <p className="text-xs text-gray-500 italic">
              <strong>Geographic Scope:</strong> Philippines 2022 election period. This snapshot reflects specific
              technological, political, and social conditions of that moment and place. Misinformation tactics, platform
              algorithms, and organizational capacity evolve continuously.
            </p>
          </div>

          <div className="bg-black/40 rounded p-4 border border-gray-700">
          <p className="text-xs text-gray-400 font-light">
            <span className="text-yellow-400 font-semibold">Important Disclaimer:</span> These research sources provide evidence specific to the Philippines
          context. While the mechanisms of misinformation spread are broadly similar globally, the specific statistics,
          vulnerabilities, and capacities documented here should not be assumed to apply uniformly to other countries,
          regions, or communities without additional localized research.
          </p>
        </div>

        </div>

        
      </div>
    </div>
  )
}
