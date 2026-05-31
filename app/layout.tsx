import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { JsonLd } from "@/components/seo/json-ld"
import { companyProfile } from "@/constants/company-profile"
import { BASE_URL, defaultOgImages } from "@/lib/seo"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Arkana Build Studio",
    template: "%s | Arkana Build Studio",
  },
  description: "Modern Contractor & Construction Partner",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: companyProfile.brand,
    title: companyProfile.brand,
    description: companyProfile.tagline,
    url: BASE_URL,
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: companyProfile.brand,
    description: companyProfile.tagline,
    images: [defaultOgImages[0].url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyProfile.brand,
    url: BASE_URL,
    logo: `${BASE_URL}/og-default.svg`,
    description: companyProfile.footer.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@arkanabuild.com",
        telephone: "+62 812-0000-0000",
        areaServed: "ID",
        availableLanguage: ["en", "id"],
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyProfile.brand,
    url: BASE_URL,
    inLanguage: "en",
    description: companyProfile.tagline,
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  )
}
