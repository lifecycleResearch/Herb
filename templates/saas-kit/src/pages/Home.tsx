import React from 'react'
import Hero from '@/components/sections/hero'
import TrustBadges from '@/components/sections/trust-badges'
import Services from '@/components/sections/services'
import Industries from '@/components/sections/industries'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <Industries />
      <section className="pt-20 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-text text-center">
            Ready to Reduce Your Waste and Costs?
          </h2>
          <p className="mb-8 text-center text-text-muted max-w-xl mx-auto">
            Join dozens of extraction facilities and manufacturers who trust Life Cycle Hemp to manage their waste streams compliantly and sustainably.
          </p>
          <div className="flex justify-center">
            <Button variant="primary" size="lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home