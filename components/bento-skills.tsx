'use client'

import { BentoCard } from './bento-card'
import { BentoGrid } from './bento-grid'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'AI & ML',
    skills: ['Gemini API', 'YOLO', 'Python', 'Machine Learning', 'LLMs'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'AWS EC2', 'Git', 'Vercel', 'Linux'],
  },
]

export function BentoSkills() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-zinc-100">Skills</h2>
      <BentoGrid columns={2}>
        {skillCategories.map((cat, index) => (
          <BentoCard key={cat.category} index={index} variant="gradient">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-zinc-100">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs px-2.5 py-1 bg-white/5 border-zinc-600 text-zinc-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  )
}
