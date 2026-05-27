"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

type GalleryItem = {
  src: string
  alt: string
  objectPosition?: string
}

export function ProjectGalleryCarousel({ items }: { items: GalleryItem[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => setActiveIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="space-y-3">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.alt}>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: item.objectPosition ?? "center" }}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="grid w-full max-w-[180px] grid-cols-3 gap-2 sm:max-w-[220px] md:max-w-[280px] md:gap-3">
        {items.map((item, index) => (
          <button
            key={`${item.alt}-thumb`}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden",
              activeIndex === index ? "ring-2 ring-accent" : "opacity-75 hover:opacity-100"
            )}
          >
            <Image
              src={item.src}
              alt={`${item.alt} thumbnail`}
              fill
              className="object-cover"
              style={{ objectPosition: item.objectPosition ?? "center" }}
              sizes="(max-width: 768px) 33vw, 240px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
