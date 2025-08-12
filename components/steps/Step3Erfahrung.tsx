'use client'

import { FormData } from '../ApplicationForm'
import Image from 'next/image'

interface Step3ErfahrungProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export default function Step3Erfahrung({ formData, updateFormData }: Step3ErfahrungProps) {
  const handleTipperChange = (value: boolean) => {
    updateFormData({ canOperateTipper: value })
  }

  const handleExperienceChange = (value: string) => {
    updateFormData({ yearsOfExperience: value })
  }

  return (
    <div className="space-y-6">
      {/* Question 1: Tipper Operation */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/road.png"
              alt="Road icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Kannst du schon einen Kipper bedienen?
          </h3>
        </div>
        
        <div className="flex space-x-3">
          <label className="block flex-1">
            <input
              type="radio"
              name="tipperOperation"
              value="yes"
              checked={formData.canOperateTipper === true}
              onChange={() => handleTipperChange(true)}
              className="sr-only"
            />
            <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
              formData.canOperateTipper === true
                ? 'border-orange bg-white'
                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.canOperateTipper === true
                    ? 'border-gray-200 bg-black'
                    : 'border-gray-400'
                }`}>
                  {formData.canOperateTipper === true && (
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
              name="tipperOperation"
              value="no"
              checked={formData.canOperateTipper === false}
              onChange={() => handleTipperChange(false)}
              className="sr-only"
            />
            <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
              formData.canOperateTipper === false
                ? 'border-orange bg-white'
                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formData.canOperateTipper === false
                    ? 'border-gray-200 bg-black'
                    : 'border-gray-400'
                }`}>
                  {formData.canOperateTipper === false && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-dark-gray font-medium text-lg">Nein</span>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Question 2: Years of Experience */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/cake.png"
              alt="Cake icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Jahre Erfahrung
          </h3>
        </div>
        
        <div className="flex space-x-3">
          {['0-2 Jahre', '3-5 Jahre', '+6 Jahre'].map((experience) => (
            <label key={experience} className="block flex-1">
              <input
                type="radio"
                name="experience"
                value={experience}
                checked={formData.yearsOfExperience === experience}
                onChange={() => handleExperienceChange(experience)}
                className="sr-only"
              />
              <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.yearsOfExperience === experience
                  ? 'border-orange bg-white'
                  : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.yearsOfExperience === experience
                      ? 'border-gray-200 bg-black'
                      : 'border-gray-400'
                    }`}>
                    {formData.yearsOfExperience === experience && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-dark-gray font-medium text-lg">{experience}</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 