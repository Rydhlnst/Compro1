import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 bg-background px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="grid gap-6 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            We Have A Vision For The Future Of Construction.
          </h2>
          <div className="space-y-4">
            <p className="max-w-md pt-2 text-sm leading-7 text-muted-foreground">
              We strive to provide an end-to-end client experience for you, that includes seamless
              communication, budgeting, staffing, on-site organisation.
            </p>
            <div className="flex flex-wrap gap-2">
              {companyProfile.services.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-muted px-3 py-1 text-xs text-foreground/70 hover:text-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] sm:min-h-[360px] md:min-h-[460px]">
          <Image
            src="/hero-construction.jpg"
            alt="Architecture vision"
            fill
            className="object-cover"
            sizes="100vw"
          />

          <article className="absolute bottom-4 left-4 w-[190px] bg-background p-3 shadow-xl sm:bottom-6 sm:left-6 sm:w-[220px] md:bottom-8 md:left-8 md:w-[250px]">
            <div className="relative mb-4 aspect-[5/4] w-full">
              <Image
                src="/hero-construction.jpg"
                alt="Corvallis Museum"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold leading-none md:text-3xl">Corvallis Museum</h3>
                <p className="mt-2 text-sm text-muted-foreground">2025</p>
              </div>
              <Button asChild size="icon" className="size-9 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services/project-management">
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
