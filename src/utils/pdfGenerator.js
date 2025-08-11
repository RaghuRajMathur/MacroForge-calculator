import jsPDF from 'jspdf'

export const generateResultsPDF = async (results, userData) => {
  try {
    const { tdee, macros, bmr, goal } = results
    const { age, gender, height, weight, activityLevel } = userData

    // Create new PDF document
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    
    // Helper function to add header
    const addHeader = () => {
      // Header background
      pdf.setFillColor(107, 70, 193)
      pdf.rect(0, 0, pageWidth, 40, 'F')
      
      // Logo/Title
      pdf.setTextColor(255, 255, 255)
      pdf.setFontSize(24)
      pdf.setFont('helvetica', 'bold')
      pdf.text('MacroForge Calculator', 20, 25)
      
      // Subtitle
      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'normal')
      pdf.text('Your Personalized Macro & Nutrition Plan', 20, 32)
    }

    // Helper function to add footer
    const addFooter = (pageNum) => {
      pdf.setTextColor(128, 128, 128)
      pdf.setFontSize(10)
      pdf.text(`Generated on ${new Date().toLocaleDateString()}`, 20, pageHeight - 10)
      pdf.text(`Page ${pageNum}`, pageWidth - 30, pageHeight - 10)
    }

    // Page 1: Personal Info & Macro Results
    addHeader()
    
    let yPosition = 60
    
    // Personal Information Section
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Personal Information', 20, yPosition)
    
    yPosition += 15
    pdf.setFontSize(11)
    pdf.setFont('helvetica', 'normal')
    
    const personalInfo = [
      [`Age: ${age} years`, `Gender: ${gender.charAt(0).toUpperCase() + gender.slice(1)}`],
      [`Height: ${height} cm`, `Weight: ${weight} kg`],
      [`Activity Level: ${getActivityLevelText(activityLevel)}`, `Goal: ${getGoalText(goal)}`]
    ]
    
    personalInfo.forEach(row => {
      pdf.text(row[0], 20, yPosition)
      pdf.text(row[1], 110, yPosition)
      yPosition += 8
    })

    yPosition += 10

    // Macro Results Section
    pdf.setFillColor(243, 244, 246)
    pdf.rect(15, yPosition - 5, pageWidth - 30, 60, 'F')
    
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Your Daily Macro Targets', 20, yPosition + 10)
    
    yPosition += 25
    
    // Macro boxes
    const macroData = [
      { label: 'Calories', value: `${macros.calories || tdee}`, unit: 'kcal', color: [239, 68, 68] },
      { label: 'Protein', value: `${macros.protein}`, unit: 'g', color: [59, 130, 246] },
      { label: 'Carbs', value: `${macros.carbs}`, unit: 'g', color: [16, 185, 129] },
      { label: 'Fat', value: `${macros.fat}`, unit: 'g', color: [245, 158, 11] }
    ]
    
    const boxWidth = 35
    const boxHeight = 25
    let xPosition = 25
    
    macroData.forEach(macro => {
      // Colored box
      pdf.setFillColor(...macro.color)
      pdf.rect(xPosition, yPosition, boxWidth, boxHeight, 'F')
      
      // White text
      pdf.setTextColor(255, 255, 255)
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text(macro.value, xPosition + boxWidth/2, yPosition + 12, { align: 'center' })
      pdf.setFontSize(8)
      pdf.text(macro.unit, xPosition + boxWidth/2, yPosition + 18, { align: 'center' })
      
      // Label below
      pdf.setTextColor(31, 41, 55)
      pdf.setFontSize(10)
      pdf.setFont('helvetica', 'normal')
      pdf.text(macro.label, xPosition + boxWidth/2, yPosition + 32, { align: 'center' })
      
      xPosition += boxWidth + 10
    })

    yPosition += 50

    // BMR Information
    pdf.setTextColor(107, 70, 193)
    pdf.setFontSize(16)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Basal Metabolic Rate (BMR)', 20, yPosition)
    
    yPosition += 10
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(24)
    pdf.text(`${Math.round(bmr)} calories`, 20, yPosition)
    
    yPosition += 8
    pdf.setFontSize(10)
    pdf.setTextColor(107, 114, 128)
    pdf.text('Calories burned at rest', 20, yPosition)

    yPosition += 20

    // Goal Information
    const goalInfo = getGoalInfo(goal)
    pdf.setFillColor(107, 70, 193, 0.1)
    pdf.rect(15, yPosition, pageWidth - 30, 35, 'F')
    
    pdf.setTextColor(107, 70, 193)
    pdf.setFontSize(14)
    pdf.setFont('helvetica', 'bold')
    pdf.text(goalInfo.title, 20, yPosition + 12)
    
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    
    // Split long text into multiple lines
    const splitText = pdf.splitTextToSize(goalInfo.description, pageWidth - 50)
    pdf.text(splitText, 20, yPosition + 22)
    pdf.text(`Expected: ${goalInfo.expectedResult}`, 20, yPosition + 30)

    addFooter(1)

    // Page 2: Workout Plan
    pdf.addPage()
    addHeader()
    
    yPosition = 60
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(20)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Your Workout Plan', 20, yPosition)
    
    yPosition += 15
    const workoutPlan = getWorkoutPlan(goal)
    
    pdf.setFontSize(12)
    pdf.setFont('helvetica', 'normal')
    const workoutDesc = pdf.splitTextToSize(workoutPlan.description, pageWidth - 40)
    pdf.text(workoutDesc, 20, yPosition)
    
    yPosition += 20
    
    // Workout details
    pdf.setFillColor(243, 244, 246)
    pdf.rect(15, yPosition - 5, pageWidth - 30, 25, 'F')
    
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(11)
    pdf.setFont('helvetica', 'bold')
    pdf.text(`Frequency: ${workoutPlan.frequency}`, 20, yPosition + 7)
    pdf.text(`Duration: ${workoutPlan.duration}`, 20, yPosition + 15)
    
    yPosition += 35

    // Sample workout days (first 3 days)
    workoutPlan.plan.slice(0, 3).forEach((day, index) => {
      if (yPosition > pageHeight - 60) {
        pdf.addPage()
        addHeader()
        yPosition = 60
      }
      
      pdf.setTextColor(107, 70, 193)
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text(`${day.day}: ${day.title}`, 20, yPosition)
      
      yPosition += 10
      
      // First 4 exercises
      day.exercises.slice(0, 4).forEach(exercise => {
        pdf.setTextColor(31, 41, 55)
        pdf.setFontSize(10)
        pdf.setFont('helvetica', 'normal')
        pdf.text(`• ${exercise.name}: ${exercise.details}`, 25, yPosition)
        yPosition += 6
      })
      
      yPosition += 8
    })

    addFooter(2)

    // Page 3: Diet Plan
    pdf.addPage()
    addHeader()
    
    yPosition = 60
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(20)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Your Diet Plan', 20, yPosition)
    
    yPosition += 15
    
    // Calorie deficit/surplus info
    const deficitInfo = getDeficitInfo(goal)
    pdf.setFillColor(16, 185, 129, 0.1)
    pdf.rect(15, yPosition, pageWidth - 30, 30, 'F')
    
    pdf.setTextColor(16, 185, 129)
    pdf.setFontSize(14)
    pdf.setFont('helvetica', 'bold')
    pdf.text(deficitInfo.title, 20, yPosition + 12)
    
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    const dietDesc = pdf.splitTextToSize(deficitInfo.description, pageWidth - 50)
    pdf.text(dietDesc, 20, yPosition + 22)
    
    yPosition += 45

    // Sample meal plan
    const sampleMeals = [
      { meal: 'Breakfast', calories: Math.round((macros.calories || tdee) * 0.25), foods: ['Oats with berries', 'Greek yogurt', 'Almonds'] },
      { meal: 'Lunch', calories: Math.round((macros.calories || tdee) * 0.35), foods: ['Grilled protein', 'Brown rice', 'Vegetables'] },
      { meal: 'Dinner', calories: Math.round((macros.calories || tdee) * 0.3), foods: ['Lean protein', 'Quinoa', 'Salad'] },
      { meal: 'Snacks', calories: Math.round((macros.calories || tdee) * 0.1), foods: ['Fruits', 'Nuts', 'Protein shake'] }
    ]
    
    sampleMeals.forEach(meal => {
      pdf.setTextColor(107, 70, 193)
      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'bold')
      pdf.text(`${meal.meal} (${meal.calories} kcal)`, 20, yPosition)
      
      yPosition += 8
      pdf.setTextColor(31, 41, 55)
      pdf.setFontSize(10)
      pdf.setFont('helvetica', 'normal')
      
      meal.foods.forEach(food => {
        pdf.text(`• ${food}`, 25, yPosition)
        yPosition += 6
      })
      
      yPosition += 8
    })

    addFooter(3)

    // Generate filename
    const filename = `MacroForge-Plan-${new Date().toISOString().split('T')[0]}.pdf`
    
    // Save the PDF
    pdf.save(filename)
    
    return true // Return success
    
  } catch (error) {
    console.error('PDF Generation Error:', error)
    throw new Error(`PDF generation failed: ${error.message}`)
  }
}

// Helper functions
const getActivityLevelText = (level) => {
  const levels = {
    sedentary: 'Sedentary (Little exercise)',
    light: 'Lightly Active (1-3 days/week)',
    moderate: 'Moderately Active (3-5 days/week)',
    active: 'Very Active (6-7 days/week)',
    veryActive: 'Extremely Active (2x/day)'
  }
  return levels[level] || level
}

const getGoalText = (goal) => {
  const goals = {
    lose: 'Weight Loss',
    maintain: 'Maintain Weight',
    gain: 'Muscle Gain'
  }
  return goals[goal] || goal
}

const getGoalInfo = (goal) => {
  const info = {
    lose: {
      title: 'Weight Loss Plan',
      description: '500 calorie deficit for sustainable fat loss',
      expectedResult: '0.5-1 kg per week'
    },
    maintain: {
      title: 'Maintenance Plan',
      description: 'Balanced nutrition for current weight',
      expectedResult: 'Maintain current weight'
    },
    gain: {
      title: 'Muscle Gain Plan',
      description: '400 calorie surplus for lean muscle gain',
      expectedResult: '0.25-0.5 kg per week'
    }
  }
  return info[goal] || info.maintain
}

const getDeficitInfo = (goal) => {
  return {
    lose: {
      title: 'Daily Calorie Deficit: 500 calories',
      description: 'This deficit will help you lose weight safely at 0.5-1kg per week'
    },
    maintain: {
      title: 'Maintenance Calories',
      description: 'These calories will help you maintain your current weight'
    },
    gain: {
      title: 'Daily Calorie Surplus: 400 calories',
      description: 'This surplus will help you gain lean muscle at 0.25-0.5kg per week'
    }
  }[goal] || { title: 'Maintenance Calories', description: 'Balanced nutrition plan' }
}

const getWorkoutPlan = (goal) => {
  const plans = {
    lose: {
      description: 'High-intensity training for maximum calorie burn and fat loss',
      frequency: '5-6 days per week',
      duration: '45-60 minutes',
      plan: [
        {
          day: 'Day 1',
          title: 'Full Body HIIT',
          exercises: [
            { name: 'Burpees', details: '3 sets × 12 reps' },
            { name: 'Push-ups', details: '3 sets × 15 reps' },
            { name: 'Squats', details: '3 sets × 20 reps' },
            { name: 'Mountain Climbers', details: '3 sets × 30 seconds' }
          ]
        },
        {
          day: 'Day 2',
          title: 'Cardio + Core',
          exercises: [
            { name: 'Running', details: '30-40 minutes' },
            { name: 'Russian Twists', details: '3 sets × 20 reps' },
            { name: 'Plank', details: '3 sets × 45 seconds' },
            { name: 'Bicycle Crunches', details: '3 sets × 20 reps' }
          ]
        },
        {
          day: 'Day 3',
          title: 'Upper Body',
          exercises: [
            { name: 'Push-ups', details: '4 sets × 12 reps' },
            { name: 'Pull-ups', details: '3 sets × 8 reps' },
            { name: 'Pike Push-ups', details: '3 sets × 10 reps' },
            { name: 'Tricep Dips', details: '3 sets × 12 reps' }
          ]
        }
      ]
    },
    maintain: {
      description: 'Balanced training for overall fitness and health',
      frequency: '4-5 days per week',
      duration: '45-60 minutes',
      plan: [
        {
          day: 'Day 1',
          title: 'Upper Body',
          exercises: [
            { name: 'Push-ups', details: '3 sets × 12 reps' },
            { name: 'Pull-ups', details: '3 sets × 8 reps' },
            { name: 'Shoulder Press', details: '3 sets × 12 reps' },
            { name: 'Bicep Curls', details: '3 sets × 12 reps' }
          ]
        },
        {
          day: 'Day 2',
          title: 'Lower Body',
          exercises: [
            { name: 'Squats', details: '4 sets × 15 reps' },
            { name: 'Lunges', details: '3 sets × 12 each leg' },
            { name: 'Calf Raises', details: '3 sets × 15 reps' },
            { name: 'Glute Bridges', details: '3 sets × 15 reps' }
          ]
        },
        {
          day: 'Day 3',
          title: 'Cardio',
          exercises: [
            { name: 'Moderate Cardio', details: '30-40 minutes' },
            { name: 'Core Work', details: '15 minutes' },
            { name: 'Stretching', details: '10 minutes' },
            { name: 'Foam Rolling', details: '5 minutes' }
          ]
        }
      ]
    },
    gain: {
      description: 'Strength-focused training for maximum muscle growth',
      frequency: '5-6 days per week',
      duration: '60-75 minutes',
      plan: [
        {
          day: 'Day 1',
          title: 'Push (Chest, Shoulders, Triceps)',
          exercises: [
            { name: 'Push-ups', details: '4 sets × 8-12 reps' },
            { name: 'Pike Push-ups', details: '4 sets × 10 reps' },
            { name: 'Dips', details: '3 sets × 10-15 reps' },
            { name: 'Tricep Extensions', details: '3 sets × 12 reps' }
          ]
        },
        {
          day: 'Day 2',
          title: 'Pull (Back, Biceps)',
          exercises: [
            { name: 'Pull-ups', details: '4 sets × 6-10 reps' },
            { name: 'Rows', details: '4 sets × 8-12 reps' },
            { name: 'Bicep Curls', details: '4 sets × 10-12 reps' },
            { name: 'Hammer Curls', details: '3 sets × 12 reps' }
          ]
        },
        {
          day: 'Day 3',
          title: 'Legs',
          exercises: [
            { name: 'Squats', details: '4 sets × 8-12 reps' },
            { name: 'Romanian Deadlifts', details: '4 sets × 10-12 reps' },
            { name: 'Bulgarian Split Squats', details: '3 sets × 12 each leg' },
            { name: 'Calf Raises', details: '4 sets × 15-20 reps' }
          ]
        }
      ]
    }
  }
  return plans[goal] || plans.maintain
}
