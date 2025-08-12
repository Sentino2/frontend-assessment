'use client'

import { FormData } from '../ApplicationForm'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Step5KontaktdatenProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
  updateCheckboxes: (terms: boolean, consent: boolean) => void
}

export default function Step5Kontaktdaten({ formData, updateFormData, updateCheckboxes }: Step5KontaktdatenProps) {
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  // Update parent component when checkboxes change
  useEffect(() => {
    updateCheckboxes(termsAccepted, consentGiven)
  }, [termsAccepted, consentGiven, updateCheckboxes])

  const handleInputChange = (field: keyof Pick<FormData, 'firstName' | 'lastName' | 'email' | 'phone'>, value: string) => {
    updateFormData({ [field]: value })
  }

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted)
  }

  const handleConsentChange = () => {
    setConsentGiven(!consentGiven)
  }

  return (
    <div className="space-y-6">
      {/* Single Kontaktdaten Box */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-start space-x-3 mb-2">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/contact.png"
              alt="Contact icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Kontaktdaten
          </h3>
        </div>
        
        {/* Division Line after header - full width */}
        <div className="border-t border-gray-200 mb-4 -mx-4"></div>
        
        <div className="space-y-8">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vorname
              </label>
              <input
                type="text"
                value={formData.firstName || "Paul"}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="Ihr Vorname"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nachname
              </label>
              <input
                type="text"
                value={formData.lastName || "Neuer"}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="Ihr Nachname"
              />
            </div>
          </div>

          {/* Division Line */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PLZ
            </label>
            <input
              type="text"
              value="10490"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
              placeholder="PLZ"
            />
          </div>

          {/* Division Line */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Email and Phone Number */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email || "p.neuer@email.de"}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="ihre.email@beispiel.de"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefonnummer
              </label>
              <input
                type="tel"
                value={formData.phone || "012-3456789"}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="+49 123 456789"
              />
            </div>
          </div>

          {/* Division Line */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-2">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
                className="sr-only"
              />
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                termsAccepted 
                  ? 'border-gray-200 bg-black' 
                  : 'border-gray-300'
              }`}>
                {termsAccepted && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-dark-gray text-sm leading-relaxed">
                Ich stimme den Allgemeinen Geschäftsbedingungen zu.
              </span>
            </label>
            
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consentGiven}
                onChange={handleConsentChange}
                className="sr-only"
              />
              <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                consentGiven 
                  ? 'border-gray-200 bg-black' 
                  : 'border-gray-300'
              }`}>
                {consentGiven && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-dark-gray text-sm leading-relaxed">
                Ich gebe mein Einverständnis, für ähnliche Positionen kontaktiert zu werden.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
} 