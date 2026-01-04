import { useState } from "react";
import type { GameResult } from "../../Types/GameType"
import { useRef, useEffect } from "react";
import { useMinigame } from "../../Hooks/useMinigame";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"
//import styles from "../../assets/styles/Minigames/BlackJack.module.css"
import SlotMachine from "../../Components/SlotMachine/SlotMachine";
import styles from "../../assets/styles/Minigames/BlackJack.module.css"

const Russianroulette = () => {

    const winTickets: number = 50;  

    // všelijaké stavy hry – v jaké části hráč zrovna je



    const { endGame, setResult, result, setRewardMultiplier } = useMinigame();//získání endGame funkce z kontextu
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [isSpinning, setIsSpinning] = useState(false);
    const [firstSlot, setFirstSlot] = useState<number>(0);
    const [secondSlot, setSecondSlot] = useState<number>(0);
    const [thirdSlot, setThirdSlot] = useState<number>(0);







        
    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
            endGame();
        }
    }

    const decideGameResult = (): void => {
        const result = (): GameResult => {
            if (firstSlot === secondSlot && secondSlot === thirdSlot)
            {
                setRewardMultiplier(firstSlot+2);// nastaví reward multiplier podle symbolu
                return "win";
            } 
            else return "lose";
        }
        const resultValue = result();
        setResult(resultValue);
        console.log("Game ended with result:", resultValue);
    }



    return (
        <div className={minigameStyles.container}>
            <div style={{ marginBottom: 12 }}>
            </div>
                <SlotMachine firstPosition={setFirstSlot} secondPosition={setSecondSlot} thirdPosition={setThirdSlot} isSpinning={isSpinning} />

                
                    
                    {buttonsVisible && (
                        <div>
                            <button className="button" 
                                    onClick={() => setIsSpinning(true)}>
                                Spin
                            </button>

                            <button className="button" 
                                onClick={() => {setIsSpinning(false); setButtonsVisible(false);decideGameResult();}} 
                                style={{ marginLeft: 8 }}>
                                    Stop
                            </button>
                        </div>
                    )}



                    {result && (
                        <div onAnimationEnd={handleAnimationEnd} className={styles.resultScreen}>
                            {result === "win" && <span className={styles.resultText}>You win!</span>}
                            {result === "lose" && <span className={styles.resultText}>You lose!</span>}
                        </div>
                    )}  
        
        </div>
    )
}

export default Russianroulette;