"use client"

import { useEffect, useState } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

interface MatrixChar {
  id: number
  left: number
  duration: number
  delay: number
}

export function MatrixTransition() {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.5 })
  const [matrixChars, setMatrixChars] = useState<MatrixChar[]>([])

  useEffect(() => {
    // Generate animation values only on client side to avoid hydration mismatch
    const chars = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }))
    setMatrixChars(chars)
  }, [])

  return (
    <div
      ref={ref}
      className={`w-full h-screen bg-black flex items-center justify-center relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixChars.map((char) => (
          <div
            key={char.id}
            className="absolute text-cyan-500 font-mono text-sm opacity-20 animate-pulse"
            style={{
              left: `${char.left}%`,
              animation: `fall ${char.duration}s linear infinite`,
              animationDelay: `${char.delay}s`,
            }}
          >
            {"01".repeat(20)}
          </div>
        ))}
      </div>

      {/* Center Text */}
      <div className="relative z-10 text-center">
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-cyan-400 text-balance">The System Operates</h3>
        <p className="mt-4 text-gray-400 text-lg md:text-xl font-light">
          Beyond individual psychology, information flows through networks of algorithms and incentives
        </p>
      </div>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}
