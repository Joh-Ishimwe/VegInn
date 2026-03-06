'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export default function Partners() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partnerType: '' as 'farmer' | 'retailer' | '',
    location: '',
    details: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "✅ Request Submitted Successfully!",
          description: "We'll contact you within 24-48 hours to discuss the partnership.",
        })
        setFormData({ name: '', email: '', phone: '', partnerType: '', location: '', details: '' })
      } else {
        toast({
          title: "❌ Submission Failed",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "❌ Network Error",
        description: "Unable to connect. Please check your internet connection.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })
  }
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={scrollToForm}>
                  Join as Farmer
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={scrollToForm}>
                  Partner With Us
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

      {/* Partnership Registration Form */}
      <section id="partnership-form" className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join VegInn Network</h2>
            <p className="text-muted-foreground text-lg">
              Whether you're a farmer looking for market access or a buyer seeking reliable supply, 
              fill out the form below and we'll get back to you within 24-48 hours.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Partner Type Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">I want to join as: *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, partnerType: 'farmer' })}
                    disabled={isSubmitting}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.partnerType === 'farmer'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-2xl mb-2">🌱</div>
                    <div className="font-semibold">Farmer / Supplier</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      I grow vegetables and want market access
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, partnerType: 'retailer' })}
                    disabled={isSubmitting}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.partnerType === 'retailer'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="font-semibold">Retailer / Buyer</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      I need reliable vegetable supply
                    </div>
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name / Business Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name or business name" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="+250 XXX XXX XXX" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={isSubmitting}
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <input 
                  type="text" 
                  placeholder="District, Sector (e.g., Kigali, Gasabo)" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {formData.partnerType === 'farmer' 
                    ? 'Tell us about your farm (crops, farm size, production capacity)' 
                    : formData.partnerType === 'retailer'
                    ? 'Tell us about your business (type, volume needs, delivery frequency)'
                    : 'Additional details about your interest in partnering with VegInn'
                  }
                </label>
                <textarea 
                  placeholder="Please provide relevant details..."
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 text-lg"
                disabled={isSubmitting || !formData.partnerType}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting Request...
                  </span>
                ) : (
                  'Submit Partnership Request'
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll review your request and contact you within 24-48 hours to discuss next steps.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
