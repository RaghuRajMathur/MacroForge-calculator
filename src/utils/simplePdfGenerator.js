// Simple PDF generator as fallback - src/utils/simplePdfGenerator.js
import jsPDF from 'jspdf'

export const generateSimplePDF = (results, userData) => {
  try {
    const pdf = new jsPDF()
    const { macros, bmr, goal } = results
    const { age, gender, height, weight } = userData
    
    // Title
    pdf.setFontSize(20)
    pdf.text('MacroForge Results', 20, 30)
    
    // Personal Info
    pdf.setFontSize(12)
    pdf.text(`Age: ${age} | Gender: ${gender} | Height: ${height}cm | Weight: ${weight}kg`, 20, 50)
    
    // Macros
    pdf.text('Daily Macro Targets:', 20, 70)
    pdf.text(`Calories: ${macros.calories || 'N/A'}`, 20, 85)
    pdf.text(`Protein: ${macros.protein}g`, 20, 100)
    pdf.text(`Carbs: ${macros.carbs}g`, 20, 115)
    pdf.text(`Fat: ${macros.fat}g`, 20, 130)
    pdf.text(`BMR: ${Math.round(bmr)} calories`, 20, 150)
    
    // Goal
    pdf.text(`Goal: ${goal}`, 20, 170)
    
    pdf.save('macro-results.pdf')
    return true
  } catch (error) {
    throw error
  }
}
