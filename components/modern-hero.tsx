"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Github, Mail, MapPin, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

export function ModernHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Profile Image - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 flex justify-center lg:justify-start order-1"
            >
              <div className="relative">
                <div className="w-48 h-48 lg:w-56 lg:h-56 relative">
                  {/* Black background container */}
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Muhammad Anees - Software Engineering Student"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-medium shadow-lg">
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      <span>Available</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-purple-500/30 rounded-full blur-sm"></div>
              </div>
            </motion.div>

            {/* Main Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-9 order-2"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-4"
              >
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Open to opportunities
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                  Hi, I'm <span className="gradient-text">Muhammad Anees</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  Software Engineering Student & Aspiring DevOps Engineer
                </p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-8 max-w-2xl"
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                  Passionate about building scalable web applications with the{" "}
                  <span className="font-semibold text-foreground">MERN stack</span> while exploring{" "}
                  <span className="font-semibold text-foreground">DevOps practices</span> and cloud technologies.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Currently in my final year at COMSATS University, eager to contribute to innovative projects and learn
                  from industry professionals.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button asChild size="lg" className="modern-btn text-base px-6 py-3">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-6 py-3 professional-hover bg-transparent"
                  asChild
                >
                  <Link href="/resume">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </motion.div>

              {/* Quick Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              >
                <div className="modern-card p-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <MapPin className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Location</p>
                      <p className="text-xs text-muted-foreground">Nowshera, PK</p>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Calendar className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Status</p>
                      <p className="text-xs text-muted-foreground">Final Year</p>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Mail className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Email</p>
                      <a
                        href="mailto:aneeskhann666@gmail.com"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>

                <div className="modern-card p-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <Github className="h-3 w-3 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">GitHub</p>
                      <a
                        href="https://github.com/Markhoranees"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center"
                      >
                        @Markhoranees
                        <ExternalLink className="ml-1 h-2 w-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
