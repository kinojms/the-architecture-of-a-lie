"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollTriggerOptions {
  threshold?: number
  onEnter?: () => void
  onExit?: () => void
  once?: boolean
}

export function useScrollTrigger(options: ScrollTriggerOptions = {}) {
  const { threshold = 0.5, onEnter, onExit, once = false } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !once) {
            setIsVisible(true)
            onEnter?.()
            setHasTriggered(true)
          }
        } else {
          setIsVisible(false)
          if (!once) {
            onExit?.()
          }
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, onEnter, onExit, once, hasTriggered])

  return { ref, isVisible }
}
