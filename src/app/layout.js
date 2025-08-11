import './globals.css'

export const metadata = {
  title: 'MacroForge - AI-Powered Nutrition Calculator',
  description: 'Transform your fitness journey with precision-engineered nutrition science. Calculate your perfect daily macros instantly.',
  keywords: 'macro calculator, nutrition, fitness, calories, protein, carbs, fat',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'MacroForge - AI-Powered Nutrition Calculator',
    description: 'Calculate your perfect daily macros with our advanced nutrition calculator',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
