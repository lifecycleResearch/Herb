import React from 'react'
import { SectionHeader } from '@/components/layout/section-header'
import { Card } from '@/components/ui/card'

const About = () => {
  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Us"
          description="Our mission, values, and commitment to sustainable hemp industry practices"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <h3 className="mb-3 text-lg font-semibold text-text">Our Mission</h3>
            <p className="text-text-muted">
              To close the loop on hemp industry waste by providing compliant, efficient solvent recovery and byproduct recycling services that reduce environmental impact and operational costs.
            </p>
          </Card>
          <Card className="h-full">
            <h3 className="mb-3 text-lg font-semibold text-text">Our Values</h3>
            <ul className="space-y-2 text-text-muted">
              <li>Environmental Stewardship</li>
              <li>Regulatory Compliance</li>
              <li>Operational Excellence</li>
              <li>Customer Partnership</li>
            </ul>
          </Card>
          <Card className="h-full">
            <h3 className="mb-3 text-lg font-semibold text-text">Our Process</h3>
            <ol className="list-decimal space-y-2 text-text-muted pl-5">
              <li>Waste assessment and consultation</li>
              <li>Customized recovery and recycling plan</li>
              <li>Compliant processing and documentation</li>
              <li>Ongoing support and optimization</li>
            </ol>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About