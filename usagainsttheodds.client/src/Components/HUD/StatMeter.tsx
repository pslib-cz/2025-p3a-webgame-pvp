import type React from "react"
import styles from "../../assets/styles/components/HUD/StatMeter.module.css"

type StatMeterProps = {
    type: string;
    value: number;
    person?: "player" | "girlfriend";
}



const StatMeter:React.FC<StatMeterProps> = ({type, value, person}) => {

    const clampedValue = Math.min(Math.max(value, 0), 100);

    const makeColor = () => {
      return `hsl(${clampedValue/100*120}, 85%, 50%)`
    }

    const icons: Record<string, string> = {
      relationship: styles["heart-icon"],
      hunger: styles["food-icon"],
      thirst: styles["drink-icon"],
    };

  return (
    <div className={`${styles.container} ${person === "girlfriend" ? ` ${styles.girlfriend}` : ""}`}>
      <div>
        <span
          className={`${styles.label} ${icons[type] ?? ""}`}
        >
        </span>
      </div>
      <div className={styles.bar}>
        <span className={styles.fill} style={{ width: `${clampedValue}%`, backgroundColor: makeColor() }}></span>
      </div>
    </div>
  )
}

export default StatMeter