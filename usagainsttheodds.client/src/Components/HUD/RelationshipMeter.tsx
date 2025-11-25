import type React from "react"
import styles from "../../assets/styles/components/HUD/RelationshipMeter.module.css"

type RelationShipMeterProps = {
    relationshipValue: number
}



const RelationShipMeter:React.FC<RelationShipMeterProps> = ({relationshipValue}) => {

    const clampedValue = Math.min(Math.max(relationshipValue, 0), 100);

    const makeColor = () => {
      return `hsl(${clampedValue/100*120}, 85%, 50%)`
    }

  return (
    <div className={styles.relationshipMeterContainer}>
      <span className={styles.relationshipMeterFill} style={{ width: `${clampedValue}%`, backgroundColor: makeColor() }}></span>
    </div>
  )
}

export default RelationShipMeter