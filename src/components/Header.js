import { Calculator, Target, Zap, Shield } from 'lucide-react'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>MacroForge- By Raghuraj Mathur</h1>
        <p className={styles.subtitle}>
          This free macro calculator, used by millions, provides you with the most 
          accurate macros and calories for your flexible dieting goals.
        </p>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <Calculator className={`w-4 h-4 ${styles.featureIcon}`} />
            Science-Based Calculations
          </div>
          <div className={styles.feature}>
            <Target className={`w-4 h-4 ${styles.featureIcon}`} />
            Personalized Results
          </div>
          <div className={styles.feature}>
            <Zap className={`w-4 h-4 ${styles.featureIcon}`} />
            Instant Results
          </div>
          <div className={styles.feature}>
            <Shield className={`w-4 h-4 ${styles.featureIcon}`} />
            100% Free
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <span>Start calculating</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
