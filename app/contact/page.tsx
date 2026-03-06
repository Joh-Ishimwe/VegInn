// /app/contact/page.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="px-4 pb-16 pt-12 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card p-6 text-center text-card-foreground shadow-md border border-border">
              <div className="mb-3 text-3xl text-primary">📍</div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">Our Main Office</h3>
              <p className="text-sm text-muted-foreground">Kigali, Rwanda</p>
            </div>

            <div className="bg-card p-6 text-center text-card-foreground shadow-md border border-border">
              <div className="mb-3 text-3xl text-primary">📞</div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">Phone Number</h3>
              <a href="tel:+250786866111" className="text-sm text-muted-foreground hover:text-primary">
                +250 786 866 111
              </a>
            </div>

            <div className="bg-card p-6 text-center text-card-foreground shadow-md border border-border">
              <div className="mb-3 text-3xl text-primary">#</div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">Social Media</h3>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                <a href="https://www.instagram.com/veg__inn?igsh=YXc4aTRuZG91aHp5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
                <a href="https://www.linkedin.com/in/veginn" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
                <a href="https://www.tiktok.com/@veg_inn?_r=1&_t=ZS-94QyxC6xVeK" target="_blank" rel="noopener noreferrer" className="hover:text-primary">TikTok</a>
              </div>
            </div>

            <div className="bg-card p-6 text-center text-card-foreground shadow-md border border-border">
              <div className="mb-3 text-3xl text-primary">✉</div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">Email</h3>
              <a href="mailto:info@veginn.rw" className="text-sm text-muted-foreground hover:text-primary">
                info@veginn.rw
              </a>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl bg-secondary p-8 text-foreground shadow-xl border border-border md:-mt-10 md:p-10">
            <h2 className="mb-6 text-center text-4xl font-bold text-primary">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Enter your Name"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Enter a valid email address"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Write your message"
              />

              <div className="pt-1 text-center">
                <Button
                  type="submit"
                  className="border border-primary bg-transparent px-8 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
