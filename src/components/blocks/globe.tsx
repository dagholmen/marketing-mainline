"use client"

import createGlobe from "cobe"
import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: resolvedTheme === "dark" ? 3 : 6,
      baseColor: resolvedTheme === "dark" ? [0.2, 0.2, 0.2] : [0.8, 0.8, 0.8],
      markerColor: [0.1, 0.8, 1],
      glowColor: resolvedTheme === "dark" ? [0.5, 0.5, 0.5] : [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      }
    })

    return () => {
      globe.destroy()
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full max-w-full aspect-square", className)}
    />
  )
}
