// /app/page.tsx
'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { OverlayCard } from '@/components/overlay-card'
import { HowItWorks } from '@/components/how-it-works'
import { ImpactStats } from '@/components/impact-stats'
import { FarmerStory } from '@/components/farmer-story'

const EcosystemMap = dynamic(() => import('@/components/EcosystemMap'), {
  ssr: false,
})

const heroImages = ['/vegetables-1.png', '/vegetables-2.png', '/vegetables-3.png']
const distributorImages = ['/distributor-1.jpg', '/distributor-2.png']
const farmerImages = ['/farmer-1.jpg', '/farmer-2.jpg']

const audiences = [
  {
    image: farmerImages[0],
    alt: 'Smallholder farmer in a vegetable field',
    title: 'Farmers',
    subtitle: 'Empowering smallholder farmers with better market access',
    heading: 'Why Join VegInn?',
    benefits: [
      'Access guaranteed markets for your produce',
      'Fair pricing and timely payments',
      'Professional training and support',
      'Quality improvement programs',
    ],
  },
  {
    image: distributorImages[0],
    alt: 'Fresh vegetables prepared for distribution',
    title: 'Retail & Distribution',
    subtitle: 'Reliable supply of premium fresh vegetables',
    heading: 'Why Partner With VegInn?',
    benefits: [
      'Consistent quality produce supply',
      'Competitive pricing and flexible terms',
      'Reliable delivery and logistics',
      'Professional customer support',
    ],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection
        images={heroImages}
        title="From Farm to the Market"
        subtitle="We connect smallholder farmers to modern retail markets through professional aggregation, value addition, and reliable distribution."
        ctaButtons={[
          { label: 'Partner With Us', href: '/partners#partnership-form', variant: 'default' },
        ]}
      />

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary tracking-wide">
              VEGINN
            </h2>
            <div className="w-full h-px bg-border mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed px-4">
              VegInn is a Rwandan agricultural enterprise dedicated to strengthening the vegetable
              value chain. We aggregate produce from smallholder farmers, apply professional
              post-harvest handling practices, and distribute to modern retail markets including
              supermarkets, restaurants, and institutional buyers.
            </p>
          </div>
        </div>
      </section>

      <ImpactStats />

      <HowItWorks />

      {/* Who We Work With */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary tracking-wide">
            Who We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{a.title}</h3>
                    <p className="text-white/90 text-sm">{a.subtitle}</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <h4 className="font-semibold mb-3 text-primary">{a.heading}</h4>
                  <ul className="space-y-2">
                    {a.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FarmerStory />

      {/* Our Ecosystem */}
      <section id="partnership" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="overflow-hidden rounded-2xl border border-border shadow-md">
              <EcosystemMap />
            </div>
            <OverlayCard
              images={distributorImages}
              title="Retailers"
              subtitle="Access quality produce consistently"
              buttonUrl="/partners#partnership-form"
              buttonLabel="Partner With Us"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
