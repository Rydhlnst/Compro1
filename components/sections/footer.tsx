import { companyProfile } from "@/constants/company-profile"

export function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-background px-4 py-12 text-foreground md:px-8 md:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="mb-10 flex w-full flex-col items-start justify-between gap-10 md:mb-12 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Have a project in mind? Let&apos;s build something exceptional.
            </h2>
            <a
              href={`mailto:${companyProfile.footer.contact[0]}`}
              className="border-b-2 border-foreground pb-1 text-lg font-medium transition-colors hover:border-muted-foreground hover:text-muted-foreground"
            >
              {companyProfile.footer.contact[0]}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Location
              </p>
              <address className="space-y-1 text-sm not-italic">
                <p>{companyProfile.footer.contact[2]}</p>
                <p>{companyProfile.brand}</p>
              </address>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Social
              </p>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm font-medium hover:underline">
                  Instagram
                </a>
                <a href="#" className="text-sm font-medium hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="text-sm font-medium hover:underline">
                  Behance
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <h3 className="pointer-events-none -mb-[1vw] select-none text-[11vw] leading-none font-black tracking-tighter text-foreground/10">
            {companyProfile.brand}
          </h3>
          <div className="relative z-10 flex items-end justify-between gap-4 border-t border-foreground/15 py-6">
            <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              © 2026 {companyProfile.brand}
            </span>
            <div className="flex items-center gap-8">
              <span className="text-xs text-muted-foreground">001 - 2026</span>
              <a
                href="#home"
                className="text-xs font-semibold tracking-[0.16em] uppercase transition-colors hover:text-muted-foreground"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

