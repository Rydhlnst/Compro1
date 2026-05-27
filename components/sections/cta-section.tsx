import type { ReactNode } from "react"
import { Mail, MapPin, MessageSquareText, UserRound, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  const showcaseItems = companyProfile.projects.slice(0, 3)

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-6 md:space-y-8">
        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-medium">
                <span className="size-2 bg-accent" />
                Project Showcase
              </p>
              <h2 className="max-w-[16ch] text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Take A Brief Look At Some Of The Projects
              </h2>
            </div>
            <Button asChild className="h-10 bg-accent px-7 text-accent-foreground hover:bg-accent/90">
              <Link href="/#projects">Explore More</Link>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {showcaseItems.map((item, index) => (
              <article key={item.title} className="space-y-3 bg-background">
                <Link href={`/projects/${item.slug}`} className="block">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/hero-construction.jpg"
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </Link>
                <Link href={`/projects/${item.slug}`} className="block">
                  <h3 className="text-3xl font-semibold leading-none">{item.title}</h3>
                </Link>
                <span className="inline-flex border border-foreground/35 px-4 py-1 text-xs">
                  {item.type}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] bg-primary/80 p-4 sm:min-h-[500px] md:p-6">
          <Image
            src="/hero-construction.jpg"
            alt="Contact background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,hsl(var(--primary)/0.58)_0%,hsl(var(--primary)/0.22)_45%,hsl(var(--primary)/0.75)_100%)]" />

          <div className="relative z-10 flex h-full flex-col items-end justify-end gap-6">
            <div className="w-full max-w-[260px] space-y-5 pb-1 text-primary-foreground sm:max-w-[320px] md:max-w-[420px] lg:max-w-[520px]">
              <span className="inline-flex items-center gap-2 bg-secondary/70 px-3 py-1 text-sm">
                <Users className="size-4" />
                Build
              </span>
              <h3 className="text-5xl font-semibold leading-[0.95] sm:text-6xl">
                Let&apos;s build a better standard.
              </h3>
            </div>

            <form className="ml-auto w-full max-w-[280px] bg-secondary/88 p-4 text-secondary-foreground backdrop-blur-sm sm:max-w-[420px] sm:p-5 md:max-w-[560px] lg:max-w-[680px]">
              <h4 className="mb-4 text-4xl font-semibold leading-none">Let Contact With You Today</h4>
              <div className="space-y-2.5">
                <Field icon={<UserRound className="size-4" />} placeholder="Devid Andrew" />
                <Field icon={<Mail className="size-4" />} placeholder="Email Address*" />
                <Field icon={<MapPin className="size-4" />} placeholder="Select Zip Code*" />
                <Field
                  icon={<MessageSquareText className="size-4" />}
                  placeholder="Write your comment"
                  multiline
                />
              </div>
              <Button className="mt-3 h-10 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  icon,
  placeholder,
  multiline = false,
}: {
  icon: ReactNode
  placeholder: string
  multiline?: boolean
}) {
  if (multiline) {
    return (
      <label className="flex items-start gap-2 bg-background/92 px-3 py-2 text-sm">
        <span className="mt-0.5 text-muted-foreground">{icon}</span>
        <textarea
          rows={3}
          placeholder={placeholder}
          className="h-20 w-full resize-none bg-transparent text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
        />
      </label>
    )
  }

  return (
    <label className="flex items-center gap-2 bg-background/92 px-3 py-2 text-sm">
      <span className="text-muted-foreground">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
      />
    </label>
  )
}
