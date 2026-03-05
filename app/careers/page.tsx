'use client'

import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'

export default function Careers() {
  const heroImages = [
    '/farmer-2.jpg',
    '/vegetables-1.jpg',
    '/farmer-1.jpg'
  ]

  const opportunities = [
    {
      type: 'Upcoming Workshops',
      title: 'Non at moment',
      // date: 'March 2025',
      // description: 'Learn professional techniques for vegetable preservation, quality control, and packaging. Perfect for farmers and agricultural workers.',
      icon: '📚'
    },
    {
      type: 'Upcoming Trainings',
      title: 'Non at moment',
      // date: 'April 2025',
      // description: 'Advanced training on sustainable farming methods, soil health, crop rotation, and modern agricultural techniques.',
      icon: '📊'
    },
    {
      type: 'Job Vacant',
      title: 'Non at moment',
      // date: 'Immediate',
      // description: 'Lead our operations team, manage farmer relationships, coordinate logistics, and ensure quality standards across our supply network.',
      icon: '💼'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title="Careers & Opportunities"
        subtitle="Grow with VegInn - Jobs, Workshops, and Training Programs"
      />

      {/* Opportunities Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Opportunities</h2>
            <p className="text-muted-foreground text-lg">Workshops, training programs, and career positions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {opp.type}
                  </span>
                  <span className="text-2xl">{opp.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{opp.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{opp.date}</p>
                <p className="text-sm text-card-foreground mb-6 line-clamp-3">
                  {opp.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full text-primary border-primary hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get email for new oppportunity */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Be The First To Know New Opportunity</h2>
          
        </div>
      </section>
    </div>
  )
}
