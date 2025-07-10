"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Database, Cloud, Brain, Server, Monitor, Code } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90, description: "Modern component-based development" },
      { name: "Next.js", level: 85, description: "Full-stack React framework" },
      { name: "Vue", level: 80, description: "Progressive JavaScript framework" },
      { name: "React Native", level: 75, description: "Mobile app development" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" },
      { name: "Bootstrap", level: 85, description: "Responsive CSS framework" },
      { name: "Material-UI", level: 80, description: "React component library" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90, description: "Server-side JavaScript runtime" },
      { name: "Express.js", level: 85, description: "Web application framework" },
      { name: "FastAPI", level: 80, description: "Modern Python web framework" },
      { name: "Spring Boot", level: 60, description: "Java framework (Basic)" },
      { name: "RESTful APIs", level: 90, description: "API design and development" },
      { name: "MVC Architecture", level: 85, description: "Design pattern implementation" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "JavaScript", level: 95, description: "Primary programming language" },
      { name: "TypeScript", level: 85, description: "Type-safe JavaScript" },
      { name: "Python", level: 80, description: "Backend and AI/ML development" },
      { name: "Java", level: 70, description: "Object-oriented programming" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "MongoDB", level: 90, description: "NoSQL document database" },
      { name: "PostgreSQL", level: 85, description: "Advanced relational database" },
      { name: "Firebase", level: 80, description: "Cloud database platform" },
      { name: "MySQL", level: 75, description: "Popular relational database" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { name: "AWS EC2", level: 80, description: "Cloud compute services" },
      { name: "AWS S3", level: 75, description: "Cloud storage solutions" },
      { name: "Vercel", level: 90, description: "Frontend deployment platform" },
      { name: "Docker", level: 70, description: "Containerization (Basic)" },
      { name: "CI/CD Pipelines", level: 75, description: "Automated deployment" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "ML Model Fine-Tuning", level: 80, description: "Custom model training" },
      { name: "Data Preprocessing", level: 85, description: "Data preparation techniques" },
      { name: "API Integration", level: 90, description: "AI/ML API implementation" },
      { name: "n8n", level: 85, description: "Workflow automation platform" },
      { name: "LangChain", level: 80, description: "AI application framework" },
      { name: "OpenAI API", level: 85, description: "AI service integration" },
    ],
  },
]

export function ProfessionalSkills() {
  return (
    <section id="skills" className="section-padding">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across full-stack development, DevOps practices, and
              emerging technologies like AI/ML.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-sm">{skill.name}</h4>
                            <p className="text-xs text-muted-foreground">{skill.description}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="modern-card p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                As a Software Engineering student, I'm constantly expanding my skill set through academic coursework,
                personal projects, and hands-on experimentation. Currently focusing on advanced DevOps practices, cloud
                architecture, and machine learning applications in web development.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Docker & Kubernetes", "AWS Cloud Services", "Machine Learning", "Microservices", "GraphQL"].map(
                  (learning) => (
                    <Badge key={learning} variant="outline" className="px-3 py-1">
                      Currently Learning: {learning}
                    </Badge>
                  ),
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
