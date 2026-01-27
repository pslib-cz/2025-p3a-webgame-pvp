import styles from "../../assets/styles/Minigames/Darts.module.css"

import { useState, useEffect } from "react";


type DartsSliderProps = {
  dartsPosPercent: (x:number) => void,
  isShot: boolean,
  isAxisY: boolean
}


const DartsSlider:React.FC<DartsSliderProps> = ({dartsPosPercent, isShot, isAxisY}) => {

    const [pos , setPos] = useState<number>(0);
    const [dir, setDir] = useState(1);
    
    useEffect(() => {
      if(!isShot){
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
            dartsPosPercent(prev); 
            return prev + dir;
          });
        }, 30); // rychlost
        
      return () => clearInterval(interval);
      }



      }, [dir, isShot]);



 return (
    <div className={`${styles.bar} ${isAxisY && styles.barVertical}`}>

        <img className={`${styles.pointer} ${styles.pointerDown}`} src="/images/darts/pointer.png" alt="pointer" />
        <img className={styles.pointer} src="/images/darts/pointer.png" alt="pointer" />

        <span style={{left: `${pos}%`}} className={styles.selector}/>
    </div>
  );



}
export default DartsSlider;