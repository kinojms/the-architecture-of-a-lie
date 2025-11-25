"use client"

import type React from "react"

interface CitationLinkProps {
  children: React.ReactNode
  href: string
  tooltip: string
}

export function CitationLink({ children, href, tooltip }: CitationLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 border-b border-cyan-400/40 hover:border-cyan-300 transition-all whitespace-nowrap"
      title={tooltip}
    >
      {children}
      <svg className="w-3 h-3 opacity-70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  )
}
