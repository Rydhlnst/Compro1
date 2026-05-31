import { ArrowUpRight, Building2, Handshake, Pickaxe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"

const valueIcons = [Handshake, Building2, Pickaxe]

export function ValuesSection() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8 md:space-y-10">
        <div className="grid gap-4 md:grid-cols-[0.65fr_1.35fr] md:gap-10">
          <p className="flex items-start gap-2 text-sm font-medium">
            <span className="mt-1.5 size-2 bg-accent" />
            <span>Our Values & What We Build</span>
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Great Projects Begin With Great Relationship. Both Within Our Team And With Our Clients.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative min-h-[280px] sm:min-h-[340px] md:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1500&q=80"
              alt="Modern architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4 md:space-y-5">
            {companyProfile.values.map((value, index) => {
              const Icon = valueIcons[index] ?? Handshake
              return (
                <article key={value.title} className="border-b border-foreground/18 pb-4 md:pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <Icon className="size-4 text-secondary" />
                      <h3 className="text-2xl font-semibold leading-none sm:text-3xl md:text-4xl">{value.title}</h3>
                      <p className="max-w-[32ch] text-sm leading-6 text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                    <Button
                      asChild
                      size="icon"
                      className="mt-3 size-10 border-none bg-muted text-foreground hover:bg-accent hover:text-accent-foreground"
                      aria-label={`Open ${value.title}`}
                    >
                      <Link href={`/services/${companyProfile.services[index]?.slug ?? "project-management"}`}>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
