"use client";

import { useState } from "react";
import {
  Flame,
  Zap,
  Apple,
  Droplet,
  RotateCcw,
  Download,
  Info,
  Dumbbell,
  ChefHat,
  Calendar,
} from "lucide-react";
import MacroChart from "./MacroChart";
import WorkoutPlan from "./WorkoutPlan";
import DietPlan from "./DietPlan";
import styles from "@/styles/ResultsDisplay.module.css";
import sharedStyles from "@/styles/shared.module.css";
import { generateSimplePDF } from "@/utils/simplePdfGenerator";
import ParticlesComponent from "@/components/ParticlesBackground";

const ResultsDisplay = ({ results, onReset, userData }) => {
  const { tdee, macros, bmr, goal } = results;
  const [activeTab, setActiveTab] = useState("overview");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const stats = [
    {
      icon: Flame,
      label: "Daily Calories",
      value: macros.calories || tdee,
      unit: "kcal",
      className: "calories",
      description: "Total daily energy expenditure",
      color: "--macros-red",
    },
    {
      icon: Zap,
      label: "Protein",
      value: macros.protein,
      unit: "g",
      className: "protein",
      description: "Muscle building & repair",
      color: "--macros-blue",
    },
    {
      icon: Apple,
      label: "Carbohydrates",
      value: macros.carbs,
      unit: "g",
      className: "carbs",
      description: "Primary energy source",
      color: "--macros-green",
    },
    {
      icon: Droplet,
      label: "Fat",
      value: macros.fat,
      unit: "g",
      className: "fat",
      description: "Hormone production & vitamins",
      color: "--macros-orange",
    },
  ];

  const getGoalInfo = () => {
    const goalInfo = {
      lose: {
        title: "Weight Loss Plan",
        deficit: "500 calories/day deficit",
        description: "20% calorie reduction for sustainable fat loss",
        expectedLoss: "0.5-1 kg per week",
      },
      maintain: {
        title: "Maintenance Plan",
        deficit: "Maintenance calories",
        description: "Balanced nutrition for current weight",
        expectedLoss: "Maintain current weight",
      },
      gain: {
        title: "Muscle Gain Plan",
        deficit: "300-500 calories/day surplus",
        description: "15% calorie increase for lean muscle gain",
        expectedLoss: "0.25-0.5 kg per week",
      },
    };
    return goalInfo[goal] || goalInfo.maintain;
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "workout", label: "Workout Plan", icon: Dumbbell },
    { id: "diet", label: "Diet Plan", icon: ChefHat },
  ];

  // Handle PDF download
  const handleDownloadPDF = async () => {
    try {
      setIsGeneratingPDF(true);
      await generateSimplePDF(results, userData);
      alert("PDF generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <>
      <ParticlesComponent />
      <div className={styles.resultsContainer}>
        <div className={styles.resultsContent}>
          {/* Header */}
          <div className={styles.resultsHeader}>
            <h2 className={styles.resultsTitle}>Your Personal Results</h2>
            <p className={styles.resultsSubtitle}>
              {getGoalInfo().title} - We&apos;ve calculated your personalized
              daily macro targets based on your goals and activity level
            </p>
            <div className={styles.goalBadge}>
              <span className={styles.deficitInfo}>
                {getGoalInfo().deficit}
              </span>
              <span className={styles.expectedResult}>
                {getGoalInfo().expectedLoss}
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={styles.statCard}
                style={{ "--stat-color": `var(${stat.color})` }}
              >
                <div className={`${styles.statIcon} ${styles[stat.className]}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={styles.statValue}>
                  {stat.value.toLocaleString()}
                  <span className={styles.statUnit}>{stat.unit}</span>
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statDesc}>{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className={styles.tabNavigation}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabButton} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={styles.tabContent}>
            {activeTab === "overview" && (
              <div className={styles.overviewContent}>
                <div className={styles.contentGrid}>
                  <div className={styles.chartSection}>
                    <MacroChart macros={macros} />
                  </div>

                  <div className={styles.infoSection}>
                    <h3 className={styles.infoTitle}>
                      <Info className="w-5 h-5 text-purple-600" />
                      Key Information
                    </h3>

                    <div className={styles.bmrCard}>
                      <div className={styles.bmrLabel}>
                        Basal Metabolic Rate
                      </div>
                      <div className={styles.bmrValue}>{Math.round(bmr)}</div>
                      <div className={styles.bmrDesc}>
                        calories burned at rest
                      </div>
                    </div>

                    <div className={styles.macroList}>
                      <div className={styles.macroListTitle}>
                        Why These Macros?
                      </div>

                      <div className={styles.macroItem}>
                        <div
                          className={`${styles.macroDot} ${styles.protein}`}
                        ></div>
                        <div className={styles.macroText}>
                          <span className={styles.macroName}>Protein:</span>{" "}
                          Essential for muscle growth, repair, and maintaining
                          lean body mass.
                        </div>
                      </div>

                      <div className={styles.macroItem}>
                        <div
                          className={`${styles.macroDot} ${styles.carbs}`}
                        ></div>
                        <div className={styles.macroText}>
                          <span className={styles.macroName}>Carbs:</span> Your
                          body&apos;s preferred fuel source for workouts and
                          brain function.
                        </div>
                      </div>

                      <div className={styles.macroItem}>
                        <div
                          className={`${styles.macroDot} ${styles.fat}`}
                        ></div>
                        <div className={styles.macroText}>
                          <span className={styles.macroName}>Fat:</span>{" "}
                          Critical for hormone production and vitamin
                          absorption.
                        </div>
                      </div>
                    </div>

                    {/* Additional Info Cards */}
                    <div className={styles.additionalInfo}>
                      <div className={styles.infoCard}>
                        <div className={styles.infoCardHeader}>
                          <Calendar className="w-4 h-4" />
                          <span>Weekly Goal</span>
                        </div>
                        <div className={styles.infoCardValue}>
                          {goal === "lose"
                            ? "-0.5kg"
                            : goal === "gain"
                            ? "+0.25kg"
                            : "0kg"}
                        </div>
                      </div>

                      <div className={styles.infoCard}>
                        <div className={styles.infoCardHeader}>
                          <Flame className="w-4 h-4" />
                          <span>Daily Deficit</span>
                        </div>
                        <div className={styles.infoCardValue}>
                          {goal === "lose"
                            ? "-500"
                            : goal === "gain"
                            ? "+400"
                            : "0"}{" "}
                          cal
                        </div>
                      </div>
                    </div>

                    {/* Progress Tracking Tips */}
                    <div className={styles.tipsSection}>
                      <h4 className={styles.tipsTitle}>
                        Progress Tracking Tips
                      </h4>
                      <ul className={styles.tipsList}>
                        <li>📊 Track your weight weekly at the same time</li>
                        <li>📱 Use a food tracking app for accuracy</li>
                        <li>💪 Take body measurements monthly</li>
                        <li>📸 Progress photos every 2 weeks</li>
                        <li>⚖️ Focus on trends, not daily fluctuations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Macro Timing Section */}
                <div className={styles.macroTiming}>
                  <h3 className={styles.timingTitle}>Optimal Macro Timing</h3>
                  <div className={styles.timingGrid}>
                    <div className={styles.timingCard}>
                      <div className={styles.timingMeal}>Pre-Workout</div>
                      <div className={styles.timingMacros}>
                        <span className={styles.timingValue}>20-30g Carbs</span>
                        <span className={styles.timingDesc}>
                          Quick energy source
                        </span>
                      </div>
                    </div>
                    <div className={styles.timingCard}>
                      <div className={styles.timingMeal}>Post-Workout</div>
                      <div className={styles.timingMacros}>
                        <span className={styles.timingValue}>
                          25-40g Protein
                        </span>
                        <span className={styles.timingDesc}>
                          Muscle recovery
                        </span>
                      </div>
                    </div>
                    <div className={styles.timingCard}>
                      <div className={styles.timingMeal}>Before Bed</div>
                      <div className={styles.timingMacros}>
                        <span className={styles.timingValue}>
                          15-20g Protein
                        </span>
                        <span className={styles.timingDesc}>
                          Overnight recovery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "workout" && (
              <div className={styles.tabContentPadding}>
                <WorkoutPlan goal={goal} />
              </div>
            )}

            {activeTab === "diet" && (
              <div className={styles.tabContentPadding}>
                <DietPlan
                  macros={macros}
                  goal={goal}
                  calories={macros.calories || tdee}
                />
              </div>
            )}
          </div>

          {/* Quick Stats Summary */}
          <div className={styles.quickSummary}>
            <h3 className={styles.summaryTitle}>Quick Summary</h3>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Daily Calories</span>
                <span className={styles.summaryValue}>
                  {macros.calories || tdee}
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Protein %</span>
                <span className={styles.summaryValue}>
                  {Math.round(
                    ((macros.protein * 4) / (macros.calories || tdee)) * 100
                  )}
                  %
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Carbs %</span>
                <span className={styles.summaryValue}>
                  {Math.round(
                    ((macros.carbs * 4) / (macros.calories || tdee)) * 100
                  )}
                  %
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Fat %</span>
                <span className={styles.summaryValue}>
                  {Math.round(
                    ((macros.fat * 9) / (macros.calories || tdee)) * 100
                  )}
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button
              onClick={onReset}
              className={`${sharedStyles.btnSecondary} ${styles.actionButton}`}
            >
              <RotateCcw className="w-4 h-4" />
              Calculate Again
            </button>

            <button
              onClick={() => window.print()}
              className={`${sharedStyles.btnSecondary} ${styles.actionButton}`}
            >
              <Download className="w-4 h-4" />
              Download Results(for each page)
            </button>
          </div>

          {/* Footer Info */}
          <div className={styles.footerInfo}>
            <p className={styles.disclaimer}>
              <strong>Disclaimer:</strong> These calculations are estimates
              based on standard formulas. Individual results may vary. Consult
              with a healthcare professional or registered dietitian for
              personalized nutrition advice.
            </p>
            <div className={styles.footerMeta}>
              <span>Generated on {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>MacroForge Calculator v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsDisplay;
