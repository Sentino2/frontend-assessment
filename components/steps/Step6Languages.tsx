'use client'

import { FormData } from '../ApplicationForm'
import Image from 'next/image'
import { useState } from 'react'

interface Step6LanguagesProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export default function Step6Languages({ formData, updateFormData }: Step6LanguagesProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  
  const availableLanguages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pl', name: 'Polnisch', flag: '🇵🇱' },
    { code: 'fr', name: 'Französisch', flag: '🇫🇷' },
    { code: 'it', name: 'Italienisch', flag: '🇮🇹' },
    { code: 'en', name: 'Englisch', flag: '🇬🇧' },
    { code: 'es', name: 'Spanisch', flag: '🇪🇸' },
    { code: 'ru', name: 'Russisch', flag: '🇷🇺' },
    { code: 'pt', name: 'Portugiesisch', flag: '🇵🇹' },
    { code: 'nl', name: 'Niederländisch', flag: '🇳🇱' },
    { code: 'sv', name: 'Schwedisch', flag: '🇸🇪' },
    { code: 'no', name: 'Norwegisch', flag: '🇳🇴' },
    { code: 'da', name: 'Dänisch', flag: '🇩🇰' },
    { code: 'fi', name: 'Finnisch', flag: '🇫🇮' },
    { code: 'cs', name: 'Tschechisch', flag: '🇨🇿' },
    { code: 'hu', name: 'Ungarisch', flag: '🇭🇺' },
    { code: 'ro', name: 'Rumänisch', flag: '🇷🇴' }
  ]

  const handleLanguageAdd = (language: string) => {
    if (!formData.languages.includes(language)) {
      const newLanguages = [...formData.languages, language]
      updateFormData({ languages: newLanguages })
    }
    setIsLanguageDropdownOpen(false)
  }

  const handleLanguageRemove = (language: string) => {
    const newLanguages = formData.languages.filter(l => l !== language)
    updateFormData({ languages: newLanguages })
  }

  const getFlagIcon = (language: string) => {
    const langData = availableLanguages.find(l => l.name === language)
    return langData ? langData.flag : '🌐'
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  return (
    <div className="space-y-6">
      {/* Languages Input */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-start space-x-3 mb-2">
          <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            <Image
              src="/icons/message-bubble.png"
              alt="Message bubble icon"
              width={20}
              height={20}
              className="w-4 h-4"
            />
          </div>
          <h3 className="text-lg font-semibold text-dark-gray">
            Welche Sprachen kannst Du sprechen?
          </h3>
        </div>
        
        {/* Division Line after header */}
        <div className="border-t border-gray-200 mb-4 -mx-4"></div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sprachen
          </label>
          <div className="relative">
            <div 
              className="min-h-[48px] px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-orange focus-within:border-orange transition-colors cursor-pointer"
              onClick={toggleLanguageDropdown}
            >
              <div className="flex flex-wrap gap-2">
                {formData.languages.map((language) => (
                  <div
                    key={language}
                    className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded-lg"
                  >
                    <span className="text-sm">{getFlagIcon(language)}</span>
                    <span className="text-sm font-medium">{language}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLanguageRemove(language)
                      }}
                      className="text-gray-500 hover:text-gray-700 ml-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
                {formData.languages.length === 0 && (
                  <span className="text-gray-400 text-sm">Sprachen auswählen...</span>
                )}
              </div>
            </div>
            
            {/* Dropdown Arrow */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Language Dropdown with Scroll */}
            {isLanguageDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {availableLanguages.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => handleLanguageAdd(language.name)}
                      disabled={formData.languages.includes(language.name)}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 border-b border-gray-100 last:border-b-0 ${
                        formData.languages.includes(language.name) 
                          ? 'bg-gray-100 text-gray-500' 
                          : 'text-gray-800'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                      {formData.languages.includes(language.name) && (
                        <svg className="w-4 h-4 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 