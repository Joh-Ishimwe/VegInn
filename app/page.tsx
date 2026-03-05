'use client'

import { HeroSection } from '@/components/hero-section'
import { ProductCard } from '@/components/product-card'
import { OverlayCard } from '@/components/overlay-card'
import { Button } from '@/components/ui/button'

export default function Home() {
  const heroImages = [
    '/vegetables-1.jpg',
    '/vegetables-2.jpg',
    '/vegetables-3.jpg'
  ]

  const farmerImages = [
    '/farmer-1.jpg',
    '/farmer-2.jpg'
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
        title="Connecting Farmers to Modern Markets"
        subtitle="Premium vegetables from smallholder farmers to your retail shelves"
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
            <p className="text-muted-foreground text-lg">Fresh, quality vegetables from our network of smallholder farmers</p>
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
        <div className="text-center max-w-6xl mx-auto px-4 md:px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">VegInn</h2>
              <p className="text-muted-foreground text-lg mb-4">
                VegInn is a social enterprise committed to transforming Rwanda's vegetable value chain. We bridge the gap between smallholder farmers and modern retail markets through professional post-harvest handling and structured market access.
              </p>
            </div>
        </div>
      </section>

      {/* Farmers & Distributors Section */}
      <section id="partnership" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ecosystem</h2>
            <p className="text-muted-foreground text-lg">Join our network of farmers and distributors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OverlayCard
              images={farmerImages}
              title="For Farmers"
              subtitle="Access modern markets and fair prices"
              buttonLabel="Become a Partner Farmer"
              buttonUrl="#"
            />
            <OverlayCard
              images={distributorImages}
              title="For Distributors"
              subtitle="Consistent quality produce supply"
              buttonLabel="Partner With VegInn"
              buttonUrl="#"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  )
}
