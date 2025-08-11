'use client'

import { Dumbbell, Clock, Target, Repeat, Trophy, Calendar } from 'lucide-react'
import styles from '@/styles/WorkoutPlan.module.css'

const WorkoutPlan = ({ goal }) => {
  const getWorkoutPlan = () => {
    const plans = {
      lose: {
        title: 'Weight Loss Workout Plan',
        description: 'High-intensity training combined with strength work for maximum calorie burn',
        frequency: '5-6 days per week',
        duration: '45-60 minutes per session',
        focus: 'Fat burning and muscle preservation',
        plan: [
          {
            day: 'Day 1',
            title: 'Full Body HIIT + Strength',
            exercises: [
              { name: 'Warm-up', details: '10 minutes light cardio' },
              { name: 'Burpees', details: '3 sets × 12 reps' },
              { name: 'Push-ups', details: '3 sets × 15 reps' },
              { name: 'Squats', details: '3 sets × 20 reps' },
              { name: 'Mountain Climbers', details: '3 sets × 30 seconds' },
              { name: 'Plank', details: '3 sets × 30-45 seconds' },
              { name: 'Jumping Jacks', details: '3 sets × 30 seconds' },
              { name: 'Cool-down', details: '10 minutes stretching' }
            ]
          },
          {
            day: 'Day 2',
            title: 'Cardio + Core',
            exercises: [
              { name: 'Warm-up', details: '5 minutes dynamic stretching' },
              { name: 'Running/Cycling', details: '30-40 minutes moderate intensity' },
              { name: 'Russian Twists', details: '3 sets × 20 reps each side' },
              { name: 'Bicycle Crunches', details: '3 sets × 20 reps' },
              { name: 'Dead Bug', details: '3 sets × 10 each side' },
              { name: 'Side Plank', details: '2 sets × 20-30 seconds each side' }
            ]
          },
          {
            day: 'Day 3',
            title: 'Upper Body Strength',
            exercises: [
              { name: 'Push-ups (variations)', details: '4 sets × 12-15 reps' },
              { name: 'Pike Push-ups', details: '3 sets × 10 reps' },
              { name: 'Tricep Dips', details: '3 sets × 12 reps' },
              { name: 'Pull-ups/Assisted', details: '3 sets × 8-12 reps' },
              { name: 'Inverted Rows', details: '3 sets × 12 reps' },
              { name: 'Arm Circles', details: '2 sets × 30 seconds each direction' }
            ]
          },
          {
            day: 'Day 4',
            title: 'HIIT Cardio',
            exercises: [
              { name: 'Warm-up', details: '5 minutes light movement' },
              { name: 'Sprint Intervals', details: '8 rounds × 30s work, 30s rest' },
              { name: 'Jump Squats', details: '4 sets × 15 reps' },
              { name: 'High Knees', details: '4 sets × 30 seconds' },
              { name: 'Burpees', details: '3 sets × 10 reps' },
              { name: 'Cool-down walk', details: '10 minutes' }
            ]
          },
          {
            day: 'Day 5',
            title: 'Lower Body + Core',
            exercises: [
              { name: 'Squats', details: '4 sets × 20 reps' },
              { name: 'Lunges', details: '3 sets × 15 each leg' },
              { name: 'Wall Sit', details: '3 sets × 30-45 seconds' },
              { name: 'Calf Raises', details: '3 sets × 20 reps' },
              { name: 'Glute Bridges', details: '3 sets × 15 reps' },
              { name: 'Plank Variations', details: '3 sets × 30 seconds' }
            ]
          },
          {
            day: 'Day 6',
            title: 'Active Recovery',
            exercises: [
              { name: 'Light Walk', details: '30-45 minutes' },
              { name: 'Yoga/Stretching', details: '20-30 minutes' },
              { name: 'Foam Rolling', details: '10-15 minutes' }
            ]
          }
        ],
        tips: [
          'Maintain 500-750 calorie deficit through diet and exercise',
          'Stay hydrated - drink 3-4 liters of water daily',
          'Get 7-8 hours of sleep for recovery',
          'Track your workouts and progress weekly'
        ]
      },
      maintain: {
        title: 'Maintenance Workout Plan',
        description: 'Balanced strength and cardio for overall fitness',
        frequency: '4-5 days per week',
        duration: '45-60 minutes per session',
        focus: 'Overall fitness and muscle maintenance',
        plan: [
          {
            day: 'Day 1',
            title: 'Upper Body Strength',
            exercises: [
              { name: 'Push-ups', details: '3 sets × 12-15 reps' },
              { name: 'Pull-ups/Rows', details: '3 sets × 8-12 reps' },
              { name: 'Shoulder Press', details: '3 sets × 12 reps' },
              { name: 'Chest Fly', details: '3 sets × 12 reps' },
              { name: 'Bicep Curls', details: '3 sets × 12 reps' },
              { name: 'Tricep Extensions', details: '3 sets × 12 reps' }
            ]
          },
          {
            day: 'Day 2',
            title: 'Lower Body + Core',
            exercises: [
              { name: 'Squats', details: '4 sets × 15 reps' },
              { name: 'Deadlifts', details: '3 sets × 12 reps' },
              { name: 'Lunges', details: '3 sets × 12 each leg' },
              { name: 'Calf Raises', details: '3 sets × 15 reps' },
              { name: 'Plank', details: '3 sets × 45 seconds' },
              { name: 'Russian Twists', details: '3 sets × 20 reps' }
            ]
          },
          {
            day: 'Day 3',
            title: 'Cardio + Flexibility',
            exercises: [
              { name: 'Moderate Cardio', details: '30-40 minutes' },
              { name: 'Full Body Stretch', details: '15-20 minutes' },
              { name: 'Foam Rolling', details: '10 minutes' }
            ]
          },
          {
            day: 'Day 4',
            title: 'Full Body Circuit',
            exercises: [
              { name: 'Burpees', details: '3 sets × 10 reps' },
              { name: 'Push-ups', details: '3 sets × 12 reps' },
              { name: 'Squats', details: '3 sets × 15 reps' },
              { name: 'Mountain Climbers', details: '3 sets × 20 reps' },
              { name: 'Plank', details: '3 sets × 30 seconds' }
            ]
          }
        ],
        tips: [
          'Focus on progressive overload',
          'Include variety in your workouts',
          'Listen to your body and rest when needed',
          'Maintain consistent workout schedule'
        ]
      },
      gain: {
        title: 'Muscle Gain Workout Plan',
        description: 'Strength-focused training for maximum muscle growth',
        frequency: '5-6 days per week',
        duration: '60-75 minutes per session',
        focus: 'Muscle hypertrophy and strength building',
        plan: [
          {
            day: 'Day 1',
            title: 'Push (Chest, Shoulders, Triceps)',
            exercises: [
              { name: 'Push-ups (weighted)', details: '4 sets × 8-12 reps' },
              { name: 'Pike Push-ups', details: '4 sets × 10-12 reps' },
              { name: 'Dips', details: '3 sets × 10-15 reps' },
              { name: 'Overhead Press', details: '4 sets × 8-10 reps' },
              { name: 'Lateral Raises', details: '3 sets × 12-15 reps' },
              { name: 'Tricep Extensions', details: '3 sets × 12-15 reps' }
            ]
          },
          {
            day: 'Day 2',
            title: 'Pull (Back, Biceps)',
            exercises: [
              { name: 'Pull-ups', details: '4 sets × 6-10 reps' },
              { name: 'Rows', details: '4 sets × 8-12 reps' },
              { name: 'Lat Pulldowns', details: '3 sets × 10-12 reps' },
              { name: 'Face Pulls', details: '3 sets × 12-15 reps' },
              { name: 'Bicep Curls', details: '4 sets × 10-12 reps' },
              { name: 'Hammer Curls', details: '3 sets × 12 reps' }
            ]
          },
          {
            day: 'Day 3',
            title: 'Legs (Quads, Hamstrings, Glutes)',
            exercises: [
              { name: 'Squats', details: '4 sets × 8-12 reps' },
              { name: 'Romanian Deadlifts', details: '4 sets × 10-12 reps' },
              { name: 'Bulgarian Split Squats', details: '3 sets × 12 each leg' },
              { name: 'Walking Lunges', details: '3 sets × 20 steps' },
              { name: 'Calf Raises', details: '4 sets × 15-20 reps' },
              { name: 'Glute Bridges', details: '3 sets × 15 reps' }
            ]
          },
          {
            day: 'Day 4',
            title: 'Push (Volume)',
            exercises: [
              { name: 'Incline Push-ups', details: '4 sets × 12-15 reps' },
              { name: 'Diamond Push-ups', details: '3 sets × 8-10 reps' },
              { name: 'Arnold Press', details: '3 sets × 10-12 reps' },
              { name: 'Front Raises', details: '3 sets × 12 reps' },
              { name: 'Close-grip Push-ups', details: '3 sets × 10-12 reps' },
              { name: 'Overhead Tricep Extension', details: '3 sets × 12-15 reps' }
            ]
          },
          {
            day: 'Day 5',
            title: 'Pull (Volume)',
            exercises: [
              { name: 'Wide-grip Pull-ups', details: '4 sets × 6-8 reps' },
              { name: 'Single-arm Rows', details: '4 sets × 10-12 each arm' },
              { name: 'Reverse Fly', details: '3 sets × 12-15 reps' },
              { name: 'Shrugs', details: '3 sets × 15 reps' },
              { name: 'Concentration Curls', details: '3 sets × 10-12 reps' },
              { name: '21s Bicep Curls', details: '2 sets × 21 reps' }
            ]
          },
          {
            day: 'Day 6',
            title: 'Legs + Core',
            exercises: [
              { name: 'Front Squats', details: '4 sets × 10-12 reps' },
              { name: 'Stiff-leg Deadlifts', details: '4 sets × 12 reps' },
              { name: 'Step-ups', details: '3 sets × 12 each leg' },
              { name: 'Leg Curls', details: '3 sets × 12-15 reps' },
              { name: 'Weighted Plank', details: '3 sets × 45-60 seconds' },
              { name: 'Hanging Knee Raises', details: '3 sets × 12-15 reps' }
            ]
          }
        ],
        tips: [
          'Eat in a 300-500 calorie surplus for muscle growth',
          'Focus on progressive overload every week',
          'Get adequate protein (1.6-2.2g per kg body weight)',
          'Rest 48-72 hours between training same muscle groups',
          'Track your lifts and aim to increase weight/reps weekly'
        ]
      }
    }
    return plans[goal] || plans.maintain
  }

  const plan = getWorkoutPlan()

  return (
    <div className={styles.workoutContainer}>
      <div className={styles.workoutHeader}>
        <h3 className={styles.workoutTitle}>{plan.title}</h3>
        <p className={styles.workoutDescription}>{plan.description}</p>
        
        <div className={styles.workoutStats}>
          <div className={styles.statItem}>
            <Calendar className="w-5 h-5" />
            <div>
              <div className={styles.statLabel}>Frequency</div>
              <div className={styles.statValue}>{plan.frequency}</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <Clock className="w-5 h-5" />
            <div>
              <div className={styles.statLabel}>Duration</div>
              <div className={styles.statValue}>{plan.duration}</div>
            </div>
          </div>
          <div className={styles.statItem}>
            <Target className="w-5 h-5" />
            <div>
              <div className={styles.statLabel}>Focus</div>
              <div className={styles.statValue}>{plan.focus}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.workoutPlan}>
        {plan.plan.map((day, index) => (
          <div key={index} className={styles.dayCard}>
            <div className={styles.dayHeader}>
              <h4 className={styles.dayTitle}>{day.day}</h4>
              <h5 className={styles.daySubtitle}>{day.title}</h5>
            </div>
            <div className={styles.exerciseList}>
              {day.exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className={styles.exerciseItem}>
                  <div className={styles.exerciseName}>{exercise.name}</div>
                  <div className={styles.exerciseDetails}>{exercise.details}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.tipsSection}>
        <h4 className={styles.tipsTitle}>
          <Trophy className="w-5 h-5" />
          Pro Tips for Success
        </h4>
        <ul className={styles.tipsList}>
          {plan.tips.map((tip, index) => (
            <li key={index} className={styles.tipItem}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkoutPlan
