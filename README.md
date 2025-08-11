<img width="1175" height="416" alt="image" src="https://github.com/user-attachments/assets/0cd45c64-6a57-4890-a08e-dc2f797b0c2c" />MacroForge - Professional Macro Calculator
A comprehensive, responsive macro calculator built with Next.js that provides personalized nutrition plans, workout routines, and PDF reports for fitness enthusiasts.

Features
Core Functionality
Advanced Macro Calculations: Uses Mifflin-St Jeor equation for accurate BMR calculations

Goal-Based Planning: Customized plans for weight loss, maintenance, and muscle gain

Activity Level Integration: 5 different activity levels with precise TDEE calculations

Interactive Charts: Visual macro breakdown using Recharts pie charts

User Experience
Responsive Design: Mobile-first approach with optimized layouts for all devices

Professional UI: MacrosInc-inspired design with modern gradients and animations

Tab-Based Navigation: Overview, Workout Plan, and Diet Plan sections

Progress Tracking: Built-in tips and macro timing recommendations

Export & Sharing
PDF Generation: Complete 3-page reports with personal info, macros, workout, and diet plans

Print Functionality: Optimized print styles for offline use

Download Reports: Professional PDF documents with branding

Technical Features
Next.js 14: Built with App Router and React Server Components

TypeScript Ready: Fully typed components and utilities

ESLint Compliant: Clean, error-free code following best practices

Performance Optimized: Lazy loading, optimized images, and minimal bundle size

Technology Stack
Framework: Next.js 14 with App Router

Styling: CSS Modules with responsive design

Charts: Recharts for interactive data visualization

PDF Generation: jsPDF for client-side PDF creation

Icons: Lucide React for consistent iconography

Installation
1. Clone the repository:
#git clone https://github.com/yourusername/MacroForge-calculator.git
#cd macro-calculator-nextjs

2. Install dependencies:
#npm install

3. Run the development server:
#npm run dev

4. Open http://localhost:3000 in your browser.

Project Structure:-

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


Usage
Basic Calculation
Enter personal information (age, gender, height, weight)

Select your activity level

Choose your fitness goal (lose, maintain, gain weight)

Click "Calculate My Macros" to get results

Viewing Results
Overview Tab: Macro breakdown chart, BMR info, and tracking tips

Workout Tab: Customized exercise plans based on your goal

Diet Tab: Meal planning and nutrition guidance

Exporting Results
Download PDF: Generate comprehensive 3-page report

Print Results: Browser-optimized printing

Calculate Again: Reset form for new calculations

Calculations
BMR (Basal Metabolic Rate)
Men: BMR = 88.362 + (13.397 × weight) + (4.799 × height) - (5.677 × age)

Women: BMR = 447.593 + (9.247 × weight) + (3.098 × height) - (4.330 × age)

Activity Multipliers
Sedentary: BMR × 1.2 (little to no exercise)

Light: BMR × 1.375 (light exercise 1-3 days/week)

Moderate: BMR × 1.55 (moderate exercise 3-5 days/week)

Active: BMR × 1.725 (hard exercise 6-7 days/week)

Very Active: BMR × 1.9 (very hard exercise, physical job)

Goal Adjustments
Weight Loss: 20% calorie reduction (500 cal deficit)

Maintenance: TDEE calories

Muscle Gain: 15% calorie increase (400 cal surplus)

Responsive Design
The application is fully responsive with breakpoints at:

Desktop: 1200px+ (full layout)

Tablet: 768px-1199px (adjusted grids)

Mobile: 320px-767px (stacked layout)

All components adapt seamlessly across devices with optimized touch targets and readable typography.

Browser Support
Chrome 90+

Firefox 88+

Safari 14+

Edge 90+

Contributing
Fork the repository

Create your feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Inspired by MacrosInc.net design principles

BMR calculations based on Mifflin-St Jeor equation

Workout plans adapted from fitness industry standards

Screenshots
Landing Page
<img width="1900" height="877" alt="image" src="https://github.com/user-attachments/assets/a071837b-a092-4dd9-bd7c-0f75645b5583" />


Calculator Form
<img width="1900" height="873" alt="image" src="https://github.com/user-attachments/assets/067b3723-4403-4b82-8618-10ee9582d48e" />
<img width="1900" height="871" alt="image" src="https://github.com/user-attachments/assets/51ecc0ca-6aca-4884-8131-552b59bb494f" />
<img width="1900" height="874" alt="image" src="https://github.com/user-attachments/assets/ed08ae5c-d66e-4d46-a59b-2329845d5926" />
<img width="1899" height="874" alt="image" src="https://github.com/user-attachments/assets/1016b251-c2e5-4d01-abe8-4391d787d19c" />


Results Overview
<img width="1900" height="873" alt="image" src="https://github.com/user-attachments/assets/b0b5319e-ea5a-449f-b517-0fe5f4ec5799" />
<img width="1900" height="873" alt="image" src="https://github.com/user-attachments/assets/ffd0fe2d-cd29-4d66-b173-a2751d9ea9d3" />
<img width="1900" height="874" alt="image" src="https://github.com/user-attachments/assets/3bda7442-7b53-4483-ace9-a7ccb38a04bd" />
<img width="1898" height="873" alt="image" src="https://github.com/user-attachments/assets/1120867d-4afa-4f43-8fb0-045a55e6b129" />
<img width="1900" height="871" alt="image" src="https://github.com/user-attachments/assets/1b2ee3f9-7ce7-4c20-a2ef-428d0ecaee68" />
<img width="1900" height="714" alt="image" src="https://github.com/user-attachments/assets/622f9700-d035-4d1e-8223-e4993d6f0321" />


Macro Chart
<img width="742" height="759" alt="image" src="https://github.com/user-attachments/assets/dc95c893-f3cd-4244-b230-f4e2269d74e3" />

Workout Plan
<img width="1159" height="835" alt="image" src="https://github.com/user-attachments/assets/abc2f437-26aa-4888-a30d-ddd65ea2973c" />
<img width="1898" height="871" alt="image" src="https://github.com/user-attachments/assets/738aae3b-6d0f-45d4-9178-2456653aa2f7" />
<img width="1900" height="871" alt="image" src="https://github.com/user-attachments/assets/17a16c3d-b050-4213-969c-69501386e3d3" />


Diet Plan
<img width="1175" height="416" alt="image" src="https://github.com/user-attachments/assets/d5e8303b-f05c-4385-930d-957534e91589" />
<img width="1900" height="876" alt="image" src="https://github.com/user-attachments/assets/0ea55866-d8bc-4486-b0c0-1540357a90d6" />
<img width="1162" height="823" alt="image" src="https://github.com/user-attachments/assets/a06752dd-8a2f-4d37-8554-d5141aa331d6" />
<img width="1890" height="870" alt="image" src="https://github.com/user-attachments/assets/5ef95a3d-0e30-4e93-a190-1f2eff6fb382" />
<img width="1898" height="869" alt="image" src="https://github.com/user-attachments/assets/0b49828b-f805-472e-b12b-596a56cc387c" />
<img width="1899" height="872" alt="image" src="https://github.com/user-attachments/assets/0074c3b0-ceea-4cbc-8392-ac4f42bc7112" />
<img width="1898" height="873" alt="image" src="https://github.com/user-attachments/assets/79541784-abba-4175-b8d2-3cea32cd7ca4" />


PDF Report
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6b0e78a2-b747-4f99-87f8-52d4cf91dcf5" />


Contact
raghuu715@gmail.com

Project Link: https://github.com/yourusername/macro-calculator-nextjs

Live Demo: https://your-app-name.vercel.app
Deployment: Vercel with automatic deployments
