"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, GraduationCap, Code, Database, Cloud, Briefcase, User } from "lucide-react"

const resumeData = {
  personalInfo: {
    name: "Muhammad Anees",
    title: "Independent Full-Stack Developer & AI Agent Developer",
    location: "Abbottabad, KPK, Pakistan",
    email: "aneeskhann666@gmail.com",
    phone: "03468883034",
    linkedin: "https://www.linkedin.com/in/muhammad-anees-b7a257266/",
    github: "https://github.com/aneeskhan",
  },
  summary:
    "Independent Full-Stack Developer with strong project-based experience building and deploying MERN stack applications. Currently developing AI agents for workflow automation while completing BS in Software Engineering at COMSATS University. Experienced in integrating AI/ML APIs, cloud deployments, and DevOps practices. Led Final Year Project development and mentored junior students in full-stack development.",
  education: {
    institution: "COMSATS University, Abbottabad, KPK",
    degree: "BS in Software Engineering",
    status: "Graduation 2025",
    location: "Abbottabad, KPK",
  },
  experience: [
    {
      title: "Independent Full-Stack Developer",
      company: "Self-driven Projects",
      period: "Current",
      achievements: [
        "Built and deployed full-stack web applications using MERN stack",
        "Integrated AI-powered image validation using Gemini API and YOLO models",
        "Designed and optimized RESTful APIs; validated using Postman",
        "Applied DevOps practices: AWS EC2, AWS S3, Vercel deployments",
        "Followed MVC architecture and API-first design",
        "Managed projects using Git and GitHub",
      ],
    },
    {
      title: "AI Agent Developer",
      company: "Current Independent Work",
      period: "Current",
      achievements: [
        "Building real-world AI agents for workflow automation",
        "Integrating n8n, LangChain, and APIs to automate processes",
        "Prototyping agent-based solutions for automation and orchestration",
      ],
    },
  ],
  leadership: [
    {
      title: "Final Year Project Lead Developer",
      organization: "Smart Marketplace",
      description: "Led a team to develop an AI-integrated e-commerce platform",
    },
    {
      title: "Volunteer Mentor",
      organization: "University Community",
      description: "Guided junior students in full-stack development, ML model fine-tuning, and AI API integrations",
    },
  ],
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java"],
    Frontend: ["React", "Next.js", "Vue", "React Native", "Tailwind CSS", "Bootstrap", "Material-UI"],
    "Backend/Server": ["Node.js", "Express.js", "FastAPI", "Spring Boot (Basic)"],
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
  },
  languages: [
    { name: "Urdu", level: "Native proficiency" },
    { name: "English", level: "Intermediate proficiency - Fluent in collaborative work environments" },
  ],
}

export default function Resume() {
  const handleDownload = () => {
    // In a real application, you would have a PDF file to download
    const link = document.createElement("a")
    link.href = "/resume-muhammad-anees.pdf" // This would be your actual PDF file
    link.download = "Muhammad_Anees_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    // In a real application, you would open the PDF in a new tab
    window.open("/resume-muhammad-anees.pdf", "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground mb-6">Download or preview my complete resume</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleDownload} size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={handlePreview} variant="outline" size="lg">
              <Eye className="h-4 w-4 mr-2" />
              Preview Resume
            </Button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="space-y-6">
          {/* Header */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">{resumeData.personalInfo.name}</CardTitle>
              <p className="text-xl text-muted-foreground">{resumeData.personalInfo.title}</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-2">
                <span>{resumeData.personalInfo.location}</span>
                <span>{resumeData.personalInfo.email}</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            </CardHeader>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold">{resumeData.education.degree}</h3>
                <p className="text-primary">{resumeData.education.institution}</p>
                <p className="text-muted-foreground">{resumeData.education.location}</p>
                <Badge variant="outline" className="mt-2">
                  {resumeData.education.status}
                </Badge>
              </div>

              <h4 className="font-semibold mt-6 mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.coursework &&
                  resumeData.coursework.map((course) => (
                    <Badge key={course} variant="secondary">
                      {course}
                    </Badge>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resumeData.experience &&
                  resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.period}</p>
                      <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Leadership & Mentorship
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resumeData.leadership &&
                  resumeData.leadership.map((lead, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold">{lead.title}</h3>
                      <p className="text-primary">{lead.organization}</p>
                      <p className="text-muted-foreground">{lead.description}</p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-medium mb-2 flex items-center">
                      {category === "Frontend" && <Code className="h-4 w-4 mr-1" />}
                      {category === "Backend/Server" && <Database className="h-4 w-4 mr-1" />}
                      {category === "Databases" && <Database className="h-4 w-4 mr-1" />}
                      {category === "Cloud & DevOps" && <Cloud className="h-4 w-4 mr-1" />}
                      {category === "AI & Machine Learning" && <Cloud className="h-4 w-4 mr-1" />}
                      {category === "Automation" && <Cloud className="h-4 w-4 mr-1" />}
                      {category === "Tools" && <Cloud className="h-4 w-4 mr-1" />}
                      {category === "Concepts" && <Cloud className="h-4 w-4 mr-1" />}
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
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
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            This is a preview of my resume. Download the PDF for the complete version.
          </p>
          <Button onClick={handleDownload} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download Full Resume
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
