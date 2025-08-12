/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2D3748',
        'light-orange': '#FED7AA',
        'orange': '#F97316',
        'dark-brown': '#1F2937',
        'light-gray': '#E2E8F0',
        'green': '#10B981',
      },
      fontFamily: {
        sans: ['Metropolis', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 