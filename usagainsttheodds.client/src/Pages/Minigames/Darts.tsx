
import { useState, useEffect } from "react";
import DartsSlider from "../../Components/Darts/DartsSlider";
import {type position, type stopped } from "../../Types/DartTypes"
import styles from "../../assets/styles/Minigames/Darts.module.css"


const Darts = () => {

    
    const [pos, setPos] = useState<position>({posX: 50, posY: 50});
    const [isStopped, setIsStopped] = useState<stopped>({stoppedX: false, stoppedY: false});

    const maxScore = 500;
    const [playerScore, setPlayerScore] = useState<number>(0);


     useEffect(()=> {
         if(isStopped.stoppedX && isStopped.stoppedY){
             CountScore(pos.posX, pos.posY)
             
         }
     }, [isStopped])

     useEffect(()=> {
        console.log(playerScore)
     },[playerScore])






     const CountScore = (x: number, y:number) => {
        setPlayerScore(
            maxScore - Math.round(Math.sqrt(
                    Math.pow(
                        Math.abs(
                            x-50
                        ),2
                    )
                    +
                        Math.pow(
                            Math.abs(
                                y-50
                            ),2
                        )
                )
            )
        )

     }


//pocitani vzdalenosti - maxscore -  math.sqrt(math.pow(math.abs(posx - 50)) + math.pow(math.abs(posy -50))))




    return (
        <div className={styles.dartsGameContainer}>
            <div className={styles.dartContainer}>
                {!isStopped.stoppedX && (
                    <>
                        <DartsSlider isAxisY={false} dartsPosPercent={(x: number) => setPos({posX: x, posY: pos.posY})} isShot={isStopped.stoppedX}/>
                        <button className={styles.dartButton} onClick={() => setIsStopped({stoppedX: true, stoppedY: isStopped.stoppedY})}>stoppedX</button>
                    </>
                )}
                {(!isStopped.stoppedY && isStopped.stoppedX) && (
                    <>
                        <DartsSlider isAxisY={true} dartsPosPercent={(y: number) => setPos({posX: pos.posX, posY: y})} isShot={isStopped.stoppedY}/>
                        <button className={styles.dartButton} onClick={() => setIsStopped({stoppedX: isStopped.stoppedX, stoppedY: true})}>stoppedY</button>
                    </>
                )}
                <img 
                style={{    
                    left: `${pos.posX}%`,
                    top: `${pos.posY}%`
                }} 
                className={styles.dart} 
                src="/images/darts/dart.png" 
                alt="" 
                />


            </div>
        </div>

    )
}

export default Darts;