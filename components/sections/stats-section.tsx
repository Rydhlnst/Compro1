import { companyProfile } from "@/constants/company-profile"

export function StatsSection() {
  return (
    <section className="px-4 pt-10 md:px-8 md:pt-12">
      <div className="mx-auto grid w-full max-w-6xl gap-4 bg-background py-5 md:grid-cols-3 md:gap-0">
        {companyProfile.stats.map((stat, index) => (
          <div
            key={stat.label}
            className="px-4 py-5 text-center md:px-8"
          >
            <p className="text-5xl font-semibold tracking-tight md:text-6xl">{stat.value}</p>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            {index < companyProfile.stats.length - 1 && (
              <div className="mx-auto mt-5 hidden h-10 w-px bg-foreground/20 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
