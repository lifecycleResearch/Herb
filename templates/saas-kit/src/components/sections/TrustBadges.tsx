import React from 'react'

const TrustBadges = () => {
  const badges = [
    { label: "EPA Compliant", color: "green" },
    { label: "AZDEQ Licensed", color: "blue" },
    { label: "Solvent Recycler #8700-12", color: "teal" },
  ]

  return (
    <section className="pt-16 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3 justify-center">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center justify-center px-4 py-3 bg-surface rounded-lg border border-border">
              <span className="font-medium text-text">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges