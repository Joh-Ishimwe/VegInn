import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Join the VegInn Team',
  description: 'Explore career opportunities at VegInn. Join us in transforming Rwanda\'s agricultural value chain and making a lasting impact on smallholder farmers.',
  openGraph: {
    title: 'Careers - Join the VegInn Team',
    description: 'Explore career opportunities at VegInn and make an impact on Rwanda\'s agriculture.',
    url: 'https://veginn.rw/careers',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
