import React from 'react'
import { SectionHeader } from '@/components/layout/section-header'
import { Card } from '@/components/ui/card'

const Industries = () => {
  const industries = [
    {
      title: "Extraction Facilities",
      description: "Serving BHO, CO2, propane, and ethanol extraction facilities with solvent recovery and byproduct recycling solutions.",
    },
    {
      title: "CBD Manufacturers",
      description: "Helping CBD isolate and distillate manufacturers manage waste streams and recover valuable materials.",
    },
    {
      title: "Cannabis Cultivators",
      description: "Providing compliance documentation and waste management for licensed cultivators with plant waste and spent solvents.",
    },
    {
      title: "Compliance Officers",
      description: "Supporting EHS and compliance teams with manifesting, reporting, and regulatory documentation services.",
    },
  ]

  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Industries We Serve"
          description="Trusted partners across the hemp and cannabis supply chain"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Card key={industry.title} className="h-full">
              <h3 className="mb-3 text-lg font-semibold text-text">{industry.title}</h3>
              <p className="text-text-muted">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries