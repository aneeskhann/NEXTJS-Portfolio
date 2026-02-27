"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pt-6 px-4"
    >
      <div className="nav-dock px-8 py-3 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 bg-gradient-to-br from-zinc-300 to-zinc-500 rounded-md flex items-center justify-center">
            <span className="text-zinc-950 font-bold text-xs">MA</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  )
}
