'use client'

import { FormData } from '../ApplicationForm'
import Image from 'next/image'

interface Step2QualifikationenProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export default function Step2Qualifikationen({ formData, updateFormData }: Step2QualifikationenProps) {
  const handleCraneLicenseChange = (value: boolean) => {
    updateFormData({ hasCraneLicense: value })
  }

  return (
    <div className="space-y-6">
      {/* Question: Crane License */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/certificate.png"
              alt="Certificate icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Besitzt du einen Kranschein?
          </h3>
        </div>
        
        {/* Separation Line - Desktop Only */}
        <div className="hidden md:block border-b border-gray-200 pb-4 mb-4 -mx-6"></div>
        
        <div className="space-y-3 md:space-y-0 md:flex md:space-x-3">
          <label className="block flex-1">
            <input
              type="radio"
              name="craneLicense"
              value="yes"
              checked={formData.hasCraneLicense === true}
              onChange={() => handleCraneLicenseChange(true)}
              className="sr-only"
            />
            <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
              formData.hasCraneLicense === true
                ? 'border-orange bg-white'
                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.hasCraneLicense === true
                    ? 'border-gray-200 bg-black'
                    : 'border-gray-400'
                }`}>
                  {formData.hasCraneLicense === true && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-dark-gray font-medium text-lg">Ja</span>
              </div>
            </div>
          </label>
          
          <label className="block flex-1">
            <input
              type="radio"
              name="craneLicense"
              value="no"
              checked={formData.hasCraneLicense === false}
              onChange={() => handleCraneLicenseChange(false)}
              className="sr-only"
            />
            <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
              formData.hasCraneLicense === false
                ? 'border-orange bg-white'
                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.hasCraneLicense === false
                    ? 'border-gray-200 bg-black'
                    : 'border-gray-400'
                }`}>
                  {formData.hasCraneLicense === false && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-dark-gray font-medium text-lg">Nein</span>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
} 