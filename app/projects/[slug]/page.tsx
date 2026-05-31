import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { companyProfile } from "@/constants/company-profile"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { ProjectGalleryCarousel } from "@/components/uilayouts/carousel"
import { BASE_URL, defaultOgImages } from "@/lib/seo"

export function generateStaticParams() {
  return companyProfile.projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = companyProfile.projects.find((item) => item.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const url = `${BASE_URL}/projects/${project.slug}`
  const description = project.description

  return {
    title: project.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: project.title,
      description,
      url,
      type: "article",
      images: defaultOgImages,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: [defaultOgImages[0].url],
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = companyProfile.projects.find((item) => item.slug === slug)

  if (!project) notFound()

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1800&q=80",
      alt: `${project.title} overview`,
      objectPosition: "center",
    },
    {
      src: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1800&q=80",
      alt: `${project.title} façade`,
      objectPosition: "left center",
    },
    {
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1800&q=80",
      alt: `${project.title} detail`,
      objectPosition: "right center",
    },
  ]

  return (
    <main className="bg-background text-foreground">
      <ScrollReveal y={0} duration={0.35}>
        <Navbar />
      </ScrollReveal>
      <section className="scroll-mt-28 px-4 pb-12 pt-36 md:px-8 md:pb-16">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>

          <ScrollReveal y={20}>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{project.type}</p>
                <h1 className="max-w-[16ch] text-5xl font-semibold leading-tight md:text-7xl">
                  {project.title}
                </h1>
                <p className="max-w-[62ch] text-sm leading-7 text-muted-foreground md:text-base">
                  {project.description}
                </p>
              </div>
              <article className="bg-card p-6 shadow-sm">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Year</dt>
                    <dd className="text-lg font-semibold">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="text-lg font-semibold">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Client</dt>
                    <dd className="text-lg font-semibold">{project.client}</dd>
                  </div>
                </dl>
              </article>
            </div>
          </ScrollReveal>

          <ScrollReveal y={24} delay={0.05}>
            <ProjectGalleryCarousel items={galleryItems} />
          </ScrollReveal>

          <ScrollReveal y={24} delay={0.08}>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="bg-card p-6 shadow-sm">
                <h2 className="text-3xl font-semibold">Challenge</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
              </article>
              <article className="bg-card p-6 shadow-sm">
                <h2 className="text-3xl font-semibold">Solution</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.solution}</p>
              </article>
            </div>
          </ScrollReveal>

          <ScrollReveal y={24} delay={0.1}>
            <article className="bg-secondary/25 p-6">
              <h2 className="text-3xl font-semibold">Scope</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {project.scope.map((item) => (
                  <li key={item} className="bg-background px-4 py-3 text-sm text-foreground/70 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>

          <ScrollReveal y={18} delay={0.12}>
            <Button asChild className="h-10 bg-accent px-6 text-accent-foreground hover:bg-accent/90">
              <Link href="/#contact">
                Start Similar Project
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
