import React from 'react'
import { SectionHeader } from '@/components/layout/section-header'
import Services from '@/components/sections/services'
import TrustBadges from '@/components/sections/trust-badges'

const ServicesPage = () => {
  return (
    <>
      <section className="pt-20 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            description="Comprehensive solutions for hemp and cannabis extraction facilities"
          />
          <Services />
        </div>
      </section>
      <TrustBadges />
    </>
  )
}

export default ServicesPage