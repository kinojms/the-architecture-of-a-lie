"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

interface FilterBubbleData {
  platforms: string[]
  contentCategories: string[]
  hoursPerDay: number
}

export function FilterBubbleModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"intro" | "input" | "results">("intro")
  const [data, setData] = useState<FilterBubbleData>({
    platforms: [],
    contentCategories: [],
    hoursPerDay: 2,
  })

  const platforms = ["Facebook", "TikTok", "Instagram", "YouTube", "Twitter/X"]
  const contentCategories = ["Tech", "News", "Entertainment", "Politics", "Sports", "Lifestyle"]

  const handlePlatformToggle = (platform: string) => {
    setData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))
  }

  const handleCategoryToggle = (category: string) => {
    setData((prev) => ({
      ...prev,
      contentCategories: prev.contentCategories.includes(category)
        ? prev.contentCategories.filter((c) => c !== category)
        : [...prev.contentCategories, category],
    }))
  }

  const calculateBubbleScore = () => {
    // Score based on number of platforms and categories
    // Wider variety = lower bubble score (more open) = lower risk
    // Narrow focus = higher bubble score (tighter bubble) = higher risk
    const maxPlatforms = 5
    const maxCategories = 6
    const platformWeight = (1 - data.platforms.length / maxPlatforms) * 40
    const categoryWeight = (1 - data.contentCategories.length / maxCategories) * 40
    const timeWeight = Math.min(data.hoursPerDay / 5, 1) * 20
    return Math.round(platformWeight + categoryWeight + timeWeight)
  }

  const bubbleScore = calculateBubbleScore()

  const handleAnalyze = () => {
    if (data.platforms.length === 0 || data.contentCategories.length === 0) {
      alert("Please select at least one platform and content category")
      return
    }
    setStep("results")
  }

  const handleReset = () => {
    setStep("input")
    setData({
      platforms: [],
      contentCategories: [],
      hoursPerDay: 2,
    })
  }

  const handleClose = () => {
    setStep("input")
    setData({
      platforms: [],
      contentCategories: [],
      hoursPerDay: 2,
    })
    onClose()
  }

  const chartData = [
    { name: "Global Average", value: 143 },
    { name: "Philippines", value: 214 },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-slate-900 border border-cyan-500 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 border-b border-cyan-500 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Your Filter Bubble Profile</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl font-light"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          {step === "intro" ? (
            <>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">What Is a Filter Bubble?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A "filter bubble" is a phenomenon where algorithms personalize your social media feed to show you
                    content similar to what you've previously engaged with. This creates an echo chamber that reinforces
                    your existing beliefs. Research by Eli Pariser (2011) showed that while personalization makes social
                    media more relevant, it can also reduce exposure to challenging perspectives and increase
                    vulnerability to misinformation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Why This Matters</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Misinformation spreads faster in tight filter bubbles because algorithms optimize for engagement,
                    not accuracy. The narrower your information diet, the more extreme content the algorithm needs to
                    show you to keep you watching. This is the core mechanism behind how false information goes viral.
                  </p>
                </div>

                <div className="bg-blue-950/40 border border-blue-800 rounded-lg p-4">
                  <p className="text-blue-300 text-xs font-semibold mb-1">ⓘ EDUCATIONAL TOOL</p>
                  <p className="text-gray-300 text-xs">
                    This tool is designed to help you reflect on your own information diet and illustrate filter bubble
                    concepts from academic research (Pariser 2011, Sunstein 2001). The "Filter Bubble Score" is
                    illustrative only and not a scientifically-validated assessment. Results are based on platform
                    diversity, content category diversity, and screen time—not on actual engagement data.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">How Your Score Is Calculated</h3>
                  <ul className="text-gray-300 text-xs space-y-2">
                    <li>
                      <span className="text-cyan-300 font-semibold">Platform Diversity (40%):</span> Fewer platforms =
                      higher bubble score (tighter)
                    </li>
                    <li>
                      <span className="text-cyan-300 font-semibold">Content Diversity (40%):</span> Fewer content
                      categories = higher bubble score (tighter)
                    </li>
                    <li>
                      <span className="text-cyan-300 font-semibold">Screen Time (20%):</span> More hours = higher bubble
                      score (tighter exposure to algorithmic content)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">What Your Score Means</h3>
                  <div className="space-y-2 text-xs text-gray-300">
                    <p>
                      <span className="bg-green-900/30 text-green-300 px-2 py-1 rounded font-semibold">
                        0-33 (Open):
                      </span>{" "}
                      Wide exposure to diverse platforms and content. Lower algorithmic pressure toward extremism.
                    </p>
                    <p>
                      <span className="bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded font-semibold">
                        34-66 (Moderate):
                      </span>{" "}
                      Some diversity, but concentrated interests. Moderate vulnerability to misinformation resonance.
                    </p>
                    <p>
                      <span className="bg-red-900/30 text-red-300 px-2 py-1 rounded font-semibold">
                        67-100 (Tight):
                      </span>{" "}
                      Narrow focus on specific platforms or content. High algorithmic pressure toward polarization and
                      misinformation.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => setStep("input")}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold h-10"
                >
                  Start Analysis
                </Button>
              </div>
            </>
          ) : step === "input" ? (
            <>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-700">
                <h3 className="text-lg font-semibold text-white">About You</h3>
                <button
                  onClick={() => setStep("intro")}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all text-sm font-semibold"
                  title="Learn more about filter bubbles"
                >
                  ⓘ
                </button>
              </div>

              {/* Platforms Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Which platforms do you use most?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform) => (
                    <label key={platform} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={data.platforms.includes(platform)}
                        onChange={() => handlePlatformToggle(platform)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Content Categories Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What content do you engage with most?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {contentCategories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={data.contentCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Hours Per Day Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Average hours per day on social media</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="0.5"
                    value={data.hoursPerDay}
                    onChange={(e) => setData((prev) => ({ ...prev, hoursPerDay: Number.parseFloat(e.target.value) }))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <span className="text-cyan-400 font-semibold w-16 text-right">{data.hoursPerDay.toFixed(1)} hrs</span>
                </div>
              </div>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold h-10"
              >
                Analyze My Bubble
              </Button>
            </>
          ) : (
            <>
              {/* Results Section */}
              <div className="space-y-8">
                {/* Bubble Score */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Your Filter Bubble Score</h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="8"
                          strokeDasharray={`${(bubbleScore / 100) * 282.7} 282.7`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold text-cyan-400">{bubbleScore}</div>
                        <div className="text-xs text-gray-400">/ 100</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-6 max-w-md mx-auto text-balance font-semibold">
                    {bubbleScore > 70
                      ? "Tight Filter Bubble"
                      : bubbleScore > 40
                        ? "Moderate Filter Bubble"
                        : "Open Information Diet"}
                  </p>
                  <p className="text-gray-400 text-xs mt-3 max-w-md mx-auto text-balance">
                    {bubbleScore > 70
                      ? "Your feed is highly concentrated. Research shows tight bubbles increase vulnerability to misinformation resonance (Sunstein, 2001; Pariser, 2011)."
                      : bubbleScore > 40
                        ? "You have moderate diversity. The mix of platforms and content categories provides some exposure to different perspectives, but concentrated areas of focus may still amplify misinformation."
                        : "You have diverse information sources across multiple platforms and content categories. This reduces algorithmic pressure toward extreme content."}
                  </p>
                </div>

                {/* Your Profile */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">Your Profile:</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>
                      <span className="text-cyan-400 font-semibold">Platforms:</span> {data.platforms.join(", ")}
                    </p>
                    <p>
                      <span className="text-cyan-400 font-semibold">Content Focus:</span>{" "}
                      {data.contentCategories.join(", ")}
                    </p>
                    <p>
                      <span className="text-cyan-400 font-semibold">Daily Screen Time:</span> {data.hoursPerDay} hours
                    </p>
                  </div>
                </div>

                {/* Social Media Comparison Chart */}
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-4">Daily Social Media Usage Comparison</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #06b6d4" }}
                        labelStyle={{ color: "#fff" }}
                      />
                      <Bar dataKey="value" fill="#06b6d4" name="Minutes" radius={[8, 8, 0, 0]}>
                        <Cell fill="#06b6d4" />
                        <Cell fill="#0891b2" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-xs text-gray-400 mt-3 text-balance">
                    <span className="text-cyan-400 font-semibold">Source:</span> We Are Social 2024. Global average: 2h
                    23m daily. Philippines: 3h 34m daily. Higher screen time amplifies algorithmic exposure and
                    misinformation risk.
                  </p>
                </div>

                {/* Key Insight */}
                <div className="bg-red-950/40 border border-red-800 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">⚠ What This Means for You</h4>
                  <p className="text-gray-300 text-sm text-balance leading-relaxed">
                    The algorithms on these platforms don't optimize for truth—they optimize for engagement. The longer
                    you stay, the more extreme content appears in your feed. This isn't a personal failure; it's a
                    structural feature of algorithmic recommendation systems. Understanding your own filter bubble is
                    the first step toward consuming information more critically.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 bg-transparent"
                  >
                    Try Again
                  </Button>
                  <Button onClick={handleClose} className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white">
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
