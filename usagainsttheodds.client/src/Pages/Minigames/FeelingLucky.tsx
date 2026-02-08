import { useState, useEffect } from "react";
import styles from '../../assets/styles/Minigames/FeelingLucky.module.css';
import minigameStyles from '../../assets/styles/Minigames/Minigame.module.css';
import { useMinigame } from '../../Hooks/useMinigame'
import Shell from "../../Components/FeelingLucky/Shell"
import rS from "../../Helpers/randomGeneratorHelper";


const FeelingLucky = () => {
    const { endGame, setResult, result, setRewardMultiplier } = useMinigame();

    // Stavy hry
    const [gameState, setGameState] = useState<'initial' | 'shuffling' | 'picking' | 'revealing'>('initial');
    const [winningCup, setWinningCup] = useState<number>(1);
    const [selectedCup, setSelectedCup] = useState<number | null>(null);

    useEffect(() => {
        const shuffleTimer = setTimeout(() => {
            setGameState('shuffling');
        }, 2000);

        const pickTimer = setTimeout(() => {
            setWinningCup(rS.generate(0, 2)); 
            setGameState('picking');
        }, 5000);

        return () => {
            clearTimeout(shuffleTimer);
            clearTimeout(pickTimer);
        };
    }, []);

    const handleCupClick = (id: number) => {
        if (gameState !== 'picking') return;

        setSelectedCup(id);
        setGameState('revealing');

        if (id === winningCup) {
            setRewardMultiplier(2);
            setResult("win");
        } else {
            setRewardMultiplier(0);
            setResult("lose");
        }
    };

    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
             setTimeout(() => endGame(), 1000);
        }
    }

    return (
        <div className={`${minigameStyles.container} ${styles.container} ${minigameStyles.table}`}>
            <div className={styles.gameArea}>
                {[0, 1, 2].map((id) => (
                    <Shell
                    key={id}
                    id={id}
                    gameState={gameState}
                    isShuffling={gameState === "shuffling"}
                    isLifted={
                        (gameState === "initial" && id === 1) || 
                        (gameState === "revealing" && id === selectedCup)
                    }
                    hasBall={winningCup === id}
                    onClick={() => handleCupClick(id)}
                    />
                ))}
            </div>

            {result && (
                <div onAnimationEnd={handleAnimationEnd} className={styles.resultScreen}>
                            {result === "win" && <span className={minigameStyles.resultText}>You win!</span>}
                            {result === "lose" && <span className={minigameStyles.resultText}>You lost!</span>}
                </div>
            )}
        </div>
    );
};

export default FeelingLucky;