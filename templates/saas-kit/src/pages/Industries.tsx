import React from 'react'
import { SectionHeader } from '@/components/layout/section-header'
import Industries from '@/components/sections/industries'
import TrustBadges from '@/components/sections/trust-badges'

const IndustriesPage = () => {
  return (
    <>
      <section className="pt-20 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Industries We Serve"
            description="Trusted partners across the hemp and cannabis supply chain"
          />
          <Industries />
        </div>
      </section>
      <TrustBadges />
    </>
  )
}

export default IndustriesPage