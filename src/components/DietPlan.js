'use client'

import { useState } from 'react'
import { ChefHat, Leaf, Fish, Utensils, Clock, TrendingDown, Plus } from 'lucide-react'
import styles from '@/styles/DietPlan.module.css'

const DietPlan = ({ macros, goal, calories }) => {
  const [dietType, setDietType] = useState('vegetarian')

  const getCalorieDeficitInfo = () => {
    const info = {
      lose: {
        dailyDeficit: 500,
        weeklyDeficit: 3500,
        description: '500 calories below maintenance for 0.5kg weight loss per week',
        approach: '20% calorie reduction from your TDEE'
      },
      maintain: {
        dailyDeficit: 0,
        weeklyDeficit: 0,
        description: 'Maintenance calories to preserve current weight',
        approach: 'Balanced nutrition at your exact TDEE'
      },
      gain: {
        dailyDeficit: -400,
        weeklyDeficit: -2800,
        description: '400 calories above maintenance for lean muscle gain',
        approach: '15% calorie increase from your TDEE'
      }
    }
    return info[goal] || info.maintain
  }

  const getDietPlan = () => {
    const plans = {
      vegetarian: {
        title: 'Vegetarian Diet Plan',
        icon: Leaf,
        description: 'Plant-based nutrition with dairy and eggs',
        meals: [
          {
            meal: 'Breakfast',
            time: '7:00 AM',
            calories: Math.round(calories * 0.25),
            options: [
              {
                name: 'Option 1: Power Bowl',
                foods: [
                  '1 cup oats with 1 tbsp almond butter',
                  '1 cup mixed berries',
                  '1 tbsp chia seeds',
                  '1 cup almond milk'
                ],
                macros: { protein: Math.round(macros.protein * 0.2), carbs: Math.round(macros.carbs * 0.3), fat: Math.round(macros.fat * 0.25) }
              },
              {
                name: 'Option 2: Protein Scramble',
                foods: [
                  '3 egg whites + 1 whole egg scrambled',
                  '1 slice whole grain toast',
                  '1/2 avocado sliced',
                  '1 cup spinach sautéed'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.2), fat: Math.round(macros.fat * 0.3) }
              }
            ]
          },
          {
            meal: 'Mid-Morning Snack',
            time: '10:00 AM',
            calories: Math.round(calories * 0.1),
            options: [
              {
                name: 'Protein Boost',
                foods: [
                  '1 cup Greek yogurt',
                  '1 tbsp honey',
                  '1 oz mixed nuts'
                ],
                macros: { protein: Math.round(macros.protein * 0.15), carbs: Math.round(macros.carbs * 0.1), fat: Math.round(macros.fat * 0.15) }
              }
            ]
          },
          {
            meal: 'Lunch',
            time: '1:00 PM',
            calories: Math.round(calories * 0.3),
            options: [
              {
                name: 'Option 1: Quinoa Power Bowl',
                foods: [
                  '1 cup cooked quinoa',
                  '1 cup mixed vegetables (broccoli, bell peppers)',
                  '1/2 cup chickpeas',
                  '2 tbsp tahini dressing',
                  'Mixed greens salad'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.35), fat: Math.round(macros.fat * 0.25) }
              },
              {
                name: 'Option 2: Lentil Curry with Rice',
                foods: [
                  '1 cup dal (lentil curry)',
                  '3/4 cup brown rice',
                  '1 cup sautéed vegetables',
                  '1 tbsp coconut oil for cooking'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.4), fat: Math.round(macros.fat * 0.2) }
              }
            ]
          },
          {
            meal: 'Evening Snack',
            time: '4:00 PM',
            calories: Math.round(calories * 0.1),
            options: [
              {
                name: 'Pre-Workout Fuel',
                foods: [
                  '1 medium banana',
                  '1 tbsp peanut butter',
                  '1 cup green tea'
                ],
                macros: { protein: Math.round(macros.protein * 0.1), carbs: Math.round(macros.carbs * 0.15), fat: Math.round(macros.fat * 0.1) }
              }
            ]
          },
          {
            meal: 'Dinner',
            time: '7:00 PM',
            calories: Math.round(calories * 0.25),
            options: [
              {
                name: 'Option 1: Tofu Stir-fry',
                foods: [
                  '150g firm tofu, grilled',
                  '1 cup mixed vegetables stir-fried',
                  '3/4 cup quinoa',
                  '1 tbsp olive oil for cooking'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.2), fat: Math.round(macros.fat * 0.3) }
              },
              {
                name: 'Option 2: Paneer & Vegetable Curry',
                foods: [
                  '100g paneer cubes',
                  '1 cup mixed vegetable curry',
                  '2 whole wheat rotis',
                  '1 cup salad with lemon dressing'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.25), fat: Math.round(macros.fat * 0.25) }
              }
            ]
          }
        ]
      },
      nonvegetarian: {
        title: 'Non-Vegetarian Diet Plan',
        icon: Fish,
        description: 'Balanced nutrition with lean meats and fish',
        meals: [
          {
            meal: 'Breakfast',
            time: '7:00 AM',
            calories: Math.round(calories * 0.25),
            options: [
              {
                name: 'Option 1: Protein Powerhouse',
                foods: [
                  '3 whole eggs scrambled',
                  '2 slices whole grain toast',
                  '1/2 avocado',
                  '1 cup mixed berries'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.25), fat: Math.round(macros.fat * 0.3) }
              },
              {
                name: 'Option 2: Chicken & Oats',
                foods: [
                  '100g grilled chicken breast',
                  '1/2 cup oats with milk',
                  '1 banana sliced',
                  '1 tbsp almond butter'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.3), fat: Math.round(macros.fat * 0.2) }
              }
            ]
          },
          {
            meal: 'Mid-Morning Snack',
            time: '10:00 AM',
            calories: Math.round(calories * 0.1),
            options: [
              {
                name: 'Protein Shake',
                foods: [
                  '1 scoop whey protein',
                  '1 cup almond milk',
                  '1 tbsp peanut butter',
                  '1/2 banana'
                ],
                macros: { protein: Math.round(macros.protein * 0.2), carbs: Math.round(macros.carbs * 0.1), fat: Math.round(macros.fat * 0.15) }
              }
            ]
          },
          {
            meal: 'Lunch',
            time: '1:00 PM',
            calories: Math.round(calories * 0.3),
            options: [
              {
                name: 'Option 1: Grilled Chicken Bowl',
                foods: [
                  '150g grilled chicken breast',
                  '1 cup brown rice',
                  '1 cup roasted vegetables',
                  '2 tbsp olive oil dressing',
                  'Mixed green salad'
                ],
                macros: { protein: Math.round(macros.protein * 0.35), carbs: Math.round(macros.carbs * 0.35), fat: Math.round(macros.fat * 0.25) }
              },
              {
                name: 'Option 2: Fish Curry with Rice',
                foods: [
                  '150g fish (salmon/mackerel) curry',
                  '3/4 cup basmati rice',
                  '1 cup mixed vegetables',
                  '1 tbsp coconut oil'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.4), fat: Math.round(macros.fat * 0.3) }
              }
            ]
          },
          {
            meal: 'Evening Snack',
            time: '4:00 PM',
            calories: Math.round(calories * 0.1),
            options: [
              {
                name: 'Pre-Workout Fuel',
                foods: [
                  '2 boiled eggs',
                  '1 slice whole grain toast',
                  '1 cup green tea'
                ],
                macros: { protein: Math.round(macros.protein * 0.15), carbs: Math.round(macros.carbs * 0.1), fat: Math.round(macros.fat * 0.1) }
              }
            ]
          },
          {
            meal: 'Dinner',
            time: '7:00 PM',
            calories: Math.round(calories * 0.25),
            options: [
              {
                name: 'Option 1: Lean Meat & Vegetables',
                foods: [
                  '150g grilled lean beef/chicken',
                  '1 cup steamed broccoli',
                  '1 medium sweet potato',
                  '1 tbsp olive oil'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.2), fat: Math.round(macros.fat * 0.25) }
              },
              {
                name: 'Option 2: Fish & Quinoa',
                foods: [
                  '150g grilled fish',
                  '3/4 cup quinoa',
                  '1 cup mixed vegetables',
                  '1 cup salad with vinaigrette'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.25), fat: Math.round(macros.fat * 0.2) }
              }
            ]
          }
        ]
      },
      vegan: {
        title: 'Vegan Diet Plan',
        icon: Leaf,
        description: 'Complete plant-based nutrition',
        meals: [
          {
            meal: 'Breakfast',
            time: '7:00 AM',
            calories: Math.round(calories * 0.25),
            options: [
              {
                name: 'Option 1: Protein Smoothie Bowl',
                foods: [
                  '2 scoops plant protein powder',
                  '1 cup oat milk',
                  '1 banana',
                  '1 tbsp chia seeds',
                  '1/2 cup mixed berries'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.3), fat: Math.round(macros.fat * 0.2) }
              },
              {
                name: 'Option 2: Tofu Scramble',
                foods: [
                  '150g firm tofu scrambled',
                  '1 slice whole grain toast',
                  '1/2 avocado',
                  '1 cup spinach sautéed'
                ],
                macros: { protein: Math.round(macros.protein * 0.2), carbs: Math.round(macros.carbs * 0.2), fat: Math.round(macros.fat * 0.3) }
              }
            ]
          },
          {
            meal: 'Mid-Morning Snack',
            time: '10:00 AM',
            calories: Math.round(calories * 0.1),
            options: [
              {
                name: 'Nuts & Seeds Mix',
                foods: [
                  '1 oz mixed nuts (almonds, walnuts)',
                  '1 tbsp pumpkin seeds',
                  '1 apple sliced'
                ],
                macros: { protein: Math.round(macros.protein * 0.1), carbs: Math.round(macros.carbs * 0.15), fat: Math.round(macros.fat * 0.2) }
              }
            ]
          },
          {
            meal: 'Lunch',
            time: '1:00 PM',
            calories: Math.round(calories * 0.3),
            options: [
              {
                name: 'Option 1: Buddha Bowl',
                foods: [
                  '1 cup quinoa',
                  '1/2 cup black beans',
                  '1/2 cup chickpeas',
                  '1 cup roasted vegetables',
                  '2 tbsp tahini dressing'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.4), fat: Math.round(macros.fat * 0.25) }
              },
              {
                name: 'Option 2: Lentil & Vegetable Curry',
                foods: [
                  '1 cup red lentil curry',
                  '3/4 cup brown rice',
                  '1 cup mixed vegetables',
                  '1 tbsp coconut oil'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.45), fat: Math.round(macros.fat * 0.2) }
              }
            ]
          },
          {
            meal: 'Evening Snack',
            time: '4:00 PM',
            calories: Math.round(calories * 0.1),
            options: [
              {
                name: 'Energy Boost',
                foods: [
                  '1 cup plant milk',
                  '1 scoop vegan protein',
                  '1 banana',
                  '1 tbsp almond butter'
                ],
                macros: { protein: Math.round(macros.protein * 0.15), carbs: Math.round(macros.carbs * 0.1), fat: Math.round(macros.fat * 0.15) }
              }
            ]
          },
          {
            meal: 'Dinner',
            time: '7:00 PM',
            calories: Math.round(calories * 0.25),
            options: [
              {
                name: 'Option 1: Tempeh Stir-fry',
                foods: [
                  '150g tempeh, grilled',
                  '1 cup mixed vegetables',
                  '3/4 cup quinoa',
                  '1 tbsp sesame oil'
                ],
                macros: { protein: Math.round(macros.protein * 0.3), carbs: Math.round(macros.carbs * 0.2), fat: Math.round(macros.fat * 0.25) }
              },
              {
                name: 'Option 2: Bean & Vegetable Curry',
                foods: [
                  '1 cup mixed bean curry',
                  '2 whole wheat rotis',
                  '1 cup vegetables',
                  '1 cup salad'
                ],
                macros: { protein: Math.round(macros.protein * 0.25), carbs: Math.round(macros.carbs * 0.25), fat: Math.round(macros.fat * 0.2) }
              }
            ]
          }
        ]
      }
    }
    return plans[dietType]
  }

  const deficitInfo = getCalorieDeficitInfo()
  const plan = getDietPlan()

  return (
    <div className={styles.dietContainer}>
      {/* Diet Type Selection */}
      <div className={styles.dietTypeSelector}>
        {['vegetarian', 'nonvegetarian', 'vegan'].map((type) => (
          <button
            key={type}
            onClick={() => setDietType(type)}
            className={`${styles.dietTypeButton} ${dietType === type ? styles.active : ''}`}
          >
            {type === 'vegetarian' && <Leaf className="w-4 h-4" />}
            {type === 'nonvegetarian' && <Fish className="w-4 h-4" />}
            {type === 'vegan' && <Leaf className="w-4 h-4" />}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Calorie Deficit Information */}
      <div className={styles.deficitInfo}>
        <div className={styles.deficitCard}>
          <div className={styles.deficitHeader}>
            <TrendingDown className="w-6 h-6" />
            <div>
              <h4 className={styles.deficitTitle}>
                {goal === 'lose' ? 'Daily Calorie Deficit' : goal === 'gain' ? 'Daily Calorie Surplus' : 'Maintenance Calories'}
              </h4>
              <p className={styles.deficitDescription}>{deficitInfo.description}</p>
            </div>
          </div>
          <div className={styles.deficitStats}>
            <div className={styles.deficitStat}>
              <span className={styles.deficitNumber}>
                {Math.abs(deficitInfo.dailyDeficit)} {deficitInfo.dailyDeficit !== 0 ? (deficitInfo.dailyDeficit > 0 ? 'cal/day' : 'cal/day') : 'calories'}
              </span>
              <span className={styles.deficitLabel}>
                {goal === 'lose' ? 'Deficit' : goal === 'gain' ? 'Surplus' : 'Maintenance'}
              </span>
            </div>
            <div className={styles.deficitStat}>
              <span className={styles.deficitNumber}>
                {Math.abs(deficitInfo.weeklyDeficit)} {deficitInfo.weeklyDeficit !== 0 ? 'cal/week' : 'balanced'}
              </span>
              <span className={styles.deficitLabel}>Weekly Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Diet Plan Header */}
      <div className={styles.planHeader}>
        <div className={styles.planTitle}>
          <plan.icon className="w-6 h-6" />
          <h3>{plan.title}</h3>
        </div>
        <p className={styles.planDescription}>{plan.description}</p>
      </div>

      {/* Daily Meal Plan */}
      <div className={styles.mealPlan}>
        {plan.meals.map((meal, index) => (
          <div key={index} className={styles.mealCard}>
            <div className={styles.mealHeader}>
              <div className={styles.mealInfo}>
                <h4 className={styles.mealName}>{meal.meal}</h4>
                <div className={styles.mealMeta}>
                  <Clock className="w-4 h-4" />
                  <span>{meal.time}</span>
                  <span>•</span>
                  <span>{meal.calories} calories</span>
                </div>
              </div>
            </div>
            
            <div className={styles.mealOptions}>
              {meal.options.map((option, optionIndex) => (
                <div key={optionIndex} className={styles.mealOption}>
                  <h5 className={styles.optionName}>{option.name}</h5>
                  <ul className={styles.foodList}>
                    {option.foods.map((food, foodIndex) => (
                      <li key={foodIndex} className={styles.foodItem}>
                        <span>•</span>
                        {food}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.macroBreakdown}>
                    <span>P: {option.macros.protein}g</span>
                    <span>C: {option.macros.carbs}g</span>
                    <span>F: {option.macros.fat}g</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Schedule */}
      <div className={styles.weeklySchedule}>
        <h4 className={styles.scheduleTitle}>Weekly Meal Planning Tips</h4>
        <div className={styles.scheduleTips}>
          <div className={styles.tip}>
            <strong>Meal Prep Sunday:</strong> Prepare grains, proteins, and chopped vegetables in advance
          </div>
          <div className={styles.tip}>
            <strong>Hydration:</strong> Drink 3-4 liters of water daily, more on workout days
          </div>
          <div className={styles.tip}>
            <strong>Timing:</strong> Eat protein within 2 hours post-workout for optimal recovery
          </div>
          <div className={styles.tip}>
            <strong>Flexibility:</strong> Swap similar foods to maintain variety while hitting macro targets
          </div>
        </div>
      </div>
    </div>
  )
}

export default DietPlan
