import React from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  )
}

export default Layout