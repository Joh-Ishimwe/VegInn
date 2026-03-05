'use client'

import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { OverlayCard } from '@/components/overlay-card'

export default function Partners() {
  const heroImages = [
    '/ecosystem-1.jpg',
    '/partnership-1.jpg',
    '/partnership-2.jpg'
  ]

  const farmerImages = [
    '/farmer-1.jpg',
    '/farmer-2.jpg'
  ]

  const retailerImages = [
    '/distributor-1.jpg',
    '/distributor-2.jpg'
  ]

  const ecosystemPartners = [
    {
      title: 'Smallholder Farmers',
      description: 'Access better markets and fair pricing through our aggregation network',
      benefits: ['Fair Pricing', 'Market Access', 'Technical Support', 'Quality Training']
    },
    {
      title: 'Retailers & Supermarkets',
      description: 'Reliable supply of fresh, quality vegetables with professional handling',
      benefits: ['Consistent Supply', 'Quality Assurance', 'Logistics Support', 'Competitive Pricing']
    },
    {
      title: 'Restaurants & Hotels',
      description: 'Premium produce sourcing with guaranteed freshness and food safety standards',
      benefits: ['Farm to Table', 'Customized Orders', 'Reliable Delivery', 'Quality Guarantee']
    },
    {
      title: 'Institutional Buyers',
      description: 'Bulk supply for schools, hospitals, and corporate cafeterias',
      benefits: ['Bulk Orders', 'Flexible Terms', 'Food Safety Certified', 'Direct Support']
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title="Our Ecosystem"
        subtitle="Building sustainable partnerships across Rwanda's agricultural value chain"
      />

      {/* Partnership Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">VegInn Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We operate as the connective backbone of Rwanda's vegetable value chain, linking smallholder farmers directly to modern markets. Our platform enables transparent pricing, quality assurance, and sustainable livelihoods for all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Overlay Cards - Farmers & Retailers */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OverlayCard
              images={farmerImages}
              title="Our Farmer Network"
              subtitle="Empowering smallholder farmers with better market access"
              buttonLabel="Join as Farmer"
              buttonHref="/contact?interest=farmer"
            />
            <OverlayCard
              images={retailerImages}
              title="Retail & Distribution"
              subtitle="Reliable supply of premium fresh vegetables"
              buttonLabel="Partner With Us"
              buttonHref="/contact?interest=distributor"
            />
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground">Choose your role in Rwanda's agricultural transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemPartners.map((partner, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-primary">{partner.title}</h3>
                <p className="text-muted-foreground mb-6">{partner.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Involved
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
