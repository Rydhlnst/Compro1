import { ArrowUpRight, Building2, CalendarDays, Handshake, ShieldCheck } from "lucide-react"
import Image from "next/image"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-28 items-end overflow-hidden px-4 pb-16 pt-36 md:px-8 md:pb-20"
    >
      <Image
        src="/hero-construction.jpg"
        alt="Construction site background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,hsl(var(--primary)/0.28)_2%,hsl(206_44%_28%/0.22)_44%,hsl(205_42%_40%/0.16)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,hsl(var(--accent)/0.1),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-8 top-16 h-[145%] w-[1px] -rotate-24 bg-white/35" />
      <div className="pointer-events-none absolute left-10 top-20 h-[145%] w-[1px] -rotate-24 bg-white/20" />
      <div className="pointer-events-none absolute left-28 top-24 h-[145%] w-[1px] -rotate-24 bg-white/12" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-8 text-primary-foreground">
          <p className="text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground/80">
            {companyProfile.hero.eyebrow}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            {companyProfile.hero.headline}
          </h1>
          <p className="max-w-xl text-sm leading-7 text-primary-foreground/80 md:text-base">
            {companyProfile.hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="h-10 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
              {companyProfile.hero.primaryCta}
            </Button>
            <Button className="h-10 bg-white/15 px-6 text-primary-foreground hover:bg-white/20">
              {companyProfile.hero.secondaryCta}
            </Button>
          </div>
          <div className="grid max-w-sm grid-cols-2 gap-6 pt-2">
            {companyProfile.stats.slice(0, 2).map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold md:text-4xl">{item.value}</p>
                <div className="mt-2 text-primary-foreground/78">
                  {item.label.includes("Completed") ? (
                    <Building2 className="size-4" />
                  ) : (
                    <Handshake className="size-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-auto w-full max-w-[280px] space-y-4 md:max-w-[300px]">
          <Card className="rounded-none bg-white text-foreground ring-0 shadow-xl shadow-black/15">
            <CardContent className="space-y-3 pt-6">
              <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
                {companyProfile.hero.featuredProject.label}
              </p>
              <h3 className="text-2xl font-semibold">
                {companyProfile.hero.featuredProject.title}
              </h3>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Building2 className="size-4" />
                <CalendarDays className="size-4" />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-none bg-accent text-accent-foreground ring-0 shadow-lg shadow-black/10">
            <CardContent className="space-y-3 pt-6">
              <h3 className="text-xl font-semibold">{companyProfile.hero.highlightCard.title}</h3>
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-5" />
                <ArrowUpRight className="size-5" />
              </div>
              <Button
                className="h-9 rounded-none bg-accent-foreground/12 text-accent-foreground hover:bg-accent-foreground/20"
              >
                {companyProfile.hero.highlightCard.cta}
                <ArrowUpRight className="size-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
