"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "E-Commerce MERN Application",
    description:
      "Full-stack e-commerce platform built with MongoDB, Express.js, React.js, and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Shadcn UI"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Weather Forecast App",
    description:
      "Mobile-first weather application with location-based forecasts, interactive maps, and weather alerts using React Native.",
    technologies: ["React Native", "Expo", "Weather API", "AsyncStorage", "Maps"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat application with AI integration for smart responses, file sharing, and group messaging capabilities.",
    technologies: ["React.js", "Socket.io", "Python", "FastAPI", "OpenAI API"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Restaurant Management System",
    description:
      "Complete restaurant management solution with order tracking, inventory management, and customer relationship features.",
    technologies: ["Java", "Spring Boot", "MySQL", "React.js", "Material-UI"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js, featuring dark/light themes, animations, and optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, mobile
            applications, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button asChild variant="outline">
            <a href="https://github.com/Markhoranees" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
