// /components/overlay-card.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface OverlayCardProps {
  images: string[]
  title: string
  subtitle: string
  buttonLabel: string
  buttonUrl: string
  autoPlay?: boolean
  interval?: number
}

export function OverlayCard({
  images,
  title,
  subtitle,
  buttonLabel,
  buttonUrl,
  autoPlay = true,
  interval = 4000
}: OverlayCardProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, autoPlay, interval])

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer">
      {/* Full Background Image */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay behind content */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 z-5" />

      {/* Navigation Arrows - Only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === current ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Content Box - Right side overlaying the image */}
      <div className="absolute right-0 top-0 w-2/5 h-full bg-white/5 group-hover:bg-white/85 transition-all duration-300 flex flex-col items-start justify-center px-6 md:px-8 py-8 z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gray-900 transition-colors duration-300 mb-3 text-left">
          {title}
        </h3>
        <p className="text-white/80 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base mb-6 text-left leading-relaxed">
          {subtitle}
        </p>
        <Button
          size="md"
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto"
        >
          <a href={buttonUrl}>{buttonLabel}</a>
        </Button>
      </div>
    </div>
  )
}
