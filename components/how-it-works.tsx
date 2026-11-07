// /components/how-it-works.tsx
import { Sprout, Truck, ClipboardCheck, Store, type LucideIcon } from 'lucide-react'

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Sprout,
    title: 'Farmers grow',
    text: 'Smallholder farmers grow vegetables and agree on volumes and prices with VegInn before harvest.',
  },
  {
    icon: Truck,
    title: 'We aggregate',
    text: 'Produce is collected from farmers and brought together at our aggregation point.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality and handling',
    text: 'We sort, grade, clean and pack using professional post-harvest handling practices.',
  },
  {
    icon: Store,
    title: 'We deliver',
    text: 'Supermarkets, restaurants and institutions receive consistent, reliable supply.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="how-it-works-title">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">From the farm to the shelf in four steps.</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative text-center">
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border"
                />
              )}
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon size={28} aria-hidden="true" />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border text-xs font-bold text-primary">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
