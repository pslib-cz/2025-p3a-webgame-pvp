import type React from "react"
import styles from "../../assets/styles/components/HUD/StatMeter.module.css"

type StatMeterProps = {
    type: string;
    value: number;
}



const StatMeter:React.FC<StatMeterProps> = ({type, value}) => {

    const clampedValue = Math.min(Math.max(value, 0), 100);

    const makeColor = () => {
      return `hsl(${clampedValue/100*120}, 85%, 50%)`
    }

    const icons: Record<string, string> = {
      relationship: styles["icon-heart"],
      hunger: styles["icon-food"],
      thirst: styles["icon-drink"],
    };

  return (
    <div className={`${styles.container}`}>
      <div>
        <span className={`${styles.label} ${styles.icon} ${icons[type] ?? ""}`} />
      </div>
      <div className={styles.bar}>
        <span className={styles.fill} style={{ width: `${clampedValue}%`, backgroundColor: makeColor() }}/>
      </div>
    </div>
  )
}

export default StatMeter