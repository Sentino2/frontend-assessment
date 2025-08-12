'use client'

import Image from 'next/image'

interface NavigationSidebarProps {
  currentStep: number
}

export default function NavigationSidebar({ currentStep }: NavigationSidebarProps) {
  const steps = [
    { id: 1, title: 'Führerschein', completed: currentStep > 1 },
    { id: 2, title: 'Qualifikationen', completed: currentStep > 2 },
    { id: 3, title: 'Erfahrung', completed: currentStep > 3 },
    { id: 4, title: 'Über Dich', completed: currentStep > 4 },
    { id: 5, title: 'Kontaktdaten', completed: currentStep > 5 }
  ]

  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            step.id === currentStep
              ? 'bg-light-orange text-dark-gray'
              : step.completed
              ? 'text-green-600'
              : 'text-gray-500'
          }`}
        >
          {step.completed ? (
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <Image
                src="/icons/tick.png"
                alt="Completed step"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
          ) : (
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
          )}
          <span className={`font-medium ${step.id === currentStep ? 'font-semibold' : ''}`}>
            {step.title}
          </span>
        </div>
      ))}
    </div>
  )
} 