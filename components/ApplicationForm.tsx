'use client'

import { useState } from 'react'
import Step1Fuehrerschein from './steps/Step1Fuehrerschein'
import Step2Licenses from './steps/Step2Licenses'
import Step3Qualifikationen from './steps/Step2Qualifikationen'
import Step4Erfahrung from './steps/Step3Erfahrung'
import Step5UeberDich from './steps/Step4UeberDich'
import Step6Languages from './steps/Step6Languages'
import Step7Kontaktdaten from './steps/Step5Kontaktdaten'
import Step3Kipper from './steps/Step3Kipper'
import Step4ErfahrungOnly from './steps/Step4Erfahrung'
import Step5Location from './steps/Step5Location'
import Step3KipperErfahrungDesktop from './steps/Step3KipperErfahrungDesktop'
import NavigationSidebar from './NavigationSidebar'

export type FormData = {
  // Step 1: Führerschein
  hasClassCLicense: boolean | null
  licenses: string[]
  
  // Step 2: Kranschein
  hasCraneLicense: boolean | null
  
  // Step 3: Kipper
  canOperateTipper: boolean | null
  
  // Step 4: Erfahrung
  yearsOfExperience: string
  
  // Step 5: Location
  location: string
  
  // Step 6: Languages
  languages: string[]
  
  // Step 7: Kontaktdaten
  firstName: string
  lastName: string
  email: string
  phone: string
}

const initialFormData: FormData = {
  hasClassCLicense: null,
  licenses: [],
  hasCraneLicense: null,
  canOperateTipper: null,
  yearsOfExperience: '',
  location: 'Valencia, Spain',
  languages: ['Deutsch', 'Polnisch'],
  firstName: 'Santiago',
  lastName: 'Garcia',
  email: 'santiago.garcia@code.berlin',
  phone: '739115976'
}

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isOpen, setIsOpen] = useState(true)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    // Desktop: 5 steps max
    // Mobile: 7 steps max
    const maxSteps = typeof window !== 'undefined' && window.innerWidth >= 768 ? 5 : 7
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSubmitApplication = () => {
    // Redirect to Formular geschlossen page
    setIsOpen(false)
  }

  const updateCheckboxes = (terms: boolean, consent: boolean) => {
    setTermsAccepted(terms)
    setConsentGiven(consent)
  }

  const reopenForm = () => {
    // Reset everything to start from the beginning
    setCurrentStep(1)
    setFormData(initialFormData)
    setTermsAccepted(false)
    setConsentGiven(false)
    setIsOpen(true)
  }

  if (!isOpen) {
    return (
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold mb-4">Formular geschlossen</h1>
        <button 
          onClick={reopenForm}
          className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange/90"
        >
          Wieder öffnen
        </button>
      </div>
    )
  }

  const renderCurrentStep = () => {
    // Desktop: Show 5 steps in correct order
    // Mobile: Show 7 steps
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      // Desktop logic - 5 steps
      if (currentStep === 1) {
        return <Step1Fuehrerschein formData={formData} updateFormData={updateFormData} />
      } else if (currentStep === 2) {
        return <Step3Qualifikationen formData={formData} updateFormData={updateFormData} />
      } else if (currentStep === 3) {
        return <Step3KipperErfahrungDesktop formData={formData} updateFormData={updateFormData} />
      } else if (currentStep === 4) {
        return <Step5UeberDich formData={formData} updateFormData={updateFormData} />
      } else if (currentStep === 5) {
        return <Step7Kontaktdaten formData={formData} updateFormData={updateFormData} updateCheckboxes={updateCheckboxes} />
      }
    }
    
    // Mobile: Show 7 steps
    switch (currentStep) {
      case 1:
        return <Step1Fuehrerschein formData={formData} updateFormData={updateFormData} />
      case 2:
        return <Step3Qualifikationen formData={formData} updateFormData={updateFormData} />
      case 3:
        return <Step3Kipper formData={formData} updateFormData={updateFormData} />
      case 4:
        return <Step4ErfahrungOnly formData={formData} updateFormData={updateFormData} />
      case 5:
        return <Step5Location formData={formData} updateFormData={updateFormData} />
      case 6:
        return <Step6Languages formData={formData} updateFormData={updateFormData} />
      case 7:
        return <Step7Kontaktdaten formData={formData} updateFormData={updateFormData} updateCheckboxes={updateCheckboxes} />
      default:
        return <Step1Fuehrerschein formData={formData} updateFormData={updateFormData} />
    }
  }

  const isSubmitEnabled = termsAccepted && consentGiven

  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl modal-shadow mx-auto">
      {/* Header */}
      <div className="p-6 md:p-8 pb-4 relative">
        <button
          onClick={closeModal}
          className="absolute top-6 md:top-8 right-6 md:right-8 text-gray-400 hover:text-gray-600 text-2xl font-light"
        >
          ×
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-dark-gray mb-2">
          Schnelle und einfache Bewerbung!
        </h1>
        <p className="text-dark-gray text-base md:text-lg leading-relaxed md:max-w-4xl">
          Dieses kurze Bewerbungsformular dauert weniger als eine Minute—kein Papierkram erforderlich. 
          Bewerben Sie sich jetzt und starten Sie Ihre Karriere als Fahrer!
        </p>
        
        {/* Separation Line - Desktop Only */}
        <div className="hidden md:block border-b border-gray-200 mt-6 -mx-8"></div>
        
        {/* Progress Bar - Mobile Only */}
        <div className="md:hidden mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            ></div>
          </div>
          <div className="text-right text-gray-500 text-sm mt-1">
            {currentStep}/7
          </div>
        </div>
      </div>

      <div className="md:flex">
        {/* Left Sidebar */}
        <div className="hidden md:block md:w-64 md:p-8 md:pt-0">
          <NavigationSidebar currentStep={currentStep} />
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 md:p-8 pt-0">
          {renderCurrentStep()}
          
          {/* Footer Navigation */}
          {/* Desktop */}
          <div className="hidden md:flex justify-end space-x-4 mt-8">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-3 text-dark-gray hover:text-gray-600 transition-colors"
              >
                Zurück
              </button>
            )}
            {currentStep === 5 ? (
              <button
                onClick={handleSubmitApplication}
                disabled={!isSubmitEnabled}
                className={`px-8 py-3 rounded-lg transition-colors ${
                  isSubmitEnabled
                    ? 'bg-dark-brown text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Bewerbung schicken
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-dark-brown text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Weiter
              </button>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden mt-6">
            {currentStep === 7 ? (
              <button
                onClick={handleSubmitApplication}
                disabled={!isSubmitEnabled}
                className={`w-full px-6 py-4 rounded-lg transition-colors ${
                  isSubmitEnabled
                    ? 'bg-dark-brown text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Bewerbung schicken
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="w-full px-6 py-4 bg-dark-brown text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Weiter
              </button>
            )}
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="w-full text-center text-gray-500 hover:text-gray-700 mt-4"
              >
                Zurück
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 