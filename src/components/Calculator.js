'use client'

import { useState } from 'react'
import { User, Ruler, Weight, Activity, Calculator as CalculatorIcon, Target } from 'lucide-react'
import styles from '@/styles/Calculator.module.css'
import sharedStyles from '@/styles/shared.module.css'

const Calculator = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    activityLevel: 'moderate',
    goal: 'maintain',
    bodyFat: ''
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    const ageNum = parseInt(formData.age)
    const heightNum = parseInt(formData.height)
    const weightNum = parseInt(formData.weight)
    
    if (!formData.age || isNaN(ageNum) || ageNum < 15 || ageNum > 100) {
      newErrors.age = 'Please enter a valid age between 15-100'
    }
    if (!formData.height || isNaN(heightNum) || heightNum < 100 || heightNum > 250) {
      newErrors.height = 'Please enter a valid height between 100-250 cm'
    }
    if (!formData.weight || isNaN(weightNum) || weightNum < 30 || weightNum > 300) {
      newErrors.weight = 'Please enter a valid weight between 30-300 kg'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm() && onCalculate) {
      const processedData = {
        ...formData,
        age: parseInt(formData.age),
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        bodyFat: formData.bodyFat ? parseInt(formData.bodyFat) : null
      }
      onCalculate(processedData)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const goals = [
    { value: 'lose', label: 'Lose Weight', desc: 'Create a calorie deficit to lose fat', color: 'red' },
    { value: 'maintain', label: 'Maintain Weight', desc: 'Maintain current weight and body composition', color: 'blue' },
    { value: 'gain', label: 'Gain Weight', desc: 'Create a calorie surplus to build muscle', color: 'green' }
  ]

  const activityLevels = [
    { 
      value: 'sedentary', 
      label: 'Sedentary', 
      desc: 'Little or no exercise',
      multiplier: '1.2x BMR',
      detail: 'Desk job with little physical activity'
    },
    { 
      value: 'light', 
      label: 'Lightly Active', 
      desc: 'Light exercise 1-3 days/week',
      multiplier: '1.375x BMR',
      detail: 'Light workout or sports 1-3 days/week'
    },
    { 
      value: 'moderate', 
      label: 'Moderately Active', 
      desc: 'Moderate exercise 3-5 days/week',
      multiplier: '1.55x BMR',
      detail: 'Moderate workout or sports 3-5 days/week'
    },
    { 
      value: 'active', 
      label: 'Very Active', 
      desc: 'Hard exercise 6-7 days/week',
      multiplier: '1.725x BMR',
      detail: 'Hard workout or sports 6-7 days/week'
    },
    { 
      value: 'veryActive', 
      label: 'Extremely Active', 
      desc: 'Very hard exercise, physical job',
      multiplier: '1.9x BMR',
      detail: 'Very hard exercise + physical job or 2x training'
    }
  ]

  const formFields = [
    { name: 'age', label: 'Age', placeholder: '25', type: 'number', unit: 'years' },
    { name: 'height', label: 'Height', placeholder: '175', type: 'number', unit: 'cm' },
    { name: 'weight', label: 'Weight', placeholder: '70', type: 'number', unit: 'kg' }
  ]

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculatorContent}>
        <div className={styles.calculatorCard}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Macro Calculator</h2>
            <p className={styles.formSubtitle}>
              {/* ✅ FIXED: Replaced ' with &apos; */}
              Enter your details below and we&apos;ll calculate your personalized macro and calorie targets
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Personal Information */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <User className={`w-5 h-5 ${styles.sectionIcon}`} />
                Personal Information
              </h3>
              
              <div className={styles.personalInfoGrid}>
                {formFields.map((field) => (
                  <div key={field.name} className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>
                      {field.label}
                      <span className={styles.unitText}>({field.unit})</span>
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={sharedStyles.input}
                      placeholder={field.placeholder}
                    />
                    {errors[field.name] && (
                      <span className={sharedStyles.error}>{errors[field.name]}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Height and Weight Row */}
              <div className={styles.personalInfoGrid}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={sharedStyles.input}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>
                    Body Fat <span className={styles.optionalText}>(optional)</span>
                  </label>
                  <input
                    type="number"
                    name="bodyFat"
                    value={formData.bodyFat}
                    onChange={handleChange}
                    className={sharedStyles.input}
                    placeholder="15"
                    min="5"
                    max="50"
                  />
                </div>

                <div className={styles.fieldGroup}>
                  {/* Empty div for layout spacing */}
                </div>
              </div>
            </div>

            {/* Goal Selection */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Target className={`w-5 h-5 ${styles.sectionIcon}`} />
                My Primary Goal Is
              </h3>
              <div className={styles.goalGrid}>
                {goals.map((goal) => (
                  <label
                    key={goal.value}
                    className={`${styles.goalCard} ${
                      formData.goal === goal.value ? styles.selected : ''
                    } ${styles[`goal${goal.color}`]}`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={goal.value}
                      checked={formData.goal === goal.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={styles.goalHeader}>
                      <div className={`${styles.goalIcon} ${styles[`icon${goal.color}`]}`}>
                        {goal.value === 'lose' && '📉'}
                        {goal.value === 'maintain' && '⚖️'}
                        {goal.value === 'gain' && '📈'}
                      </div>
                      <div className={styles.goalLabel}>{goal.label}</div>
                    </div>
                    <div className={styles.goalDesc}>{goal.desc}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Activity Level */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Activity className={`w-5 h-5 ${styles.sectionIcon}`} />
                Activity Level
              </h3>
              <div className={styles.activityGrid}>
                {activityLevels.map((activity) => (
                  <label
                    key={activity.value}
                    className={`${styles.activityCard} ${
                      formData.activityLevel === activity.value ? styles.selected : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="activityLevel"
                      value={activity.value}
                      checked={formData.activityLevel === activity.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={styles.activityHeader}>
                      <div className={styles.activityLabel}>{activity.label}</div>
                      <div className={styles.activityMultiplier}>{activity.multiplier}</div>
                    </div>
                    <div className={styles.activityDesc}>{activity.desc}</div>
                    <div className={styles.activityDetail}>{activity.detail}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className={styles.submitSection}>
              <button
                type="submit"
                className={styles.submitButton}
              >
                <CalculatorIcon className="w-5 h-5" />
                Calculate My Macros
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Calculator
