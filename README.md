# Frontend Assessment - Multi-Step Application Form

A React Next.js TypeScript application that replicates the exact design from the provided screenshots. This is a multi-step application form for driver job applications with a modern, responsive UI.

## Features

- **5-Step Application Process:**
  1. **Führerschein** (Driver's License) - Class C license and license types selection
  2. **Qualifikationen** (Qualifications) - Crane license question
  3. **Erfahrung** (Experience) - Tipper operation and years of experience
  4. **Über Dich** (About You) - Location and languages with pre-filled values
  5. **Kontaktdaten** (Contact Details) - Personal and contact information

- **Interactive UI Elements:**
  - Custom radio buttons and checkboxes with orange highlighting
  - Progress sidebar with checkmarks for completed steps
  - Responsive design with Tailwind CSS
  - German language interface
  - Pre-filled form data matching the screenshots

- **Modern Design:**
  - Clean white modal on dark gray background
  - Subtle shadows and rounded corners
  - Inter font family
  - Consistent color scheme (orange, dark brown, gray)

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **State Management:** React useState hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ApplicationForm.tsx  # Main form container and state management
│   ├── NavigationSidebar.tsx # Left sidebar with progress steps
│   └── steps/               # Individual step components
│       ├── Step1Fuehrerschein.tsx
│       ├── Step2Qualifikationen.tsx
│       ├── Step3Erfahrung.tsx
│       ├── Step4UeberDich.tsx
│       └── Step5Kontaktdaten.tsx
├── tailwind.config.js       # Tailwind configuration with custom colors
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Form Data Structure

The application maintains form state across all steps:

```typescript
export type FormData = {
  // Step 1: Führerschein
  hasClassCLicense: boolean | null
  licenses: string[]
  
  // Step 2: Qualifikationen
  hasCraneLicense: boolean | null
  
  // Step 3: Erfahrung
  canOperateTipper: boolean | null
  yearsOfExperience: string
  
  // Step 4: Über Dich
  location: string
  languages: string[]
  
  // Step 5: Kontaktdaten
  firstName: string
  lastName: string
  email: string
  phone: string
}
```

## Customization

### Colors
The color scheme can be modified in `tailwind.config.js`:

```javascript
colors: {
  'dark-gray': '#2D3748',
  'light-orange': '#FED7AA',
  'orange': '#F97316',
  'dark-brown': '#1F2937',
  'light-gray': '#E2E8F0',
  'green': '#10B981',
}
```

### Styling
All components use Tailwind CSS classes and can be easily customized by modifying the className props.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for assessment purposes. 