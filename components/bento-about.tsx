'use client'

import { BentoCard } from './bento-card'

export function BentoAbout() {
  return (
    <BentoCard className="md:col-span-1 lg:col-span-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-100">About</h2>
        <p className="text-zinc-400 leading-relaxed">
          I'm a full-stack developer with a passion for building scalable applications and exploring AI-driven solutions. With experience in MERN stack and modern web technologies, I transform ideas into elegant, performant digital experiences. Currently exploring AI agents and automation to solve real-world problems.
        </p>
      </div>
    </BentoCard>
  )
}
