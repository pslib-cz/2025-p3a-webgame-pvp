import { useState } from "react";
import type { GameResult } from "../../Types/GameType"
import { useRef, useEffect } from "react";
import { useMinigame } from "../../Hooks/useMinigame";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"
//import styles from "../../assets/styles/Minigames/BlackJack.module.css"
import SlotMachine from "../../Components/SlotMachine/SlotMachine";
import styles from "../../assets/styles/Minigames/SlotMachine/SlotMachine.module.css"
import rS from "../../Helpers/randomGeneratorHelper";
import Minigame from "../../Components/Minigame/Minigame";

const Russianroulette = () => {

    const winTickets: number = 50;  

    // všelijaké stavy hry – v jaké části hráč zrovna je



    const { endGame, setResult, result, setRewardMultiplier } = useMinigame();//získání endGame funkce z kontextu
    const [spinButtonClickable, setSpinButtonClickable] = useState(true);
    const [stopButtonClickable, setStopButtonClickable] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);






const [positions, setPositions] = useState<[number, number, number]>([0, 0, 0]);

    useEffect(() => {
      if (isSpinning) {
        setPositions([
          rS.generate(0, 8),
          rS.generate(0, 8),
          rS.generate(0, 8),
        ]);
      }
    }, [isSpinning]);

        
    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
            endGame();
        }
    }

    const decideGameResult = (): void => {
        const result = (): GameResult => {
            if (positions[0] === positions[1] && positions[1] === positions[2])
            {
                console.log(positions[0]);
                console.log(positions[1]);
                console.log(positions[2]);
                setRewardMultiplier(positions[0]*2+2);//jackpot
                return "win";
            }
            else if (positions[0] === positions[1] || positions[1] === positions[2] || positions[0] === positions[2]) {
                setRewardMultiplier(positions[0]+2);// nastaví reward multiplier podle symbolu
                return "win";
            }
            else return "lose";
        }
        const resultValue = result();
        setResult(resultValue);
        console.log("Game ended with result:", resultValue);
    }

    const Spin = (): void => {
        if(spinButtonClickable){
            setIsSpinning(true)
            setSpinButtonClickable(false);
            setStopButtonClickable(true);
        }
    }

    const Stop = (): void => {
        if(stopButtonClickable){
            setIsSpinning(false); 
            setStopButtonClickable(false);
            decideGameResult();
        }
    }


    return (
        <div className={`${minigameStyles.container} ${minigameStyles.alignToBottom}`}>
            
                    <SlotMachine spin={Spin} stop={Stop} firstPosition={positions[0]} secondPosition={positions[1]} thirdPosition={positions[2]} isSpinning={isSpinning} />
                    {result && (
                        <div onAnimationEnd={handleAnimationEnd} className={minigameStyles.resultScreen}>
                            {result === "win" && <span className={minigameStyles.resultText}>You win!</span>}
                            {result === "lose" && <span className={minigameStyles.resultText}>You lose!</span>}
                        </div>
                    )} 
        </div>
    )
}

export default Russianroulette;