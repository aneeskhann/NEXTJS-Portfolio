'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BentoCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient'
  index?: number
}

export function BentoCard({
  children,
  className = '',
  variant = 'default',
  index = 0,
}: BentoCardProps) {
  const baseStyles = variant === 'gradient' ? 'glass-card-gradient' : 'glass-card'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ scale: 1.02 }}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </motion.div>
  )
}
