import React from 'react'
import { SectionHeader } from '@/components/layout/section-header'
import About from '@/components/sections/about'
import TrustBadges from '@/components/sections/trust-badges'

const AboutPage = () => {
  return (
    <>
      <section className="pt-20 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Us"
            description="Our mission, values, and commitment to sustainable hemp industry practices"
          />
          <About />
        </div>
      </section>
      <TrustBadges />
    </>
  )
}

export default AboutPage