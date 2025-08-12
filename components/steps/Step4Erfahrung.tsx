'use client'

import Image from 'next/image'

interface Step4ErfahrungProps {
  formData: {
    yearsOfExperience: string
  }
  updateFormData: (updates: { yearsOfExperience: string }) => void
}

export default function Step4Erfahrung({ formData, updateFormData }: Step4ErfahrungProps) {
  const handleExperienceChange = (value: string) => {
    updateFormData({ yearsOfExperience: value })
  }

  const experienceOptions = [
    '0-2 Jahre',
    '3-5 Jahre',
    '+6 Jahre'
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/cake.png"
              alt="Cake icon"
              width={20}
              height={20}
              className="w-4 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Jahre Erfahrung
          </h3>
        </div>

        <div className="space-y-3">
          {experienceOptions.map((option) => (
            <label key={option} className="block w-full">
              <input
                type="radio"
                name="yearsOfExperience"
                checked={formData.yearsOfExperience === option}
                onChange={() => handleExperienceChange(option)}
                className="sr-only"
              />
              <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.yearsOfExperience === option
                  ? 'border-orange bg-white'
                  : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
              }`}>
                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.yearsOfExperience === option
                      ? 'border-gray-200 bg-black'
                      : 'border-gray-400'
                  }`}>
                    {formData.yearsOfExperience === option && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-dark-gray font-medium text-lg">{option}</span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 