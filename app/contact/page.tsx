'use client'

import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Contact() {
  const heroImages = [
    '/vegetables-2.jpg',
    '/vegetables-1.jpg',
    '/distributor-1.jpg'
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'farmer',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', interest: 'farmer', message: '' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title="Get In Touch"
        subtitle="Let's work together to transform Rwanda's agricultural value chain"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">📍</span> Location
                </h3>
                <p className="text-muted-foreground">Kigali, Rwanda</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">📧</span> Email
                </h3>
                <a href="mailto:info@veginn.rw" className="text-primary hover:underline">
                  info@veginn.rw
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">📱</span> Phone
                </h3>
                <a href="tel:+250788000000" className="text-primary hover:underline">
                  +250 788 000 000
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Who Should Contact Us?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Smallholder farmers interested in partnership</li>
                  <li>✓ Retailers and distributors seeking vegetable suppliers</li>
                  <li>✓ Institutional buyers (schools, hotels, restaurants)</li>
                  <li>✓ Job applicants and workshop participants</li>
                  <li>✓ Investors and development partners</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                    placeholder="+250 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">I'm Interested In</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                  >
                    <option value="farmer">Becoming a Partner Farmer</option>
                    <option value="retailer">Retail Partnership</option>
                    <option value="job">Job Opportunity</option>
                    <option value="training">Workshop or Training</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">f</a>
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">𝕏</a>
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">in</a>
            <a href="#" className="text-primary hover:text-primary/80 text-2xl">📷</a>
          </div>
        </div>
      </section>
    </div>
  )
}
