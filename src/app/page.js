'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Calculator from '@/components/Calculator'
import ResultsDisplay from '@/components/ResultsDisplay'
import { calculateBMR, calculateTDEE, calculateMacros } from '@/utils/macroCalculations'
import ParticlesComponent from '@/components/ParticlesBackground';

export default function Home() {
  const [results, setResults] = useState(null)

  const handleCalculate = (formData) => {
    const { age, gender, height, weight, activityLevel, goal } = formData
    
    const bmr = calculateBMR(
      parseFloat(weight), 
      parseFloat(height), 
      parseInt(age), 
      gender
    )
    
    const tdee = calculateTDEE(bmr, activityLevel)
    const macros = calculateMacros(tdee, goal) // Pass goal to macro calculation

    setResults({ bmr, tdee, macros, goal })
  }

  const handleReset = () => {
    setResults(null)
  }

  return (
    <main className="relative">
      {!results ? (
        <>
          <ParticlesComponent />
          <Header />
          <Calculator onCalculate={handleCalculate} />
        </>
      ) : (
        <ResultsDisplay results={results} onReset={handleReset} />
      )}
    </main>
  )
}
