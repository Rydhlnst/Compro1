import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { companyProfile } from "@/constants/company-profile"

const projectImages = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
]

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollReveal y={0} duration={0.35}>
        <Navbar />
      </ScrollReveal>

      <section className="scroll-mt-28 px-4 pb-14 pt-36 md:px-8 md:pb-20">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <ScrollReveal y={16}>
            <div className="space-y-4">
              <Badge className="rounded-none bg-secondary px-3 py-1 text-secondary-foreground">
                Our Works
              </Badge>
              <h1 className="max-w-[16ch] text-4xl font-semibold leading-tight md:text-6xl">
                Projects We Have Built
              </h1>
              <p className="max-w-[70ch] text-sm leading-7 text-muted-foreground md:text-base">
                Explore selected residential, commercial, and interior projects delivered by{" "}
                {companyProfile.brand}.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {companyProfile.projects.map((project, index) => (
              <ScrollReveal key={project.slug} y={20} delay={index * 0.04}>
                <Card className="overflow-hidden rounded-none border-none pt-0 shadow-sm">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={projectImages[index % projectImages.length]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="space-y-4 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
                          {project.type}
                        </p>
                        <h2 className="mt-1 text-3xl font-semibold leading-tight">{project.title}</h2>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{project.year}</p>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                    <Button asChild className="h-10 rounded-none bg-accent px-5 text-accent-foreground hover:bg-accent/90">
                      <Link href={`/projects/${project.slug}`}>
                        View Project
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal y={14}>
        <Footer />
      </ScrollReveal>
    </main>
  )
}
