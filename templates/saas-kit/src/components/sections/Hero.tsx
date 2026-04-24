import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative bg-background pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-wrap justify-center -mx-2 mb-6">
            {/* Trust Badges */}
          </div>
          <h1 className="max-w-xl mx-auto mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Closing the Loop on Hemp Industry Waste
          </h1>
          <p className="mx-auto max-w-xl mb-8 text-base text-text-muted">
            We specialize in recovering spent solvents and recycling hemp byproducts for extraction facilities, CBD manufacturers, and cannabis cultivators. Our compliant, sustainable solutions reduce waste and operational costs while ensuring environmental stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Learn More About Our Services
            </Button>
            <Button variant="outline" size="lg">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero