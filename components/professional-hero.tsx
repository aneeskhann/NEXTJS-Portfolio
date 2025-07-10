"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Calendar, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Abbottabad, KPK",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aneeskhann666@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "03468883034",
  },
  {
    icon: Calendar,
    label: "Graduation",
    value: "2025",
  },
]

export function ProfessionalHero() {
  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Main Profile Container */}
                <div className="relative w-80 h-80 bg-black rounded-full p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-blue-500/20">
                    <Image
                      src="/images/profile-new.jpg"
                      alt="Mark Horanees - Software Engineering Student"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-medium">
                    Available for Work
                  </Badge>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-8 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute -top-8 -right-2 w-4 h-4 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Status Badge */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <Badge variant="outline" className="text-sm">
                  Software Engineering Student
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Muhammad Anees
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  Independent Full-Stack Developer & AI Agent Developer
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                <p>
                  I'm an Independent Full-Stack Developer specializing in building end to end products. I have
                  experience in building AI agents and integrating them into web applications.
                </p>
                <p>
                  Currently working as a project lead at a startup, I'm eager to contribute to innovative projects and
                  grow as a professional developer in a collaborative environment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  asChild
                >
                  <Link href="/contact">
                    Get In Touch
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent" asChild>
                  <Link href="/resume">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Link>
                </Button>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="modern-card hover:shadow-md transition-shadow">
                      <CardContent className="p-4 text-center">
                        <info.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
