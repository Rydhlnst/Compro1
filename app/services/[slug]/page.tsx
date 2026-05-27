import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"

import { companyProfile } from "@/constants/company-profile"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return companyProfile.services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = companyProfile.services.find((item) => item.slug === slug)

  if (!service) notFound()

  return (
    <main className="bg-background text-foreground">
      <ScrollReveal y={0} duration={0.35}>
        <Navbar />
      </ScrollReveal>
      <section className="scroll-mt-28 px-4 pb-12 pt-36 md:px-8 md:pb-16">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to services
          </Link>

          <ScrollReveal y={20}>
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-5">
                <h1 className="max-w-[15ch] text-5xl font-semibold leading-tight md:text-7xl">
                  {service.title}
                </h1>
                <p className="max-w-[62ch] text-sm leading-7 text-muted-foreground md:text-base">
                  {service.summary}
                </p>
              </div>
              <article className="bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-semibold">Service Flow</h2>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {service.process.map((step, index) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="inline-flex size-6 items-center justify-center bg-secondary/25 text-xs text-foreground">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </ScrollReveal>

          <ScrollReveal y={24} delay={0.06}>
            <article className="bg-secondary/25 p-6">
              <h2 className="text-3xl font-semibold">Deliverables</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2 bg-background px-4 py-3 text-sm text-foreground/70 shadow-sm">
                    <Check className="mt-0.5 size-4 text-foreground/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal y={18} delay={0.1}>
            <Button asChild className="h-10 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
              <Link href="/#contact">
                Consult This Service
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
      <ScrollReveal y={14}>
        <Footer />
      </ScrollReveal>
    </main>
  )
}
