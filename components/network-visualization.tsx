"use client"

import { useEffect, useRef, useState } from "react"
import { useScrollTrigger } from "@/hooks/use-scroll-trigger"

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  label: string
  isBotNet?: boolean
}

const NODES: Node[] = [
  { id: 1, x: 200, y: 150, vx: 0, vy: 0, size: 8, label: "User" },
  { id: 2, x: 300, y: 200, vx: 0, vy: 0, size: 12, label: "Bot", isBotNet: true },
  { id: 3, x: 250, y: 300, vx: 0, vy: 0, size: 10, label: "Influencer" },
  { id: 4, x: 400, y: 180, vx: 0, vy: 0, size: 12, label: "Bot", isBotNet: true },
  { id: 5, x: 350, y: 320, vx: 0, vy: 0, size: 6, label: "User" },
  { id: 6, x: 150, y: 280, vx: 0, vy: 0, size: 8, label: "User" },
  { id: 7, x: 400, y: 300, vx: 0, vy: 0, size: 9, label: "User" },
  { id: 8, x: 280, y: 100, vx: 0, vy: 0, size: 11, label: "Bot", isBotNet: true },
]

export function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { ref: triggerRef, isVisible } = useScrollTrigger({ threshold: 0.4 })
  const [highlightedNodes, setHighlightedNodes] = useState<Set<number>>(new Set())
  const animationRef = useRef<number | undefined>(undefined)
  const progressRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    const width = canvas.width
    const height = canvas.height

    // Create working copies of nodes
    const nodes: Node[] = NODES.map((n) => ({
      ...n,
      x: (n.x / 500) * width,
      y: (n.y / 400) * height,
    }))

    const drawNetwork = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(10, 10, 10, 0.95)"
      ctx.fillRect(0, 0, width, height)

      const progress = (progressRef.current % 4000) / 4000 // 4 second cycle

      // Calculate which nodes to highlight (pulse effect)
      const newHighlighted = new Set<number>()
      nodes.forEach((node) => {
        if (node.isBotNet) {
          const botProgress = (progress * 4 + node.id * 0.5) % 1
          if (botProgress < 0.3) {
            newHighlighted.add(node.id)
          }
        }
      })
      setHighlightedNodes(newHighlighted)

      // Draw edges
      nodes.forEach((node) => {
        nodes.forEach((otherNode) => {
          if (node.id < otherNode.id) {
            const dx = otherNode.x - node.x
            const dy = otherNode.y - node.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 200) {
              const opacity = newHighlighted.has(node.id) || newHighlighted.has(otherNode.id) ? 0.6 : 0.1

              ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        const isHighlighted = newHighlighted.has(node.id)
        const scale = isHighlighted ? 1.3 : 1

        // Node circle
        ctx.fillStyle = node.isBotNet ? "rgba(239, 68, 68, 0.8)" : "rgba(96, 165, 250, 0.7)"
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * scale, 0, Math.PI * 2)
        ctx.fill()

        // Glow effect for highlighted nodes
        if (isHighlighted) {
          ctx.strokeStyle = "rgba(239, 68, 68, 0.4)"
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.size * scale + 8, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      // Update progress
      progressRef.current += 16 // ~60fps
      animationRef.current = requestAnimationFrame(drawNetwork)
    }

    drawNetwork()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  return (
    <div ref={triggerRef} className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
      {/* Canvas */}
      <div className="w-full lg:w-1/2 h-96 lg:h-full bg-black rounded-lg border border-gray-800 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Legend and Text */}
      <div className="lg:w-1/2 flex flex-col gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The Black Box</h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-4">
            Information doesn't spread randomly. Algorithms and bots amplify certain messages while suppressing others.
            What appears to be organic is often engineered.
          </p>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            Red nodes represent automated accounts that artificially boost content. Blue nodes are real users. Watch how
            misinformation clusters propagate.
          </p>
        </div>

        {/* Legend */}
        <div className="space-y-3 pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <span className="text-gray-300 font-light">Authentic Users</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-gray-300 font-light">Automated Accounts</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-blue-500" />
            <span className="text-gray-300 font-light">Information Flow</span>
          </div>
        </div>

        {/* Academic Context */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mt-4">
          <p className="text-sm text-gray-400 font-light italic">
            Research shows coordinated inauthentic behavior on social platforms can increase reach of false content by
            300-500%, making algorithmic amplification the primary vector for misinformation spread.
          </p>
        </div>
      </div>
    </div>
  )
}
