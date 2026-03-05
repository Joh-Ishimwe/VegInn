// /app/careers/workshops/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Workshops & Capacity Building
        </h1>

        <p className="text-muted-foreground mb-10">
          VegInn is committed to strengthening agricultural practices through
          training and knowledge sharing. Our workshops focus on post-harvest
          handling, quality standards, market readiness, and sustainable production.
        </p>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <p className="text-lg font-medium mb-3">
            No upcoming workshops at this time.
          </p>

          <p className="text-muted-foreground mb-6">
            We regularly organize farmer training sessions and partner workshops.
            Please check back soon or contact us to express interest in future programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline">
              <Link href="/careers">Back to Careers</Link>
            </Button>

            <Button asChild>
              <a href="mailto:info@veginn.rw">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}