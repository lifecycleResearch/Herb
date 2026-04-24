import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "rounded-lg border border-bg background p-6",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export { Card }