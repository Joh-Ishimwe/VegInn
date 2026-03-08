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
    '/vegetables-1.png',
    '/vegetables-2.png',
    '/vegetables-3.png'
  ]
  const distributorImages = [
    '/distributor-1.jpg',
    '/distributor-2.png'
  ]
  const farmerImages = [
    '/farmer-1.jpg',
    '/farmer-2.jpg'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title=" From Farm to the Market"
        subtitle="We connect smallholder farmers to modern retail markets through professional aggregation, value addition, and reliable distribution."
      
        ctaButtons={[
          { label: 'Partner With Us', href: '/partners#partnership-form', variant: 'default' },
          // { label: 'Learn More', href: '#about', variant: 'outline' }
        ]}
    
      />

      {/* Our Products Section 
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground text-lg">Fresh, carefully handled vegetables sourced from trusted smallholder farmers across Rwanda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              image="/vegetables-1.png"
              title="Fresh Leafy Greens"
              description="Premium quality kale, spinach, and lettuce sourced directly from certified farmers."
              readMoreUrl="#"
            />
            <ProductCard
              image="/vegetables-2.png"
              title="Root Vegetables"
              description="Fresh tomatoes, carrots, and seasonal root crops, handled with professional care."
              readMoreUrl="#"
            />
            <ProductCard
              image="/vegetables-3.png"
              title="Specialty Produce"
              description="Seasonal vegetables selected for quality, nutrition, and market demand."
              readMoreUrl="#"
            />
          </div>
        </div>
      </section>
      */}

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
            
          </div>
        </div>
      </section>
      
      {/* Overlay Cards - Farmers & Retailers */}
      <section className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary tracking-wide">
              Who We work With
            </h2>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Farmer Network Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={farmerImages[0]} 
                  alt="Farmer Network" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2"> Farmer</h3>
                  <p className="text-white/90 text-sm">Empowering smallholder farmers with better market access</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold mb-3 text-primary">Why Join VegInn?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Access guaranteed markets for your produce</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Fair pricing and timely payments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Professional training and support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Quality improvement programs</span>
                  </li>
                </ul>
                {/* <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={scrollToForm}>
                  Join as Farmer
                </Button> */}
              </div>
            </div>

            {/* Retail & Distribution Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={distributorImages[0]} 
                  alt="Retail & Distribution" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Retail & Distribution</h3>
                  <p className="text-white/90 text-sm">Reliable supply of premium fresh vegetables</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold mb-3 text-primary">Why Partner With VegInn?</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Consistent quality produce supply</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Competitive pricing and flexible terms</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Reliable delivery and logistics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-muted-foreground">Professional customer support</span>
                  </li>
                </ul>
                {/* <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={scrollToForm}>
                  Partner With Us
                </Button> */}
              </div>
            </div>
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
              title=" Retailers"
              subtitle="Access quality produce consistently"
              buttonUrl="#" buttonLabel={''}            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  )
}
