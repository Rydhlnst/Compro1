import { CtaSection } from "@/components/sections/cta-section"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Footer } from "@/components/sections/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { Navbar } from "@/components/sections/navbar"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ValuesSection } from "@/components/sections/values-section"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <ScrollReveal y={0} duration={0.35}>
        <Navbar />
      </ScrollReveal>
      <ScrollReveal y={18} delay={0.02}>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal y={22} delay={0.05}>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal y={22} delay={0.08}>
        <FeaturedProjects />
      </ScrollReveal>
      <ScrollReveal y={22} delay={0.1}>
        <ValuesSection />
      </ScrollReveal>
      <ScrollReveal y={22} delay={0.12}>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal y={22} delay={0.14}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal y={22} delay={0.16}>
        <CtaSection />
      </ScrollReveal>
      <ScrollReveal y={14} delay={0.18}>
        <Footer />
      </ScrollReveal>
    </main>
  )
}
