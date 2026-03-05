// /components/product-card.tsx
'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  image: string
  title: string
  description: string
  readMoreUrl?: string
}

export function ProductCard({
  image,
  title,
  description,
  readMoreUrl = '#'
}: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group">
      <div className="relative w-full h-48 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <Button
          asChild
          variant="outline"
          className="w-full text-primary border-primary hover:bg-primary/5"
        >
          <a href={readMoreUrl}>Read More</a>
        </Button>
      </div>
    </div>
  )
}
