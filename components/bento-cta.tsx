'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function BentoCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.02 }}
      className="glass-card md:col-span-2 lg:col-span-2 text-center"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-2">Let's Connect</h2>
          <p className="text-zinc-400">Ready to collaborate? Let's build something extraordinary together.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
          >
            <Link href="https://github.com/aneeskhan" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-zinc-700 text-zinc-100 hover:bg-zinc-900"
          >
            <Link href="mailto:muhammadanees.dev@gmail.com">
              Email Me
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
