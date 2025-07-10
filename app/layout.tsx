import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Anees - Independent Full-Stack Developer & AI Agent Developer",
  description:
    "Portfolio of Muhammad Anees, Independent Full-Stack Developer specializing in MERN stack applications and AI agent development. BS Software Engineering student at COMSATS University.",
  keywords: [
    "Muhammad Anees",
    "Full-Stack Developer",
    "AI Agent Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Portfolio",
    "Software Engineering",
  ],
  authors: [{ name: "Muhammad Anees" }],
  creator: "Muhammad Anees",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-anees.dev",
    title: "Muhammad Anees - Independent Full-Stack Developer",
    description:
      "Portfolio showcasing projects in full-stack development, AI agent automation, and modern web technologies",
    siteName: "Muhammad Anees Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Anees - Independent Full-Stack Developer",
    description:
      "Portfolio showcasing projects in full-stack development, AI agent automation, and modern web technologies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
