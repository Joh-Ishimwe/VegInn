import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with VegInn',
  description: 'Contact VegInn for partnership opportunities, supplier inquiries, or general information about our agricultural value chain solutions in Rwanda.',
  openGraph: {
    title: 'Contact Us - Get in Touch with VegInn',
    description: 'Contact VegInn for partnership opportunities and supplier inquiries.',
    url: 'https://veginn.rw/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
