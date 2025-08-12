'use client'

import { FormData } from '../ApplicationForm'
import Image from 'next/image'

interface Step2LicensesProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export default function Step2Licenses({ formData, updateFormData }: Step2LicensesProps) {
  const handleLicenseChange = (license: string) => {
    const newLicenses = formData.licenses.includes(license)
      ? formData.licenses.filter(l => l !== license)
      : [...formData.licenses, license]
    updateFormData({ licenses: newLicenses })
  }

  return (
    <div className="space-y-6">
      {/* License Types */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/lock.png"
              alt="Lock icon"
              width={20}
              height={20}
              className="w-4 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Welche Führerscheine besitzt du?
          </h3>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {['B', 'CE', 'C1E', 'C1', 'D', 'DE'].map((license) => (
            <label key={license} className="block w-full">
              <input
                type="checkbox"
                checked={formData.licenses.includes(license)}
                onChange={() => handleLicenseChange(license)}
                className="sr-only"
              />
              <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.licenses.includes(license)
                  ? 'border-orange bg-white'
                  : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
              }`}>
                <div className="flex items-center justify-start space-x-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    formData.licenses.includes(license)
                      ? 'border-gray-200 bg-black'
                      : 'border-gray-400'
                  }`}>
                    {formData.licenses.includes(license) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-dark-gray font-medium text-lg">{license}</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 