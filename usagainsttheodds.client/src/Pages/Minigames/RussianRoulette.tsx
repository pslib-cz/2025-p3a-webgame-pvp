import { useState } from "react";
import type { GameResult } from "../../Types/GameType"
import rH from "../../Helpers/randomGeneratorHelper";
import { useRef, useEffect } from "react";
import { useMinigame } from "../../Hooks/useMinigame";
import Gun from "../../Components/Gun/Gun";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"

const Russianroulette = () => {

    const winTickets: number = 50;  // kolik tiketů získáš při výhře

    // všelijaké stavy hry – v jaké části hráč zrovna je
    const [gameState, setGameState] = useState<"idle" | "barrelOut" | "barrelIn" | "spun" | "shot">("idle");

    // pozice bubínku (kam se natočí)
    const [barrelPosition, setBarrelPosition] = useState<number | null>(null);

    // pozice náboje, kterou zvolil hráč
    const [bulletPosition, setBulletPosition] = useState<number | null>(null);


    const { endGame, setResult, result, setRewardMultiplier = 5 } = useMinigame();//získání endGame funkce z kontextu

    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [shootButtonsVisible, setShootButtonsVisible] = useState(false);
    const [spinButtonsVisible, setSpinButtonsVisible] = useState(false);








    const GetBullet = () => {
        if (bulletPosition !== null) {console.log("jupi", bulletPosition);}
        return <div>Vybraná pozice náboje: {bulletPosition !== null ? bulletPosition + 1 : "žádná"}</div>; 
    }
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
        <div className={minigameStyles.container}>
            <div style={{ marginBottom: 12 }}>
            </div>
                    <Gun bulletPosition={setBulletPosition} barrelOpened={barrelOpened} />
                    
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