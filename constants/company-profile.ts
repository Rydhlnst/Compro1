import type { ComponentType } from "react"
import {
  Building2,
  ClipboardList,
  Hammer,
  HardHat,
  Home,
  PaintBucket,
} from "lucide-react"

export type ProjectItem = {
  slug: string
  title: string
  type: string
  year: string
  description: string
  location: string
  client: string
  scope: string[]
  challenge: string
  solution: string
}

export type ServiceItem = {
  slug: string
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  summary: string
  deliverables: string[]
  process: string[]
}

export const companyProfile = {
  brand: "Arkana Build Studio",
  tagline: "Modern Contractor & Construction Partner",
  hero: {
    eyebrow: "Modern Contractor & Construction Partner",
    headline: "High-End Design & Build for Better Living",
    description:
      "We help homeowners, businesses, and property developers transform ideas into reliable, functional, and beautifully built spaces through professional construction, renovation, and project management services.",
    primaryCta: "Start Your Project",
    secondaryCta: "View Our Works",
    featuredProject: {
      label: "Featured Project",
      title: "Dynamic Apartment",
      category: "Residential Development",
      year: "2024",
    },
    highlightCard: {
      title: "An Exceptional Building Experience",
      description:
        "Explore how we bring structure, design, and execution together to deliver projects with clarity and confidence.",
      cta: "Explore More",
    },
  },
  navLinks: ["Home", "Services", "Projects", "About", "Contact"],
  stats: [
    { value: "120+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "25+", label: "Professional Partners" },
  ],
  projects: [
    {
      slug: "square-residence",
      title: "Square Residence",
      type: "Private Residential",
      year: "2024",
      description:
        "A modern residential project designed with clean structure, natural lighting, and efficient space planning.",
      location: "South Jakarta",
      client: "Private Homeowner",
      scope: ["Architecture Build", "Structure Work", "Interior Fit-Out"],
      challenge:
        "Client needed premium modern residence on compact lot with strict timeline and clear budget guardrails.",
      solution:
        "We ran phased execution with weekly approvals, detailed material planning, and integrated site supervision.",
    },
    {
      slug: "the-tower",
      title: "The Tower",
      type: "Commercial Building",
      year: "2023",
      description:
        "A commercial construction project focused on durability, accessibility, and long-term operational value.",
      location: "Central Jakarta",
      client: "Retail Group",
      scope: ["Core Structure", "Façade", "MEP Coordination"],
      challenge:
        "Building needed high-traffic readiness while maintaining practical operational flow for tenants.",
      solution:
        "We optimized zoning, circulation, and phased handover strategy to keep construction and operations aligned.",
    },
    {
      slug: "urban-living-house",
      title: "Urban Living House",
      type: "Home Renovation",
      year: "2024",
      description:
        "A renovation project that transforms an existing house into a more functional, modern, and comfortable living space.",
      location: "Tangerang",
      client: "Young Family",
      scope: ["Renovation", "Interior Reconfiguration", "Lighting Upgrade"],
      challenge:
        "Existing house had inefficient room flow and poor natural lighting for daily family activities.",
      solution:
        "We reworked core layout, improved openings, and aligned interior material palette for better comfort.",
    },
    {
      slug: "natura-office-space",
      title: "Natura Office Space",
      type: "Office Interior",
      year: "2023",
      description:
        "A workspace development project built to support productivity, brand identity, and daily business operations.",
      location: "BSD City",
      client: "Tech Startup",
      scope: ["Interior Fit-Out", "Workstation Planning", "Brand Integration"],
      challenge:
        "Team needed agile workspace that reflects brand identity and supports collaboration across departments.",
      solution:
        "We delivered modular zones, acoustical treatment, and efficient storage strategy with brand-led details.",
    },
  ] as ProjectItem[],
  values: [
    {
      title: "Clear Communication",
      description:
        "Transparent project updates from planning to handover.",
    },
    {
      title: "Quality Execution",
      description:
        "Reliable workmanship with attention to structure, detail, and finishing.",
    },
    {
      title: "Long-Term Value",
      description:
        "Spaces designed and built to remain functional, durable, and valuable.",
    },
  ],
  services: [
    {
      slug: "residential-construction",
      title: "Residential Construction",
      description:
        "End-to-end house construction with structured planning, material control, and professional execution.",
      icon: Home,
      summary:
        "Complete residential build execution from pre-construction planning to final handover.",
      deliverables: [
        "Site survey and technical preparation",
        "Budget and timeline planning",
        "Structural and architectural execution",
      ],
      process: ["Consultation", "Planning", "Construction", "Quality Review", "Handover"],
    },
    {
      slug: "commercial-building",
      title: "Commercial Building",
      description:
        "Construction solutions for offices, retail spaces, and business properties with practical and long-term value.",
      icon: Building2,
      summary:
        "Commercial construction service designed for operational durability and scalable business needs.",
      deliverables: [
        "Project feasibility and scope planning",
        "Core structure and envelope execution",
        "Tenant-ready completion",
      ],
      process: ["Needs Mapping", "Technical Direction", "Execution", "Commissioning", "Handover"],
    },
    {
      slug: "renovation-remodeling",
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces into more functional, modern, and efficient environments.",
      icon: Hammer,
      summary:
        "Strategic renovation to improve spatial flow, performance, and visual quality of existing buildings.",
      deliverables: [
        "Existing condition assessment",
        "Layout and utility optimization",
        "Renovation execution with phased delivery",
      ],
      process: ["Assessment", "Scope Setup", "Renovation Works", "Finishing", "Handover"],
    },
    {
      slug: "interior-fit-out",
      title: "Interior Fit-Out",
      description:
        "Interior execution for homes, offices, and commercial spaces with attention to detail and finishing quality.",
      icon: PaintBucket,
      summary:
        "Interior fit-out service focused on detail precision, material quality, and completion consistency.",
      deliverables: [
        "Interior detail drawing support",
        "Material and finishing execution",
        "Final quality walkthrough",
      ],
      process: ["Concept Alignment", "Material Prep", "Fit-Out Execution", "QC", "Handover"],
    },
    {
      slug: "project-planning",
      title: "Project Planning",
      description:
        "Budget estimation, timeline planning, and technical consultation before construction begins.",
      icon: ClipboardList,
      summary:
        "Pre-construction planning service for stronger decisions before project execution starts.",
      deliverables: [
        "Cost estimation and budget framework",
        "Timeline and milestone mapping",
        "Risk and dependency review",
      ],
      process: ["Briefing", "Estimation", "Roadmap", "Validation", "Approval"],
    },
    {
      slug: "project-management",
      title: "Project Management",
      description:
        "On-site coordination, progress monitoring, and quality control to keep the project aligned.",
      icon: HardHat,
      summary:
        "Field-driven project management to maintain schedule, quality, and coordination across teams.",
      deliverables: [
        "Site coordination and reporting",
        "Progress and quality monitoring",
        "Stakeholder communication cadence",
      ],
      process: ["Kickoff", "Coordination", "Monitoring", "Reporting", "Closure"],
    },
  ] as ServiceItem[],
  process: [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your goals, needs, budget, timeline, and project expectations.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "We prepare the project scope, technical direction, estimated budget, and execution plan.",
    },
    {
      step: "03",
      title: "Design & Preparation",
      description:
        "We align the design, material selection, team preparation, and project schedule.",
    },
    {
      step: "04",
      title: "Construction",
      description:
        "Our team executes the project with regular progress updates and quality control.",
    },
    {
      step: "05",
      title: "Handover",
      description:
        "We review the final result, complete the finishing details, and hand over the project.",
    },
  ],
  testimonials: [
    {
      quote:
        "Arkana helped us manage the construction process with clear communication and consistent progress updates. The result was exactly what we expected.",
      author: "Adrian Putra",
      role: "Homeowner",
    },
    {
      quote:
        "The team understood our business needs and delivered a commercial space that feels professional, efficient, and ready to operate.",
      author: "Nadia Larasati",
      role: "Business Owner",
    },
    {
      quote:
        "From planning to handover, the process was structured and transparent. That gave us confidence throughout the project.",
      author: "Michael Tan",
      role: "Property Developer",
    },
  ],
  footer: {
    description:
      "Modern contractor and construction company helping homeowners, businesses, and developers build better spaces with precision and trust.",
    companyLinks: ["About", "Projects", "Services", "Contact"],
    serviceLinks: [
      "Residential Construction",
      "Commercial Building",
      "Renovation",
      "Interior Fit-Out",
      "Project Management",
    ],
    contact: ["hello@arkanabuild.com", "+62 812-0000-0000", "Jakarta, Indonesia"],
  },
}
