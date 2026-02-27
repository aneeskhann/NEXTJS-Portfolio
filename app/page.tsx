'use client'

import { BentoHero } from '@/components/bento-hero'
import { BentoAbout } from '@/components/bento-about'
import { BentoProjects } from '@/components/bento-projects'
import { BentoSkills } from '@/components/bento-skills'
import { BentoCTA } from '@/components/bento-cta'
import { BentoGrid } from '@/components/bento-grid'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <BentoHero />
      </section>

      {/* Main Content Grid */}
      <section id="content" className="px-4 pb-32 max-w-6xl mx-auto">
        <BentoGrid columns={2}>
          {/* About */}
          <div id="about" className="md:col-span-1 lg:col-span-2">
            <BentoAbout />
          </div>

          {/* Projects */}
          <div id="projects" className="md:col-span-2 lg:col-span-2">
            <BentoProjects />
          </div>

          {/* Skills */}
          <div id="skills" className="md:col-span-2 lg:col-span-2">
            <BentoSkills />
          </div>

          {/* CTA */}
          <div id="contact" className="md:col-span-2 lg:col-span-2">
            <BentoCTA />
          </div>
        </BentoGrid>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
