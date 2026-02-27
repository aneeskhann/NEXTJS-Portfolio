'use client'

import { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
  className?: string
  columns?: 'auto' | 1 | 2 | 3 | 4
}

export function BentoGrid({
  children,
  className = '',
  columns = 'auto',
}: BentoGridProps) {
  const colClasses = {
    auto: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div
      className={`grid ${colClasses[columns]} gap-4 ${className}`}
    >
      {children}
    </div>
  )
}
