"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Smartphone, Brain, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn UI", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java Spring", level: 70 },
      { name: "API Design", level: 85 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Cloud,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "React Native", level: 80 },
      { name: "Expo", level: 75 },
      { name: "Mobile UI/UX", level: 85 },
      { name: "App Store Deploy", level: 70 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Python ML", level: 75 },
      { name: "YOLO", level: 70 },
      { name: "AI Integration", level: 80 },
      { name: "Data Analysis", level: 75 },
    ],
  },
  {
    title: "Design & Tools",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
    ],
  },
]

export function ModernSkills() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full development spectrum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.gradient} mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
