// /app/about/page.tsx
'use client'

import { HeroSection } from '@/components/hero-section'

export default function About() {
  const heroImages = [
    '/vegetables-2.png',
    // '/vegetables-1.jpg',
    // '/farmer-2.jpg'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title="About VegInn"
        subtitle="Transforming Rwanda's agricultural value chain"
      />

      {/* What We Do */}
      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-3">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-bold">
              ABOUT VEGINN
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Main Description */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">VegInn</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
                VegInn operates at the intersection of agriculture and retail, serving as a critical bridge in Rwanda's vegetable value chain. We aggregate produce from smallholder farmers, apply professional post-harvest handling techniques, and distribute to modern retail markets including supermarkets, restaurants, and institutional buyers.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-justify">
                Our integrated approach ensures product quality, food safety, and market reliability while empowering farmers with stable income and fair pricing. We invest in infrastructure, training, and technology to create a sustainable ecosystem that benefits all stakeholders.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                <span className="text-primary font-bold italic">
                  "At VegInn, we maintain high quality standards from procurement to final delivery. Our commitment to excellence continues to build trust across Rwanda's retail market."
                </span>
              </p>
            </div>

            {/* Right Column - Mission, Vision, Values */}
            <div className="space-y-6">
              {/* Our Vision */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold mb-3">
                  OUR VISION
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To build a resilient and inclusive vegetable value chain where farmers earn sustainable incomes and retailers access consistent, high-quality produce.
                </p>
              </div>

              {/* Our Mission */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold mb-3">
                  OUR MISSION
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower smallholder farmers through structured market access and professional agricultural practices, while meeting the growing demand for quality vegetables in Rwanda's modern retail sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">Fair pricing, transparent operations, and honest relationships with all partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-muted-foreground">Uncompromising standards in produce handling, safety, and customer satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-muted-foreground">Sustainable growth that benefits farmers, retailers, consumers, and communities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
