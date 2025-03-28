"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // More vibrant blue colors for the gradient animation
    const colors = [
      { r: 0, g: 102, b: 255 }, // Bright blue
      { r: 0, g: 153, b: 255 }, // Sky blue
      { r: 51, g: 51, b: 255 }, // Royal blue
      { r: 0, g: 0, b: 204 }, // Deep blue
      { r: 102, g: 0, b: 255 }, // Blue-purple
      { r: 0, g: 204, b: 255 }, // Cyan blue
    ]

    // Create gradient points
    const points = []
    const numPoints = 10 // More points for more complex gradients

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5, // Slightly faster movement
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 0.5 + 0.5, // Variable size for more dynamic effect
      })
    }

    const animate = () => {
      // Clear canvas with a dark blue base
      ctx.fillStyle = "rgb(5, 15, 45)"
      ctx.fillRect(0, 0, width, height)

      // Update point positions
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1
        if (point.y < 0 || point.y > height) point.vy *= -1
      })

      // Create gradients between points
      for (let i = 0; i < points.length; i++) {
        const gradient = ctx.createRadialGradient(
          points[i].x,
          points[i].y,
          0,
          points[i].x,
          points[i].y,
          Math.max(width, height) * points[i].size,
        )

        const color = points[i].color
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Add subtle light streaks for a prism effect
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(Date.now() / 2000 + i) * width) / 2 + width / 2
        const y = (Math.cos(Date.now() / 2000 + i) * height) / 2 + height / 2

        const gradient = ctx.createLinearGradient(
          x,
          y,
          x + Math.cos(Date.now() / 1000) * 300,
          y + Math.sin(Date.now() / 1000) * 300,
        )

        gradient.addColorStop(0, "rgba(255, 255, 255, 0)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.05)")
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
}

