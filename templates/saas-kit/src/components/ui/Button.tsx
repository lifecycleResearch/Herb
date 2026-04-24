import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    asChild = false,
    className,
    ...props
  }, ref) => {
    const Component = asChild ? 'span' : 'button'
    
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-nowait'
    const variantClasses = {
      primary: `bg-primary text-primary-foreground hover:bg-primary/90`,
      secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/90`,
      outline: `border border-input hover:bg-accent hover:text-accent-foreground`,
    }
    
    const sizeClasses = {
      sm: 'h-9 px-3',
      md: 'h-10 px-4',
      lg: 'h-11 px-6',
    }
    
    return (
      <Component
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }