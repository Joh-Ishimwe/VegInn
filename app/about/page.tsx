'use client'

import { HeroSection } from '@/components/hero-section'

export default function About() {
  const heroImages = [
    '/farmer-1.jpg',
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
      <section className="py-16 md:py-24 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              VegInn operates at the intersection of agriculture and retail, serving as a critical bridge in Rwanda's vegetable value chain. We aggregate produce from smallholder farmers, apply professional post-harvest handling techniques, and distribute to modern retail markets including supermarkets, restaurants, and institutional buyers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our integrated approach ensures product quality, food safety, and market reliability while empowering farmers with stable income and fair pricing. We invest in infrastructure, training, and technology to create a sustainable ecosystem that benefits all stakeholders. 
            </p>
          </div>
          <div className="">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower smallholder farmers through structured market access and professional agricultural practices, while meeting the growing demand for quality vegetables in Rwanda's modern retail sector.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A resilient, inclusive agricultural value chain where farmers earn sustainable incomes, retailers access quality produce reliably, and Rwanda's food security is strengthened through professional agriculture and efficient supply systems.
              </p>
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
