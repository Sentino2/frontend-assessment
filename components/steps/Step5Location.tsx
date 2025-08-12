'use client'

import Image from 'next/image'

interface Step5LocationProps {
  formData: {
    location: string
  }
  updateFormData: (updates: { location: string }) => void
}

export default function Step5Location({ formData, updateFormData }: Step5LocationProps) {
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ location: e.target.value })
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/location.png"
              alt="Location icon"
              width={20}
              height={20}
              className="w-4 h-5"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Wo wohnst Du?
          </h3>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ort
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={handleLocationChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
              placeholder="Ort eingeben"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 