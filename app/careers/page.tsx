// /app/careers/page.tsx
'use client'

import { HeroSection } from '@/components/hero-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Careers() {
  const heroImages = [
    '/farmer-2.jpg'
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
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Opportunities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore upcoming workshops, training programs, and career opportunities at VegInn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Workshops & Training</h3>
              <p className="text-muted-foreground mb-5">View current and upcoming workshops or training sessions.</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/careers/workshops">View Workshops & Training</Link>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Job Vacancies</h3>
              <p className="text-muted-foreground mb-5">See open positions and career opportunities at VegInn.</p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/careers/jobs">View Job Vacancies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get email for new opportunity */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Stay Updated on Opportunities</h2>
          <p className="text-muted-foreground text-center mb-8">Subscribe to receive updates on new job openings, training programs, and workshops.</p>
          
          <div className="bg-white rounded-lg p-8 shadow-md border border-border">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
