'use client'

import { Button } from '@/components/ui/button'
import { ImageCarousel } from './image-carousel'

interface HeroSectionProps {
  images: string[]
  title: string
  subtitle?: string
  ctaButtons?: { label: string; href: string; variant?: 'default' | 'outline' }[]
}

export function HeroSection({
  images,
  title,
  subtitle,
  ctaButtons
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <ImageCarousel images={images} autoPlay interval={5000} className="h-full" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}
        {ctaButtons && (
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaButtons.map((btn, idx) => (
              <Button
                key={idx}
                size="lg"
                variant={btn.variant || 'default'}
                asChild
                className={btn.variant === 'outline' ? 'border-white text-white hover:bg-white/10' : ''}
              >
                <a href={btn.href}>{btn.label}</a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
