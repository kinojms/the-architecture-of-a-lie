"use client"

import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

interface ScrollTextCardProps {
  title?: string
  text: string
  delay?: number
  animation?: "fadeInUp" | "slideInLeft" | "slideInRight"
}

export function ScrollTextCard({ title, text, delay = 0, animation = "fadeInUp" }: ScrollTextCardProps) {
  const { ref, isVisible } = useScrollTrigger({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`max-w-2xl mx-auto px-6 transition-opacity duration-300 ${
        isVisible ? `animate-${animation}` : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {title && <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-accent">{title}</h3>}
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">{text}</p>
    </div>
  )
}
