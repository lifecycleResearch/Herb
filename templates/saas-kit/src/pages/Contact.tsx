import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import ContactForm from '@/components/sections/ContactForm'
import TrustBadges from '@/components/sections/TrustBadges'

const Contact = () => {
  return (
    <>
      <section className="pt-20 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get in Touch"
            description="Have a question or ready to discuss your waste management needs?"
          />
          <ContactForm />
        </div>
      </section>
      <TrustBadges />
    </>
  )
}

export default Contact