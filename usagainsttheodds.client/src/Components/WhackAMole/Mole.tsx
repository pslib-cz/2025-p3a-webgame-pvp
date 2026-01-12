import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/components/moles.module.css';

type MoleProps = {
    index: number;
    isUp: boolean;
    hitCallback: (index: number) => void;
    isUpCallback: (index: number) => void;
}

const Mole: React.FC<MoleProps> = ({ index, isUp, hitCallback, isUpCallback }) => {

    const [gotHit, setGotHit] = useState<boolean>(false);


    useEffect(() => {
        if (isUp) {
            setGotHit(false);
        }
    }, [isUp]);

    const hnadleClick = () => {
        if (isUp && !gotHit) {
            setGotHit(true)
        }
    }
    const handleAnimationEnd = (event: React.AnimationEvent) => {
        event.stopPropagation()//aby to zastavilo bublani z ditete aby se nespustil callback 2x

        if (event.animationName.includes('gotHit')) {
            hitCallback(index);
        }
        if (event.animationName.includes("goingUp")) {
            isUpCallback(index)
        }
    }



return (
    <>
        
            <span
                className={`
                    ${styles.moleContainer}
                    ${isUp ? styles.isUp : styles.isDown}
                `}
                onAnimationEnd={handleAnimationEnd}
            >
                <span
                    className={`
                        ${styles.mole}
                        ${gotHit && styles.gotHit}
                    `}  
                    onClick={hnadleClick}
                    onAnimationEnd={handleAnimationEnd}    
                />
            </span>
        
    </>
);
}

export default Mole;