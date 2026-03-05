// /app/careers/jobs/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Career Opportunities at VegInn
        </h1>

        <p className="text-muted-foreground mb-10">
          At VegInn, we are building a structured and reliable vegetable value chain.
          We welcome passionate individuals who want to contribute to agricultural
          transformation and sustainable market systems.
        </p>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <p className="text-lg font-medium mb-3">
            No open positions at the moment.
          </p>

          <p className="text-muted-foreground mb-6">
            We are not currently hiring, but we are always interested in connecting
            with talented professionals in agriculture, supply chain management,
            quality assurance, and business development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline">
              <Link href="/careers">Back to Careers</Link>
            </Button>

            <Button asChild>
              <a href="mailto:info@veginn.rw">Send Us Your CV</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}