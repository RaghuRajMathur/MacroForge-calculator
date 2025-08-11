// BMR calculation using Mifflin-St Jeor Equation
export const calculateBMR = (weight, height, age, gender) => {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161
  }
}

// Activity multipliers
export const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9
}

// Calculate total daily energy expenditure
export const calculateTDEE = (bmr, activityLevel) => {
  return Math.round(bmr * activityMultipliers[activityLevel])
}

// Calculate macros based on goal
export const calculateMacros = (tdee, goal = 'maintain') => {
  let adjustedCalories = tdee
  
  // Adjust calories based on goal
  switch (goal) {
    case 'lose':
      adjustedCalories = Math.round(tdee * 0.8) // 20% deficit
      break
    case 'gain':
      adjustedCalories = Math.round(tdee * 1.15) // 15% surplus
      break
    default: // maintain
      adjustedCalories = tdee
  }
  
  // Macro ratios: protein: 25%, carbs: 45%, fat: 30%
  const protein = Math.round((adjustedCalories * 0.25) / 4) // 4 calories per gram
  const carbs = Math.round((adjustedCalories * 0.45) / 4)   // 4 calories per gram
  const fat = Math.round((adjustedCalories * 0.30) / 9)     // 9 calories per gram
  
  return { protein, carbs, fat, calories: adjustedCalories }
}
