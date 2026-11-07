// /components/farmer-story.tsx
import Image from 'next/image'
import { farmerStory, shouldShow } from '@/lib/impact'
import { SampleBadge } from '@/components/sample-badge'

export function FarmerStory() {
  if (!shouldShow(farmerStory.verified)) return null

  return (
    <section className="py-16 md:py-24 bg-secondary/30" aria-labelledby="farmer-story-title">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          {/* {!farmerStory.verified && <SampleBadge />} */}
          <h2 id="farmer-story-title" className="text-3xl md:text-4xl font-bold text-primary">
            Farmer Story
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-80 md:h-[420px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={farmerStory.image}
              alt={`${farmerStory.name}, farmer in ${farmerStory.location}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
              &ldquo;{farmerStory.quote}&rdquo;
            </blockquote>
            <p className="font-bold text-primary">{farmerStory.name}</p>
            <p className="text-sm text-muted-foreground mb-6">{farmerStory.location}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-xs font-bold uppercase text-muted-foreground mb-1">Before VegInn</p>
                <p className="text-sm">{farmerStory.before}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-primary">
                <p className="text-xs font-bold uppercase text-primary mb-1">With VegInn</p>
                <p className="text-sm">{farmerStory.after}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
