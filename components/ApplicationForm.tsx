'use client'

import { useState } from 'react'
import Step1Fuehrerschein from './steps/Step1Fuehrerschein'
import Step2Qualifikationen from './steps/Step2Qualifikationen'
import Step3Erfahrung from './steps/Step3Erfahrung'
import Step4UeberDich from './steps/Step4UeberDich'
import Step5Kontaktdaten from './steps/Step5Kontaktdaten'
import NavigationSidebar from './NavigationSidebar'

export type FormData = {
  // Step 1: Führerschein
  hasClassCLicense: boolean | null
  licenses: string[]
  
  // Step 2: Qualifikationen
  hasCraneLicense: boolean | null
  
  // Step 3: Erfahrung
  canOperateTipper: boolean | null
  yearsOfExperience: string
  
  // Step 4: Über Dich
  location: string
  languages: string[]
  
  // Step 5: Kontaktdaten
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
  location: '78166, Donaueschingen',
  languages: ['Deutsch', 'Polnisch'],
  firstName: 'Paul',
  lastName: 'Neuer',
  email: 'p.neuer@email.de',
  phone: '012-3456789'
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
    if (currentStep < 5) {
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
    switch (currentStep) {
      case 1:
        return <Step1Fuehrerschein formData={formData} updateFormData={updateFormData} />
      case 2:
        return <Step2Qualifikationen formData={formData} updateFormData={updateFormData} />
      case 3:
        return <Step3Erfahrung formData={formData} updateFormData={updateFormData} />
      case 4:
        return <Step4UeberDich formData={formData} updateFormData={updateFormData} />
      case 5:
        return <Step5Kontaktdaten formData={formData} updateFormData={updateFormData} updateCheckboxes={updateCheckboxes} />
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
            {currentStep === 5 ? (
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