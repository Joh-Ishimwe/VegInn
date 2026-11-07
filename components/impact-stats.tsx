// /components/impact-stats.tsx
import { impactStats, shouldShow } from '@/lib/impact'
import { SampleBadge } from '@/components/sample-badge'

export function ImpactStats() {
  if (!shouldShow(impactStats.verified)) return null

  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground" aria-label="Our impact">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        {/* {!impactStats.verified && <SampleBadge />} */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Impact</h2>
        <dl className="flex flex-wrap justify-center gap-x-12 gap-y-10">
          {impactStats.items.map((item) => (
            <div key={item.label} className="w-40 md:w-56">
              <dd className="text-4xl md:text-5xl font-bold">
                {item.value.toLocaleString('en-US')}
                {item.suffix}
              </dd>
              <dt className="mt-2 text-sm md:text-base text-primary-foreground/85">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
