import React from "react";
import styles from "../../assets/styles/components/HUD/TicketCounter.module.css";

type TicketCounterProps = {
    value: number;
}

const TicketCounter: React.FC<TicketCounterProps> = ({ value }) => {

    const formatNumber = (num: number): string => {
        return num.toLocaleString();
    }

    return (
        <div className={styles.container}>
            <span className={styles.value}>{formatNumber(value)}</span>
            <span className={styles.icon}></span>
        </div>
    )
}


export default TicketCounter;