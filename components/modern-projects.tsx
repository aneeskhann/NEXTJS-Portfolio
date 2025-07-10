"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ShoppingCart, Users, Palette, Calendar } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Smart Marketplace (Final Year Project)",
    description:
      "AI-powered marketplace platform with image validation using Gemini API and YOLO models. Led team development of comprehensive e-commerce solution.",
    longDescription:
      "Led the development of an AI-integrated e-commerce platform as Final Year Project. Built with MERN stack, featuring AI-powered image validation using Gemini API and YOLO models. Deployed on Vercel and AWS EC2 with MongoDB and Docker.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "YOLO",
      "Tailwind CSS",
      "Clerk.js",
      "AWS EC2",
      "Docker",
    ],
    category: "Full-Stack",
    icon: ShoppingCart,
    status: "Completed",
    duration: "6 months",
    github: "https://github.com/aneeskhan/smart-marketplace",
    demo: "#",
    features: [
      "AI-powered image validation system",
      "Gemini API integration for smart features",
      "YOLO model implementation for object detection",
      "Full MERN stack architecture",
      "AWS EC2 and Vercel deployment",
      "Docker containerization",
      "Secure authentication with Clerk.js",
      "RESTful API design and implementation",
      "Responsive design with Tailwind CSS",
      "MongoDB database optimization",
    ],
    highlights: [
      "Led team as Final Year Project Lead Developer",
      "Successfully integrated multiple AI/ML APIs",
      "Deployed on cloud infrastructure using DevOps practices",
      "Implemented comprehensive e-commerce functionality",
    ],
  },
  {
    title: "HR Portal Management Workspace",
    description:
      "Comprehensive HR management system built with Next.js frontend and FastAPI Python backend, featuring employee operations and automated workflows.",
    longDescription:
      "Built an HR management system using Next.js, FastAPI, and PostgreSQL. Implemented employee operations, leave tracking, and attendance management with planned Slack/email notifications and multi-language support.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "Clerk.js", "Docker"],
    category: "Full-Stack",
    icon: Users,
    status: "In Progress",
    duration: "4 months (ongoing)",
    github: "https://github.com/aneeskhan/hr-portal",
    demo: "#",
    features: [
      "Employee profile management",
      "Leave tracking system",
      "Attendance management",
      "Role-based access control with Clerk.js",
      "PostgreSQL database design",
      "FastAPI backend architecture",
      "Planned Slack/email notifications",
      "Multi-language support planning",
      "Docker containerization",
      "TypeScript for type safety",
    ],
    highlights: [
      "Modern tech stack with Next.js and FastAPI",
      "Comprehensive employee management features",
      "Scalable PostgreSQL database design",
      "Professional authentication system",
    ],
  },
  {
    title: "Smart Application Portal",
    description:
      "Unified application management platform for Jobs, Internships, and Scholarships with intelligent recommendations and secure file handling.",
    longDescription:
      "Built a comprehensive application management platform with dynamic category-specific forms, intelligent recommendation system, and secure file handling using Multer. Features admin dashboard for managing listings and streamlined application workflows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk.js",
      "Multer",
      "Axios",
      "Tailwind CSS",
      "Docker",
    ],
    category: "Full-Stack",
    icon: Calendar,
    status: "Completed",
    duration: "3 months",
    github: "https://github.com/aneeskhan/application-portal",
    demo: "#",
    features: [
      "Unified platform for Jobs, Internships, Scholarships",
      "Dynamic category-specific forms",
      "Intelligent recommendation system",
      "Secure user authentication with Clerk.js",
      "Role-based access (Admin and HR roles)",
      "File handling with Multer (CVs, documents)",
      "Admin dashboard for listing management",
      "Application review workflows",
      "Secure backend storage and retrieval",
      "Responsive design implementation",
    ],
    highlights: [
      "Intelligent recommendation based on user profiles",
      "Comprehensive file management system",
      "Professional admin dashboard",
      "Streamlined application workflows",
    ],
  },
  {
    title: "Perfume Scent Store - UI Design",
    description:
      "Responsive and aesthetic e-commerce UI design project focusing on user experience and component reusability.",
    longDescription:
      "Designed a responsive and aesthetic e-commerce UI for a perfume scent store. Created reusable UI components ensuring seamless navigation and optimal user experience using modern design principles.",
    technologies: ["React-vite", "Tailwind CSS", "React Router"],
    category: "Frontend/Design",
    icon: Palette,
    status: "Completed",
    duration: "2 months",
    github: "https://github.com/aneeskhan/perfume-scent-store",
    demo: "#",
    features: [
      "Responsive e-commerce UI design",
      "Reusable component architecture",
      "Seamless navigation system",
      "Aesthetic design principles",
      "React-vite for optimal performance",
      "Tailwind CSS for styling",
      "React Router for navigation",
      "User experience optimization",
      "Modern design patterns",
      "Mobile-first approach",
    ],
    highlights: [
      "Focus on aesthetic and user experience",
      "Reusable component architecture",
      "Modern frontend development practices",
      "Responsive design implementation",
    ],
  },
]

export function ModernProjects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my major projects including my Final Year Project, ongoing HR management system, machine
              learning implementations, and UI design work.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full modern-card group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                project.status === "Completed"
                                  ? "default"
                                  : project.status === "In Progress"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Key Features:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 6).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 6 && (
                          <li className="text-primary text-xs font-medium">
                            +{project.features.length - 6} more features...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Project Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Project Highlights:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="modern-card p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                These projects represent my journey as a Software Engineering student, showcasing my growth from
                frontend development to full-stack applications, machine learning, and DevOps practices. I'm always
                working on new projects and learning emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://github.com/Markhoranees" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View All Projects on GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Let's Discuss Opportunities</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
