import { useState, useEffect } from "react";
import type { GameResult } from "../../Types/GameType"
import rH from "../../Helpers/randomGeneratorHelper";
import { useMinigame } from "../../Hooks/useMinigame";
import Gun from "../../Components/Gun/Gun";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"
import styles from "../../assets/styles/Minigames/RussianRoulette.module.css"

const Russianroulette = () => {

    // všelijaké stavy hry – v jaké části hráč zrovna je

    // pozice bubínku (kam se natočí)
    const [barrelPosition, setBarrelPosition] = useState<number | null>(null);

    // pozice náboje, kterou zvolil hráč
    const [bulletPosition, setBulletPosition] = useState<number | null>(null);


    const { endGame, setResult, result = 5 } = useMinigame();//získání endGame funkce z kontextu

    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [shootButtonsVisible, setShootButtonsVisible] = useState(false);
    const [spinButtonsVisible, setSpinButtonsVisible] = useState(false);


    useEffect(()=> {
        setButtonsVisible(true);
        setShootButtonsVisible(false);
        setSpinButtonsVisible(false);
        setBarrelPosition(null);
        setBulletPosition(null);
        setResult(null);
    }, [])






    const [barrelOpened, setBarrelOpened] = useState(false);

    const handleSpin = () => {
        setButtonsVisible(false);
        setSpinButtonsVisible(false);

        setShootButtonsVisible(true);
        setBarrelPosition(rH.generate(1, 6));  // dá random číslo 1–6
        console.log(barrelPosition);          // POZOR: ukazuje starou hodnotu — React stav se updateuje async

    }

    const handleShoot = () => {
        setSpinButtonsVisible(false);
        decideGameResult(barrelPosition!, bulletPosition!);
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
        <div className={`${minigameStyles.container} ${minigameStyles.alignToBottom} ${minigameStyles.shop}`}>
                    <Gun bulletPosition={setBulletPosition} barrelOpened={barrelOpened} />
                    <div className={styles.buttonContainer}>
                        {buttonsVisible && (
                                <button className={`button`} 
                                        onClick={() => {
                                                    setBarrelOpened(true); 
                                                    setShootButtonsVisible(false)
                                                }}>
                                    Open barrel
                                </button>
                        )}
                        {buttonsVisible && (
                                <button className={`button`} 
                                    onClick={() => {
                                        setBarrelOpened(false);
                                        if(bulletPosition !== null) {setSpinButtonsVisible(true); setButtonsVisible(false)}

                                    }} 
                                    style={{ marginLeft: 8 }}>
                                        Close barrel
                                </button>
                        )}

                        {spinButtonsVisible && (
                                <button className={`button`} onClick={handleSpin}>Spin</button>
                            
                        )}
                        {shootButtonsVisible && (
                                <button className={`button`} onClick={handleShoot}>Shoot</button>
                            
                        )}
                    </div>
                    

                    {result && (
                        <div onAnimationEnd={handleAnimationEnd} className={minigameStyles.resultScreen}>
                            {result === "win" && <span className={minigameStyles.resultText}>You win!</span>}
                            {result === "lose" && <span className={minigameStyles.resultText}>You lose!</span>}
                            {result === "draw" && <span className={minigameStyles.resultText}>It's a draw!</span>}
                        </div>
                    )}
        </div>
    )
}

export default Russianroulette;