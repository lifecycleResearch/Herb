import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Simulate API call - in a real app this would submit to a backend or service
    try {
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-medium text-text">Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-medium text-text">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block font-medium text-text">Company</label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="ABC Extraction Co."
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block font-medium text-text">Phone</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-medium text-text">Message</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={5}
          placeholder="Tell us about your waste streams, facility size, and how we can help..."
        />
      </div>
      <div className="flex items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Life%20Cycle%20Hemp%20Consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn w-full sm:w-auto justify-center px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
        >
          Book a Consultation
        </a>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-800">
          Message sent successfully! We'll be in touch shortly.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  )
}

export default ContactForm