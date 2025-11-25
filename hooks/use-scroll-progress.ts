"use client"

import { useEffect, useState } from "react"

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [direction, setDirection] = useState<"up" | "down">("down")

  useEffect(() => {
    let lastScrollPosition = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Calculate scroll progress (0-100)
      const progress = (currentScroll / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
      setScrollPosition(currentScroll)

      // Determine scroll direction
      if (currentScroll > lastScrollPosition) {
        setDirection("down")
      } else {
        setDirection("up")
      }

      lastScrollPosition = currentScroll
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { scrollProgress, scrollPosition, direction }
}
