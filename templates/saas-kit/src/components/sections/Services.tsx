import React from 'react'
import { SectionHeader } from '@/components/layout/section-header'
import { Card } from '@/components/ui/card'

const services = [
  {
    title: "Spent Solvent Recovery",
    description: "We recover and purify spent solvents from extraction processes, including BHO, propane, and CO2. Liquid solvents only.",
    icon: "Recycle",
  },
  {
    title: "On-Site Ethanol Processing",
    description: "For clients with existing ethanol permits, we provide on-site processing services to handle your spent ethanol safely and compliantly.",
    icon: "Factory",
  },
  {
    title: "Hemp Byproduct Recycling",
    description: "We repurpose spent hemp biomass into valuable secondary products, reducing waste and creating circular economy opportunities.",
    icon: "Leaf",
  },
  {
    title: "Compliance Documentation",
    description: "Full manifesting, EPA reporting, and AZDEQ filing support to ensure your facility remains compliant with all regulations.",
    icon: "FileText",
  },
]

const Services = () => {
  return (
    <section className="pt-20 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          description="Comprehensive solutions for hemp and cannabis extraction facilities"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                {/* Placeholder for icon - in a real app we'd use lucide or similar */}
                <div className="text-accent">{service.icon}</div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-text">{service.title}</h3>
              <p className="text-text-muted">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services