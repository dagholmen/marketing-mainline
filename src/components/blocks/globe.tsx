"use client"

import { useEffect, useRef, useState } from "react"

import createGlobe from "cobe"

import { cn } from "@/lib/utils"

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    let phi = 0

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: dimensions.width * 2,
      height: dimensions.height * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.005
      }
    })

    return () => {
      globe.destroy()
    }
  }, [dimensions])

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        className={cn("block", className)}
        style={{ width: dimensions.width, height: dimensions.height }}
      />
    </div>
  )
}
