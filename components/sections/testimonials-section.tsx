import { MoveRight, Star } from "lucide-react"

import { companyProfile } from "@/constants/company-profile"
import { Button } from "@/components/ui/button"

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="size-3 fill-foreground text-foreground" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [first, second, third] = companyProfile.testimonials

  return (
    <section className="bg-muted/55 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr_0.6fr] md:items-end">
          <p className="flex items-center gap-2 text-sm font-medium">
            <span className="size-2 bg-accent" />
            Client Reviews
          </p>
          <h2 className="text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">Loved By Our Customers</h2>
          <a href="#contact" className="text-sm underline underline-offset-4 md:text-right">
            Explore More
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <article className="flex min-h-[300px] flex-col justify-between bg-background p-4 md:min-h-[330px] md:p-5">
            <div className="space-y-3">
              <div className="flex items-end gap-2">
                <p className="text-5xl font-semibold leading-none">4.9</p>
                <p className="mb-1 text-sm text-muted-foreground">/5 Customer Reviews</p>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-sm text-muted-foreground">586+ Reviews</p>
              <Button className="h-10 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Leave a Review
              </Button>
            </div>
          </article>

          <article className="flex min-h-[300px] flex-col bg-background md:min-h-[330px]">
            <div className="border-b border-foreground/10 p-4 md:p-5">
              <p className="text-2xl font-semibold">{first.author}</p>
              <p className="text-sm text-muted-foreground">{first.role}</p>
            </div>
            <div className="space-y-5 p-4 md:p-5">
              <Stars />
              <p className="text-sm leading-7 text-muted-foreground">{first.quote}</p>
            </div>
          </article>

          <div className="grid min-h-[300px] gap-3 md:min-h-[330px]">
            <article className="flex flex-col justify-between bg-background p-4 md:p-5">
              <p className="text-sm leading-7 text-muted-foreground">{second.quote}</p>
              <Stars />
            </article>
            <article className="flex items-center justify-between bg-background p-4 md:p-5">
              <div>
                <p className="text-2xl font-semibold">{third.author}</p>
                <p className="text-sm text-muted-foreground">{third.role}</p>
              </div>
              <Button size="icon" className="size-9 bg-muted text-foreground hover:bg-muted/80">
                <MoveRight className="size-4" />
              </Button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
