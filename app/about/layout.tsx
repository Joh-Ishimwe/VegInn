import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About VegInn - Our Mission & Values',
  description: 'Learn about VegInn\'s mission to transform Rwanda\'s agricultural value chain by connecting smallholder farmers to modern retail markets through professional aggregation.',
  openGraph: {
    title: 'About VegInn - Our Mission & Values',
    description: 'Learn about VegInn\'s mission to transform Rwanda\'s agricultural value chain.',
    url: 'https://veginn.rw/about',
    images: ['/vegetables-2.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
