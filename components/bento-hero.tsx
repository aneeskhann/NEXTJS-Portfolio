'use client'

import { motion } from 'framer-motion'

export function BentoHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="space-y-6 py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Full-stack developer
          </span>
          {' '}<span className="text-zinc-500">crafting elegant solutions</span>
        </h1>
        <p className="text-lg text-zinc-400 mt-6 max-w-2xl">
          Building performant web applications with modern technologies. Passionate about AI-driven solutions and clean code.
        </p>
      </div>
    </motion.div>
  )
}
