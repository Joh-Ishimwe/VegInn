import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Partners - VegInn Ecosystem',
  description: 'Discover VegInn\'s partner network including smallholder farmers and modern retail buyers across Rwanda. Join our agricultural value chain ecosystem.',
  openGraph: {
    title: 'Our Partners - VegInn Ecosystem',
    description: 'Discover VegInn\'s partner network including smallholder farmers and retail buyers.',
    url: 'https://veginn.rw/partners',
    images: ['/ecosystem-1.jpg'],
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
