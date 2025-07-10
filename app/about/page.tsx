"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Mail, Phone, Github } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Abbottabad, KPK, Pakistan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03468883034",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aneeskhann666@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aneeskhan",
  },
]

const education = [
  {
    institution: "COMSATS University, Abbottabad, KPK",
    degree: "BS in Software Engineering",
    status: "Graduation 2025",
    location: "Abbottabad, KPK",
  },
]

const coursework = ["Data Structures", "Algorithms", "Web Development", "Database Management"]

const skills = {
  "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java"],
  "Frontend Development": ["React", "Next.js", "Vue", "React Native", "Tailwind CSS", "Bootstrap", "Material-UI"],
  "Backend Development": ["Node.js", "Express.js", "FastAPI", "Spring Boot (Basic)"],
  Databases: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "Vercel", "Docker (Basic)"],
  "AI & Machine Learning": ["ML Model Fine-Tuning", "Data Preprocessing", "API Integration"],
  Automation: ["n8n", "LangChain", "OpenAI API"],
  Tools: ["Postman", "Git", "GitHub", "VS Code", "Cursor", "Figma"],
  Concepts: [
    "RESTful API Design",
    "MVC Architecture",
    "Microservices Architecture",
    "Responsive Design",
    "HCI Principles",
    "Workflow Automation",
    "CI/CD Pipelines",
  ],
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>

        {/* Personal Info */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <div className="flex items-center" key={index}>
                      <item.icon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Independent Full-Stack Developer with strong project-based experience in building and deploying MERN
                  stack applications. Currently leading AI agent development projects while completing BS in Software
                  Engineering at COMSATS University. Experienced in integrating AI/ML APIs, cloud deployments, and
                  following DevOps practices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 mb-6">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.location}</p>
                <Badge variant="outline" className="mt-2">
                  {edu.status}
                </Badge>
              </div>
            ))}

            <h3 className="text-lg font-semibold mt-6 mb-4">Relevant Coursework</h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <Badge key={course} variant="secondary">
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
