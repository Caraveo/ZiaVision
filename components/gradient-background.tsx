"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number;
  y: number;
  color: string;
}

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

    // Generate random color
    const getRandomColor = (): string => {
      const colors = [
        'rgba(255, 255, 255, 0.1)',
        'rgba(255, 255, 255, 0.05)',
        'rgba(255, 255, 255, 0.02)'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Create gradient points
    const points: Point[] = []
    const numPoints = 10 // More points for more complex gradients

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        color: getRandomColor()
      })
    }

    const animate = () => {
      // Clear canvas with a dark blue base
      ctx.fillStyle = "rgb(5, 15, 45)"
      ctx.fillRect(0, 0, width, height)

      // Update point positions
      points.forEach((point) => {
        point.x += (Math.random() - 0.5) * 0.5
        point.y += (Math.random() - 0.5) * 0.5

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.x = Math.random() * width
        if (point.y < 0 || point.y > height) point.y = Math.random() * height
      })

      // Create gradients between points
      for (let i = 0; i < points.length; i++) {
        const gradient = ctx.createRadialGradient(
          points[i].x,
          points[i].y,
          0,
          points[i].x,
          points[i].y,
          Math.max(width, height) * 0.5,
        )

        gradient.addColorStop(0, points[i].color)
        gradient.addColorStop(1, "transparent")

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

