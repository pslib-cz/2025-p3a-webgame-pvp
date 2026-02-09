import styles from "../../assets/styles/Minigames/Darts.module.css"

import { useState, useEffect } from "react";


type DartsSliderProps = {
  dartsPosPercent: (x:number) => void,
  isShot: boolean,
}


const DartsSlider:React.FC<DartsSliderProps> = ({dartsPosPercent, isShot}) => {

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
              return prev + dir;
            });
          }, 10); // rychlost
          
        return () => clearInterval(interval);
        }

      }, [dir, isShot]);

      useEffect(() => {
        dartsPosPercent(pos);
      }, [pos]);


 return (
    <></>
  );



}
export default DartsSlider;