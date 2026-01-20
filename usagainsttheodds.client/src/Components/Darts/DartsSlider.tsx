import styles from "../../assets/styles/Minigames/Darts.module.css"

import { useState, useEffect } from "react";

const DartsSlider = () => {
    const [pos , setPos] = useState<number>(0);
    const [dir, setDir] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setPos(prev => {
              if (prev >= 100) {
                setDir(-1);
                return prev - 1;
              }
              if (prev <= 0) {
                setDir(1);
                return prev + 1;
              }
              return prev + dir;
            });
          }, 30); // rychlost
    
        return () => clearInterval(interval);
      }, [dir]);



 return (
    <div className={styles.bar}>

        <img className={`${styles.pointer} ${styles.pointerDown}`} src="/images/darts/pointer.png" alt="pointer" />
        <img className={styles.pointer} src="/images/darts/pointer.png" alt="pointer" />

        <span style={{left: `${pos}%`}} className={styles.selector}/>
    </div>
  );



}
export default DartsSlider;