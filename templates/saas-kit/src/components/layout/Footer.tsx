import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-bg">
      <div className="px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-text font-semibold">Life Cycle Hemp</h3>
            <p className="text-text-muted">
              Closing the Loop on Hemp Industry Waste
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-text font-semibold">Services</h4>
            <ul className="space-y-2 text-text-muted">
              <li>Spent Solvent Recovery</li>
              <li>On-Site Ethanol Processing</li>
              <li>Hemp Byproduct Recycling</li>
              <li>Compliance Documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-text font-semibold">Industries</h4>
            <ul className="space-y-2 text-text-muted">
              <li>Extraction Facilities</li>
              <li>CBD Manufacturers</li>
              <li>Cannabis Cultivators</li>
              <li>Compliance Officers</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-text font-semibold">Contact</h4>
            <ul className="space-y-2 text-text-muted">
              <li>
                <span className="mr-2">📞</span> (480) 555-0100
              </li>
              <li>
                <span className="mr-2">📧</span> info@lifecyclehemp.com
              </li>
              <li>
                <span className="mr-2">📍</span> Phoenix, AZ
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-bg">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://linkedin.com/in/richard-h-kamolvathin"
              className="text-text-muted hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <p className="text-text-muted">
              © {new Date().getFullYear()} Life Cycle Hemp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer