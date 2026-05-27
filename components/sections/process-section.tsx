import { companyProfile } from "@/constants/company-profile"

export function ProcessSection() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="space-y-3">
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            A Clear Process From First Consultation to Final Handover.
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            We keep every project structured, transparent, and easy to follow so clients know
            exactly what happens at each stage.
          </p>
        </div>
        <div className="grid gap-4">
          {companyProfile.process.map((item) => (
            <article
              key={item.step}
              className="grid gap-3 rounded-none border-none bg-card p-5 shadow-sm md:grid-cols-[110px_1fr]"
            >
              <p className="text-sm font-medium tracking-[0.15em] text-accent-foreground uppercase">
                {item.step}
              </p>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
