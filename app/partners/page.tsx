'use client'

import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'

export default function Partners() {
  const heroImages = [
    '/ecosystem-1.jpg'
  ]

  const farmerImages = [
    '/farmer-1.jpg',
    '/farmer-2.jpg'
  ]

  const retailerImages = [
    '/distributor-1.jpg',
    '/distributor-2.jpg'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      

      
      {/* Overlay Cards - Farmers & Retailers */}
      <section className="py-12 md:py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VegInn Ecosystem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VegInn operates as a structured aggregation and distribution platform within Rwanda's vegetable value chain. We connect smallholder farmers to modern markets through transparent pricing, quality assurance systems, and reliable logistics.
            </p>
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
                  <h3 className="text-2xl font-bold mb-2">Our Farmer Network</h3>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="/contact?interest=farmer">Join as Farmer</a>
                </Button>
              </div>
            </div>

            {/* Retail & Distribution Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={retailerImages[0]} 
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="/contact?interest=distributor">Partner With Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
            <p className="text-lg text-muted-foreground">Our partnerships span across the entire agricultural value chain</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Farmers Card */}
            <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">👨‍🌾</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Smallholder Farmers</h3>
              <p className="text-sm text-muted-foreground mb-4">Direct market access with fair pricing and technical support</p>
            </div>

            {/* Retailers Card */}
            <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🏬</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Supermarkets & Retailers</h3>
              <p className="text-sm text-muted-foreground mb-4">Reliable supply of fresh, quality produce year-round</p>
              
            </div>

            {/* Restaurants & Hotels Card */}
            <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Restaurants & Hotels</h3>
              <p className="text-sm text-muted-foreground mb-4">Premium produce for farm-to-table dining experiences</p>
              
            </div>

            {/* Institutional Buyers Card */}
            <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Institutional Buyers</h3>
              <p className="text-sm text-muted-foreground mb-4">Bulk supply for schools, hospitals, and corporate facilities</p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
