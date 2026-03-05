// /app/page.tsx
'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'
import { OverlayCard } from '@/components/overlay-card'
import { Button } from '@/components/ui/button'

const EcosystemMap = dynamic(() => import('@/components/EcosystemMap'), {
  ssr: false,
})

export default function Home() {
  const heroImages = [
    '/vegetables-1.jpg',
    '/vegetables-2.jpg',
    '/vegetables-3.jpg'
  ]
  const distributorImages = [
    '/distributor-1.jpg',
    '/distributor-2.jpg'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title="Strengthening Rwanda’s Vegetable Value Chain"
        subtitle="We connect smallholder farmers to modern retail markets through professional aggregation, quality assurance, and reliable distribution."
      
        ctaButtons={[
          { label: 'Partner With Us', href: '#partnership', variant: 'default' },
          // { label: 'Learn More', href: '#about', variant: 'outline' }
        ]}
      />

      {/* Our Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground text-lg">Fresh, carefully handled vegetables sourced from trusted smallholder farmers across Rwanda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              image="/vegetables-1.jpg"
              title="Fresh Leafy Greens"
              description="Premium quality kale, spinach, and lettuce sourced directly from certified farmers."
              readMoreUrl="#"
            />
            <ProductCard
              image="/vegetables-2.jpg"
              title="Root Vegetables"
              description="Fresh tomatoes, carrots, and seasonal root crops, handled with professional care."
              readMoreUrl="#"
            />
            <ProductCard
              image="/vegetables-3.jpg"
              title="Specialty Produce"
              description="Seasonal vegetables selected for quality, nutrition, and market demand."
              readMoreUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary tracking-wide">
              VEGINN
            </h2>
            <div className="w-full h-px bg-border mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed italic px-4 mb-4">
              VegInn is a Rwandan agricultural enterprise dedicated to strengthening the vegetable value chain. We aggregate produce from smallholder farmers, apply professional post-harvest handling practices, and distribute to modern retail markets including supermarkets, restaurants, and institutional buyers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed italic px-4">
              By combining structured market access, quality control systems, and transparent pricing, we create a reliable supply chain that benefits farmers, retailers, and consumers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Our Ecosystem Section */}
      <section id="partnership" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <EcosystemMap />
            </div>
            <OverlayCard
              images={distributorImages}
              title="For Retailers"
              subtitle="Access quality produce consistently"
              buttonUrl="#"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  )
}
