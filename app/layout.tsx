import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Schnelle und einfache Bewerbung!',
  description: 'Frontend Assessment - Multi-step Application Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-dark-gray min-h-screen">
        {children}
      </body>
    </html>
  )
} 