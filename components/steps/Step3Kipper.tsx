'use client'

import Image from 'next/image'

interface Step3KipperProps {
  formData: {
    canOperateTipper: boolean | null
  }
  updateFormData: (updates: { canOperateTipper: boolean | null }) => void
}

export default function Step3Kipper({ formData, updateFormData }: Step3KipperProps) {
  const handleTipperChange = (value: boolean) => {
    updateFormData({ canOperateTipper: value })
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/road.png"
              alt="Road icon"
              width={20}
              height={20}
              className="w-4 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Kannst du schon einen Kipper bedienen?
          </h3>
        </div>

        <div className="space-y-3">
          {[
            { value: true, label: 'Ja' },
            { value: false, label: 'Nein' }
          ].map((option) => (
            <label key={option.label} className="block w-full">
              <input
                type="radio"
                name="canOperateTipper"
                checked={formData.canOperateTipper === option.value}
                onChange={() => handleTipperChange(option.value)}
                className="sr-only"
              />
              <div className={`w-full px-6 py-4 rounded-lg border-2 cursor-pointer transition-colors ${
                formData.canOperateTipper === option.value
                  ? 'border-orange bg-white'
                  : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
              }`}>
                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    formData.canOperateTipper === option.value
                      ? 'border-gray-200 bg-black'
                      : 'border-gray-400'
                  }`}>
                    {formData.canOperateTipper === option.value && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-dark-gray font-medium text-lg">
                    {option.label}
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 