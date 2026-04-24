import React from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

const SectionHeader = ({ title, description, className }: SectionHeaderProps) => (
  <div className={cn("mb-8", className)}>
    <h2 className={cn("mb-4 text-2xl font-bold tracking-tight text-text")}>
      {title}
    </h2>
    {description && (
      <p className="text-text-muted">
        {description}
      </p>
    )}
  </div>
)

export { SectionHeader }