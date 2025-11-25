"use client"

import type React from "react"

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  isSticky?: boolean
}

export function ScrollSection({ children, className = "", id, isSticky = false }: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full ${
        isSticky ? "sticky top-0 h-screen overflow-hidden" : "min-h-screen"
      } flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  )
}
