import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-bg">
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.svg" alt="Life Cycle Hemp Logo" className="h-8 w-auto" />
              <span className="self-center text-xl font-semibold text-text">Life Cycle Hemp</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <nav className="space-x-4">
              <Link href="/" className="text-text-muted hover:text-text">Home</Link>
              <Link href="/services" className="text-text-muted hover:text-text">Services</Link>
              <Link href="/industries" className="text-text-muted hover:text-text">Industries</Link>
              <Link href="/about" className="text-text-muted hover:text-text">About</Link>
              <Link href="/contact" className="text-text-muted hover:text-text">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-md p-2 text-text-muted hover:text-text"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={String(isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <nav
        className={cn(
          isOpen ? 'sm:hidden' : 'hidden',
          'space-y-1 px-2 pt-2 pb-3'
        )}
      >
        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:bg-accent hover:text-text">Home</Link>
        <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:bg-accent hover:text-text">Services</Link>
        <Link href="/industries" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:bg-accent hover:text-text">Industries</Link>
        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:bg-accent hover:text-text">About</Link>
        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:bg-accent hover:text-text">Contact</Link>
      </nav>
    </header>
  )
}

// Utility function for class merging (same as cn from utils)
function cn(...inputs: string[]): string {
  return inputs.filter(Boolean).join(' ')
}

export default Header