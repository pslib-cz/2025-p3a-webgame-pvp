import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"
import { useState, useEffect } from "react";
import DartsSlider from "../../Components/Darts/DartsSlider";
import {type position, type stopped } from "../../Types/DartTypes"
import styles from "../../assets/styles/Minigames/Darts.module.css"
import { useMinigame } from "../../Hooks/useMinigame";

const Darts = () => {

    const [pos, setPos] = useState<position>({posX: 50, posY: 50});
    const [isStopped, setIsStopped] = useState<stopped>({stoppedX: false, stoppedY: false});
    const maxScore = 100;
    const [playerScore, setPlayerScore] = useState<number>(0);
    const { endGame, setResult, result, setRewardMultiplier } = useMinigame();


    useEffect(() => {
        setPos({posX: 50, posY: 50});
        setPlayerScore(0);
        setIsStopped({stoppedX: false, stoppedY: false});
    }, []);





     useEffect(()=> {
         if(isStopped.stoppedX && isStopped.stoppedY) CountScore(pos.posX, pos.posY)
        }, [isStopped])

     useEffect(()=> {
        if(isStopped.stoppedX && isStopped.stoppedY) decideGameResult(playerScore)
     },[playerScore])




     useEffect(() => {
        const handleSpace = (event: KeyboardEvent) => {
          if (event.code === "Space" || event.key === " ") {
            handleStop()
            console.log("Space pressed");   
          }
        };
        
        window.addEventListener("keydown", handleSpace);
        return () => window.removeEventListener("keydown", handleSpace);
      }, []);










    //pocitani vzdalenosti - maxscore -  math.sqrt(math.pow(math.abs(posx - 50)) + math.pow(math.abs(posy -50))))
     const CountScore = (x: number, y:number) => {
        setPlayerScore(
            maxScore - Math.round(2*Math.sqrt(
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


     const decideGameResult = (s: number): void => {
        if(s <= 50){
            setResult("lose");
        }else{
            setResult("win");
            setRewardMultiplier(s / 50);
        }
     }


    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
            endGame();
        }
    }


    const handleStop = () => {
        setIsStopped((prev) => {
            if (!prev.stoppedX) {
                console.log("stopping X");
                return { ...prev, stoppedX: true };
            } else if (!prev.stoppedY) {
                console.log("stopping Y");
                return { ...prev, stoppedY: true };
            }
            console.log("both stopped");
            return prev;
        });
    }


    return (
        <div className={`${minigameStyles.container} ${minigameStyles.alignToBottom} ${minigameStyles.street}`}>
            <div className={styles.dartsGameContainer}>
            {!isStopped.stoppedX && (
                        <>
                            <DartsSlider isAxisY={false} dartsPosPercent={(x: number) => setPos({posX: x, posY: pos.posY})} isShot={isStopped.stoppedX}/>
                            <button className={styles.dartButton} onClick={() => handleStop()}>stoppedX</button>
                        </>
                    )}
                    {(!isStopped.stoppedY && isStopped.stoppedX) && (
                        <>
                            <DartsSlider isAxisY={true} dartsPosPercent={(y: number) => setPos({posX: pos.posX, posY: y})} isShot={isStopped.stoppedY}/>
                            <button className={styles.dartButton} onClick={() => handleStop()}>stoppedY</button>
                        </>
                    )}
                <div className={`${styles.dartContainer} ${styles.target}`}>

                        <img 
                            style={{    
                                left: `${pos.posX}%`,
                                top: `${pos.posY}%`
                            }} 
                            className={styles.dart} 
                            src="/images/darts/dart.png" 
                            alt="dart" 
                        />



                </div>
            </div>
            {result && (
                <div onAnimationEnd={handleAnimationEnd} className={minigameStyles.resultScreen}>
                    {result === "win" && <span className={minigameStyles.resultText}>You win!</span>}
                    {result === "lose" && <span className={minigameStyles.resultText}>You lose!</span>}
                </div>
            )} 
        </div>
    )
}

export default Darts;