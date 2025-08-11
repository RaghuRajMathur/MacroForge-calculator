# MacroForge - Professional Macro Calculator

A comprehensive, responsive macro calculator built with Next.js that provides personalized nutrition plans, workout routines, and PDF reports for fitness enthusiasts.

***

## 🚀 Features

### Core Functionality
- **Advanced Macro Calculations**: Uses Mifflin-St Jeor equation for accurate BMR calculations
- **Goal-Based Planning**: Customized plans for weight loss, maintenance, and muscle gain
- **Activity Level Integration**: 5 different activity levels with precise TDEE calculations
- **Interactive Charts**: Visual macro breakdown using Recharts pie charts

### User Experience
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Professional UI**: MacrosInc-inspired design with modern gradients and animations
- **Tab-Based Navigation**: Overview, Workout Plan, and Diet Plan sections
- **Progress Tracking**: Built-in tips and macro timing recommendations

### Export & Sharing
- **PDF Generation**: Complete 3-page reports with personal info, macros, workout, and diet plans
- **Print Functionality**: Optimized print styles for offline use
- **Download Reports**: Professional PDF documents with branding

### Technical Features
- **Next.js 14**: Built with App Router and React Server Components
- **TypeScript Ready**: Fully typed components and utilities
- **ESLint Compliant**: Clean, error-free code following best practices
- **Performance Optimized**: Lazy loading, optimized images, and minimal bundle size

***

## 🛠 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | Framework with App Router |
| **CSS Modules** | Styling with responsive design |
| **Recharts** | Interactive data visualization |
| **jsPDF** | Client-side PDF creation |
| **Lucide React** | Consistent iconography |
| **Vercel** | Deployment with automatic deployments |

***

## 📦 Installation

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/MacroForge-calculator.git
cd macro-calculator-nextjs
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```

### 4. Open your browser:
Navigate to [http://localhost:3000](http://localhost:3000)

***

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.js           # Root layout with metadata
│   └── page.js             # Main page component
├── components/
│   ├── Calculator.js       # Main calculator form
│   ├── Header.js           # Landing header section
│   ├── ResultsDisplay.js   # Results with tabs and charts
│   ├── MacroChart.js       # Interactive pie chart
│   ├── WorkoutPlan.js      # Goal-based workout plans
│   └── DietPlan.js         # Nutrition guidance
├── styles/
│   ├── Calculator.module.css
│   ├── Header.module.css
│   ├── ResultsDisplay.module.css
│   └── shared.module.css
└── utils/
    └── pdfGenerator.js     # PDF generation utility
```

***

## 🎯 Usage

### Basic Calculation
1. **Enter personal information** (age, gender, height, weight)
2. **Select your activity level**
3. **Choose your fitness goal** (lose, maintain, gain weight)
4. **Click "Calculate My Macros"** to get results

### Viewing Results
- **Overview Tab**: Macro breakdown chart, BMR info, and tracking tips
- **Workout Tab**: Customized exercise plans based on your goal
- **Diet Tab**: Meal planning and nutrition guidance

### Exporting Results
- **Download PDF**: Generate comprehensive 3-page report
- **Print Results**: Browser-optimized printing
- **Calculate Again**: Reset form for new calculations

***

## 🧮 Calculations

### BMR (Basal Metabolic Rate)
- **Men**: `BMR = 88.362 + (13.397 × weight) + (4.799 × height) - (5.677 × age)`
- **Women**: `BMR = 447.593 + (9.247 × weight) + (3.098 × height) - (4.330 × age)`

### Activity Multipliers
| Level | Multiplier | Description |
|-------|------------|-------------|
| **Sedentary** | BMR × 1.2 | Little to no exercise |
| **Light** | BMR × 1.375 | Light exercise 1-3 days/week |
| **Moderate** | BMR × 1.55 | Moderate exercise 3-5 days/week |
| **Active** | BMR × 1.725 | Hard exercise 6-7 days/week |
| **Very Active** | BMR × 1.9 | Very hard exercise, physical job |

### Goal Adjustments
- **Weight Loss**: 20% calorie reduction (500 cal deficit)
- **Maintenance**: TDEE calories
- **Muscle Gain**: 15% calorie increase (400 cal surplus)

***

## 📱 Responsive Design

The application is fully responsive with breakpoints at:

| Device | Breakpoint | Layout |
|--------|------------|--------|
| **Desktop** | 1200px+ | Full layout |
| **Tablet** | 768px-1199px | Adjusted grids |
| **Mobile** | 320px-767px | Stacked layout |

All components adapt seamlessly across devices with optimized touch targets and readable typography.

***

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

***

## 🤝 Contributing

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

***

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

***

## 🙏 Acknowledgments

- Inspired by MacrosInc.net design principles
- BMR calculations based on Mifflin-St Jeor equation
- Workout plans adapted from fitness industry standards

***

## 📸 Screenshots

### 🏠 Landing Page


***

### 📝 Calculator Form

#### Personal Information Input


#### Goal Selection


#### Activity Level Selection


#### Complete Form View


***

### 📊 Results Overview

#### Results Header & Statistics


#### Macro Chart & Information Panel


#### Progress Tracking Tips


#### Macro Timing Recommendations


#### Quick Summary & Action Buttons


#### Footer & Disclaimer


***

### 📈 Interactive Macro Chart


***

### 💪 Workout Plan Tab

#### Workout Plan Overview


#### Weekly Schedule


#### Exercise Details


***

### 🍎 Diet Plan Tab

#### Diet Plan Header


#### Calorie Distribution


#### Meal Planning Guide


#### Sample Meal Plans


#### Nutrition Guidelines


#### Food Recommendations


#### Shopping List


***

### 📄 PDF Report Generation


***

## 🔗 Live Demo & Contact

| Resource | Link |
|----------|------|
| **Live Demo** | [https://macro-forge-calculator.vercel.app/](https://macro-forge-calculator.vercel.app/) |
| **Repository** | [https://github.com/yourusername/macro-calculator-nextjs]([https://github.com/yourusername/macro-calculator-nextjs](https://github.com/RaghuRajMathur/MacroForge-calculator)) |
| **Contact** | [raghuu715@gmail.com](mailto:raghuu715@gmail.com) |

***
