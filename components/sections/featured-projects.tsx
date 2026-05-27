import { ArrowUpRight, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedProjects() {
  const projects = companyProfile.projects.slice(0, 2)

  return (
    <section id="projects" className="scroll-mt-28 px-4 py-12 md:px-8 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden rounded-none border-none ring-0 shadow-sm">
            <CardContent className="space-y-4 pt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-semibold leading-none">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.year}</p>
                </div>
                <Button
                  asChild
                  size="icon"
                  className="size-10 rounded-none border-none bg-accent text-accent-foreground hover:bg-accent/90"
                  aria-label={`Open ${project.title}`}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-construction.jpg"
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <article className="flex min-h-[420px] flex-col justify-between bg-secondary px-8 py-10 text-secondary-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center bg-background/85 text-foreground">
              A
            </span>
            <span className="inline-flex size-8 items-center justify-center bg-background/85 text-foreground">
              B
            </span>
            <span className="inline-flex size-8 items-center justify-center bg-accent text-accent-foreground">
              <Plus className="size-4" />
            </span>
          </div>
          <div className="space-y-4">
            <h3 className="max-w-[12ch] text-4xl font-semibold leading-tight">
              Innovative designs, lasting impressions
            </h3>
            <p className="max-w-[26ch] text-sm text-secondary-foreground/85">
              We sit down with entire construction chain from very beginning.
            </p>
            <div className="flex items-center gap-2">
              <span className="size-2 bg-accent" />
              <span className="size-2 bg-secondary-foreground/45" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
