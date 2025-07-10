"use client"

import { useState, useEffect } from "react"
import { LandingPage } from "@/components/landing-page"
import { ProfessionalHero } from "@/components/professional-hero"
import { ProfessionalSkills } from "@/components/professional-skills"
import { ModernProjects } from "@/components/modern-projects"
import { SuppressSenderError } from "@/components/suppress-sender-error"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Target, Users, Award } from "lucide-react"
import { Footer } from "@/components/footer"

const achievements = [
  {
    icon: BookOpen,
    title: "Project-Based Experience",
    description:
      "Independent full-stack developer with hands-on experience building and deploying MERN stack applications, integrating AI/ML APIs, and following DevOps practices.",
  },
  {
    icon: Target,
    title: "AI Agent Development",
    description:
      "Currently building real-world AI agents for workflow automation using n8n, LangChain, and OpenAI APIs. Specializing in process automation and orchestration.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Led Final Year Project development as Lead Developer and mentored junior students in full-stack development, ML model fine-tuning, and AI API integrations.",
  },
  {
    icon: Award,
    title: "Technical Expertise",
    description:
      "Proficient in modern technologies including MERN stack, AI/ML integration, cloud deployment (AWS, Vercel), and following industry best practices.",
  },
]

export default function HomePage() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPortfolio(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen">
      {!showPortfolio ? (
        <LandingPage onEnter={() => setShowPortfolio(true)} />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {/* Suppress noisy wallet-extension console error */}
          <SuppressSenderError />

          {/* Hero Section */}
          <ProfessionalHero />

          {/* About Summary */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Me
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    I'm a dedicated Software Engineering student at COMSATS University with a passion for creating
                    innovative web applications and exploring cutting-edge technologies. My journey spans from building
                    comprehensive e-commerce platforms to implementing machine learning models and designing elegant
                    user interfaces.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My expertise includes full-stack development with the MERN stack, Python-based backend systems,
                    computer vision applications, and modern UI/UX design. I'm particularly interested in DevOps
                    practices and cloud technologies, constantly seeking opportunities to bridge the gap between
                    development and operations for efficient software delivery.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="py-20 bg-muted/30 dark:bg-white/5">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Key{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Achievements
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Highlights from my academic journey and project development experience in software engineering
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                              <achievement.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <ProfessionalSkills />

          {/* Projects Section */}
          <ModernProjects />

          {/* Call to Action */}
          <section className="py-20 bg-muted/30 dark:bg-white/5">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto space-y-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Start My{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Professional Journey
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm actively seeking entry-level opportunities where I can contribute my technical skills, learn from
                  experienced professionals, and grow as a software developer. My diverse project experience and passion
                  for emerging technologies make me ready to tackle real-world challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  >
                    <Link href="/contact">
                      Let's Connect
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 border-2 hover:bg-muted/50 bg-transparent"
                    asChild
                  >
                    <Link href="/about">Learn More About Me</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer Section */}
          <Footer />
        </motion.div>
      )}
    </main>
  )
}
