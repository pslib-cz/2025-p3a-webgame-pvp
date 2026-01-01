import { useState } from "react";
import type { GameResult } from "../../Types/GameType"
import { useRef, useEffect } from "react";
import { useMinigame } from "../../Hooks/useMinigame";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"
//import styles from "../../assets/styles/Minigames/BlackJack.module.css"
import SlotMachine from "../../Components/SlotMachine/SlotMachine";

const Russianroulette = () => {

    const winTickets: number = 50;  

    // všelijaké stavy hry – v jaké části hráč zrovna je



    const { endGame, setResult, result, setRewardMultiplier = 5 } = useMinigame();//získání endGame funkce z kontextu
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [isSpinning, setIsSpinning] = useState(false);








    const handleSpin = () => {

    }




        
    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
            endGame();
        }
    }

    const decideGameResult = (barrelPosition: number, bulletPosition: number): void => {
        const result = (): GameResult => {
            if (barrelPosition === bulletPosition! + 1) return "win";
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
                <SlotMachine isSpinning={isSpinning} />
            
                    {/*<Gun bulletPosition={setBulletPosition} barrelOpened={barrelOpened} />
                    
                    {buttonsVisible && (
                        <div>
                            <button className="button" 
                                    onClick={() => {
                                                setBarrelOpened(true); 
                                                setShootButtonsVisible(false)
                                            }}>
                                Open barrel
                            </button>

                            <button className="button" 
                                onClick={() => {
                                    setBarrelOpened(false);
                                    if(bulletPosition !== null) setSpinButtonsVisible(true)
                                }} 
                                style={{ marginLeft: 8 }}>
                                    Close barrel
                            </button>
                        </div>
                    )}

                    {spinButtonsVisible && (
                        <button className={`button`} onClick={handleSpin}>Spin</button>
                    )}
                    {shootButtonsVisible && (
                            <button className={`button`} onClick={handleShoot}>Shoot</button>
                    )}

                    {result && (
                        <div onAnimationEnd={handleAnimationEnd} className={styles.resultScreen}>
                            {result === "win" && <span className={styles.resultText}>You win!</span>}
                            {result === "lose" && <span className={styles.resultText}>You lose!</span>}
                            {result === "draw" && <span className={styles.resultText}>It's a draw!</span>}
                        </div>
                    )} */}
        
        </div>
    )
}

export default Russianroulette;