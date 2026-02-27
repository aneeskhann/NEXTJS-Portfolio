'use client'

import { BentoCard } from './bento-card'
import { BentoGrid } from './bento-grid'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Smart Marketplace',
    description: 'AI-powered e-commerce with image validation using Gemini API and YOLO models.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'Docker'],
    github: 'https://github.com/aneeskhan/smart-marketplace',
    status: 'Completed',
  },
  {
    title: 'HR Portal Management',
    description: 'Next.js frontend with FastAPI backend for employee operations and workflows.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/aneeskhan/hr-portal',
    status: 'In Progress',
  },
  {
    title: 'Smart Application Portal',
    description: 'Unified platform for Jobs, Internships, and Scholarships with recommendations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Clerk.js', 'Multer'],
    github: 'https://github.com/aneeskhan/application-portal',
    status: 'Completed',
  },
  {
    title: 'Perfume Scent Store UI',
    description: 'Responsive e-commerce UI design with reusable component architecture.',
    technologies: ['React-Vite', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/aneeskhan/perfume-scent-store',
    status: 'Completed',
  },
]

export function BentoProjects() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-zinc-100">Projects</h2>
      <BentoGrid columns={2}>
        {projects.map((project, index) => (
          <BentoCard key={project.title} index={index}>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-100 leading-snug">{project.title}</h3>
                <Badge
                  variant={project.status === 'Completed' ? 'default' : 'secondary'}
                  className="text-xs px-2 py-0.5 flex-shrink-0"
                >
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-zinc-400">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5 bg-transparent border-zinc-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  Code
                </a>
              </div>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  )
}
