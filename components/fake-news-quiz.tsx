"use client"

import { useState } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

interface QuizQuestion {
  id: number
  headline: string
  context: string
  correctAnswer: "real" | "fake"
  explanation: string
  source: string
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    headline: "TikTok deepfakes show lawmakers confessing to flood control corruption",
    context: "Videos from accounts like @bistado.files in November 2024",
    correctAnswer: "fake",
    explanation:
      "These were AI-manipulated deepfake videos targeting politicians. The account was removed after spreading false confessions using artificial intelligence.",
    source: "Rappler/Philippine Star - November 2024",
  },
  {
    id: 2,
    headline: "President Marcos issues deepfake audio ordering military attack on China",
    context: "Audio circulated ahead of May 2025 midterm elections",
    correctAnswer: "fake",
    explanation:
      "An AI-generated audio mimicking the President's voice falsely claimed he ordered military action. The Presidential Communications Office quickly debunked it.",
    source: "Medium - AI Misinformation Analysis 2025",
  },
  {
    id: 3,
    headline: "Registration links promising P4,500 Christmas bonus from DSWD",
    context: "Circulated as UCT program payout in November 2025",
    correctAnswer: "fake",
    explanation:
      "These were phishing scams. The Unconditional Cash Transfer program ended in 2020, and the links led to unsafe blog sites designed to steal personal information.",
    source: "Rappler Fact Check - November 2025",
  },
  {
    id: 4,
    headline: "Philippines ranks third in Asia for electricity rates, behind Singapore and Japan",
    context: "Claim about energy costs compared to neighboring countries",
    correctAnswer: "real",
    explanation:
      "This is accurate according to fact-checkers. The Philippines does NOT have the highest rates in Asia, ranking third after Singapore and Japan.",
    source: "Vera Files Fact Check 2025",
  },
  {
    id: 5,
    headline: "Deepfake video of deceased drug war victim tells sister she is lying about his death",
    context: "Posted by pro-Duterte influencer on Facebook targeting Sheerah Escudero",
    correctAnswer: "real",
    explanation:
      "This actually happened. A computer-generated image of Ephraim was used to harass his sister, demonstrating how deepfakes target victims and their families.",
    source: "Al Jazeera - July 2025",
  },
  {
    id: 6,
    headline: "West Philippine Sea: Philippines has full sovereignty over disputed waters",
    context: "Correction regarding Philippine legal rights in territorial waters",
    correctAnswer: "fake",
    explanation:
      "The Philippines has sovereign RIGHTS, not full sovereignty, over features in the West Philippine Sea. Meta AI made this error on Google Maps.",
    source: "Vera Files - WPS Fact Check 2025",
  },
]

export function FakeNewsQuiz() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<"real" | "fake" | null>(null)
  const [answered, setAnswered] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const question = QUIZ_QUESTIONS[currentQuestion]

  const handleAnswer = (answer: "real" | "fake") => {
    if (answered) return

    setSelectedAnswer(answer)
    setAnswered(true)

    if (answer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setQuizComplete(false)
  }

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Can You Spot the Lie?</h2>
        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
          Test your ability to identify misinformation. Each question features real cases from the Philippines. Choose
          whether each statement is REAL news or a FAKE claim.
        </p>
      </div>

      {!quizComplete ? (
        <div className="space-y-8">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400 font-light">
                Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
              </p>
              <p className="text-sm text-cyan-400 font-semibold">Score: {score}</p>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg border border-gray-700 p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-500 font-light uppercase tracking-wide">Headline / Statement</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-relaxed text-balance">
                {question.headline}
              </h3>
              <p className="text-sm text-gray-400 font-light italic border-l-2 border-gray-600 pl-4">
                {question.context}
              </p>
            </div>

            {/* Answer Buttons */}
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              <button
                onClick={() => handleAnswer("real")}
                disabled={answered}
                className={`relative overflow-hidden rounded-lg py-4 px-6 font-semibold text-lg transition-all duration-300 transform ${
                  !answered
                    ? "bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 hover:scale-105 cursor-pointer"
                    : selectedAnswer === "real"
                      ? question.correctAnswer === "real"
                        ? "bg-gradient-to-r from-green-700 to-green-600 scale-105 ring-2 ring-green-400"
                        : "bg-gradient-to-r from-red-700 to-red-600 scale-105 ring-2 ring-red-400"
                      : question.correctAnswer === "real"
                        ? "bg-gradient-to-r from-green-700 to-green-600"
                        : "bg-gray-700 opacity-50"
                }`}
              >
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  {answered && selectedAnswer === "real" && (question.correctAnswer === "real" ? "✓" : "✗")}
                  REAL NEWS
                </span>
              </button>

              <button
                onClick={() => handleAnswer("fake")}
                disabled={answered}
                className={`relative overflow-hidden rounded-lg py-4 px-6 font-semibold text-lg transition-all duration-300 transform ${
                  !answered
                    ? "bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 hover:scale-105 cursor-pointer"
                    : selectedAnswer === "fake"
                      ? question.correctAnswer === "fake"
                        ? "bg-gradient-to-r from-green-700 to-green-600 scale-105 ring-2 ring-green-400"
                        : "bg-gradient-to-r from-red-700 to-red-600 scale-105 ring-2 ring-red-400"
                      : question.correctAnswer === "fake"
                        ? "bg-gradient-to-r from-green-700 to-green-600"
                        : "bg-gray-700 opacity-50"
                }`}
              >
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  {answered && selectedAnswer === "fake" && (question.correctAnswer === "fake" ? "✓" : "✗")}
                  FAKE NEWS
                </span>
              </button>
            </div>

            {/* Feedback */}
            {answered && (
              <div
                className={`p-6 rounded-lg border-l-4 bg-opacity-10 animate-in fade-in ${
                  selectedAnswer === question.correctAnswer
                    ? "border-l-green-500 bg-green-900 text-green-100"
                    : "border-l-red-500 bg-red-900 text-red-100"
                }`}
              >
                <p className="font-semibold mb-2">
                  {selectedAnswer === question.correctAnswer ? "Correct! 🎯" : "Incorrect. Check the facts:"}
                </p>
                <p className="text-sm font-light mb-3">{question.explanation}</p>
                <p className="text-xs text-gray-300 italic">Source: {question.source}</p>
              </div>
            )}
          </div>

          {/* Next Button */}
          {answered && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {currentQuestion === QUIZ_QUESTIONS.length - 1 ? "See Results" : "Next Question"} →
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz completion screen showing final score and analysis */
        <div className="space-y-8">
          {/* Results Card */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-lg border border-gray-700 p-12 text-center space-y-6">
            <div>
              <p className="text-gray-400 text-lg font-light mb-2">Your Score</p>
              <p className="text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {score} / {QUIZ_QUESTIONS.length}
              </p>
            </div>

            {/* Score interpretation */}
            <div className="space-y-4">
              {score === QUIZ_QUESTIONS.length && (
                <div className="text-xl text-green-400 font-light">
                  🎯 Perfect! You're a misinformation detective. You understood how deception works in the Philippines.
                </div>
              )}
              {score >= QUIZ_QUESTIONS.length * 0.7 && score < QUIZ_QUESTIONS.length && (
                <div className="text-xl text-cyan-400 font-light">
                  👏 Great job! You caught most of the false claims. Keep developing your critical thinking skills.
                </div>
              )}
              {score >= QUIZ_QUESTIONS.length * 0.4 && score < QUIZ_QUESTIONS.length * 0.7 && (
                <div className="text-xl text-yellow-400 font-light">
                  📚 Learning! You're getting better at spotting misinformation. Keep practicing your media literacy.
                </div>
              )}
              {score < QUIZ_QUESTIONS.length * 0.4 && (
                <div className="text-xl text-orange-400 font-light">
                  🔍 Keep learning! Misinformation is designed to deceive. Try again and read each explanation
                  carefully.
                </div>
              )}
            </div>

            {/* Key insight */}
            <div className="bg-black/40 rounded-lg border border-gray-700 p-6 space-y-3">
              <p className="text-gray-300 font-light">
                <span className="text-cyan-400 font-semibold">Key Insight:</span> All of these were real cases from the
                Philippines. Misinformation evolves constantly—using deepfakes, phishing, and sophisticated social media
                tactics to spread. Staying vigilant requires understanding how these systems work.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Try Again
            </button>
            <a
              href="#conclusion"
              className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Continue to Commitment
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
