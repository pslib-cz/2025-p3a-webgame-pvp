import { useEffect, useRef, useState } from 'react';
import minigameStyles from '../../assets/styles/Minigames/Minigame.module.css';
import styles from "../../assets/styles/components/moles.module.css"
import HolesGrid from '../../Components/WhackAMole/HolesGrid';
import type { MoleHoleType } from '../../Types/MoleHoleType';
import random from "../../Helpers/randomGeneratorHelper"
import useTimer from '../../Hooks/useTimer';
import MolesStartButton from '../../Components/WhackAMole/MolesStartButton';
import { useMinigame } from '../../Hooks/useMinigame';

const WhackAMole = () => {
    const [score, setScore] = useState<number>(0);
    const scoreRef = useRef(score);
    useEffect(() => {
        scoreRef.current = score;
    }, [score]);

    const [holes, setHoles] = useState<MoleHoleType[]>([
        { index: 0, isMoleUp: false },
        { index: 1, isMoleUp: false },
        { index: 2, isMoleUp: false },
        { index: 3, isMoleUp: false },
        { index: 4, isMoleUp: false },
        { index: 5, isMoleUp: false },
        { index: 6, isMoleUp: false },
        { index: 7, isMoleUp: false },
        { index: 8, isMoleUp: false }
    ]);
    const [molesSpawning, setMolesSpawning] = useState<boolean>(false);
    const [spawnInterval, setSpawnInterval] = useState<number>(500);
    const [despawnInterval, setDespawnInterval] = useState<number>(600);
    const [possibleMoles, setPossibleMoles] = useState<number>(2);
    const [countdownTime, setCountdownTime] = useState<number>(25000);

    const timeoutsRef = useRef<(ReturnType<typeof setTimeout> | null)[]>(new Array(9).fill(null));

    const {endGame, result, setResult, setRewardMultiplier} = useMinigame();

    useEffect(() => {
        setScore(0);
        setHoles([
            { index: 0, isMoleUp: false },
            { index: 1, isMoleUp: false },
            { index: 2, isMoleUp: false },
            { index: 3, isMoleUp: false },
            { index: 4, isMoleUp: false },
            { index: 5, isMoleUp: false },
            { index: 6, isMoleUp: false },
            { index: 7, isMoleUp: false },
            { index: 8, isMoleUp: false }
        ]);
        setMolesSpawning(false);
        setSpawnInterval(500);
        setDespawnInterval(600);
        setPossibleMoles(2);
        setResult(null);
    }, []);

    const holesRef = useRef(holes)

    useEffect(() => {
        holesRef.current = holes
    }, [holes])

    useEffect(() => {
        if (!molesSpawning) return;

        const interval = setInterval(() => {
            const freeHoles: number[] = []

            //pres ref protoze v intervalu to bere jen data kdyz vznikl a takhle to vzalo referenci na misto odkud se maji vzit ty data
            holesRef.current.filter(x => x.isMoleUp === false).forEach(x => freeHoles.push(x.index))

            
            if (9-freeHoles.length < possibleMoles) {
                const pickedIndex = random.pickFromArray(freeHoles);                
                spawnMole(pickedIndex);
            }
            
        }, spawnInterval);

        return () => clearInterval(interval);
    }, [molesSpawning, spawnInterval, possibleMoles])

    const handleHit = (index: number) => {
        if (timeoutsRef.current[index]) {
            clearTimeout(timeoutsRef.current[index]!);
            timeoutsRef.current[index] = null;
        }
        setScore(prev => {
            const newScore = prev + 1;
            scoreRef.current = newScore;
            return newScore;
        });
        despawnMole(index);
    }

    const waitToDespawn = (index: number) => {
        if (timeoutsRef.current[index]) clearTimeout(timeoutsRef.current[index]);

        const timeoutId = setTimeout(() => {
            despawnMole(index);
            timeoutsRef.current[index] = null;
        }, despawnInterval);

        timeoutsRef.current[index] = timeoutId;
    }

    const despawnMole = (index: number) => {
        setHoles(prevHoles => {
            if (!prevHoles[index].isMoleUp) return prevHoles;

            const newHoles = [...prevHoles]
            newHoles[index] = {...newHoles[index], isMoleUp: false}
            return newHoles
        })
    }

    const spawnMole = (index: number) => {
        setHoles(prevHoles => {
            const newHoles = [...prevHoles]
            newHoles[index] = {...newHoles[index], isMoleUp: true}
            return newHoles
        })
    }


    const handleStart = () => {
        setScore(0);
        setMolesSpawning(true)
        countdown.start()
    }

    const handleTimeUp = () => {
        setMolesSpawning(false)

        timeoutsRef.current.forEach((timeoutId, index) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutsRef.current[index] = null;
            }
        });

        setHoles(prevHoles => prevHoles.map(hole => ({ ...hole, isMoleUp: false })));

        decideGameResult();
    }

    const decideGameResult = () => {
        const finalScore = scoreRef.current
        let multiplier: number;
        let finalResult: "win" | "lose" | "draw";

        if (finalScore >= 45) {
            multiplier = 2.5;
            finalResult = "win";
        } else if (finalScore >= 40) {
            multiplier = 2.25;
            finalResult = "win";
        } else if (finalScore >= 35) {
            multiplier = 2.0;
            finalResult = "win";
        } else if (finalScore >= 30) {
            multiplier = 1.75;
            finalResult = "win";
        } else if (finalScore >= 25) {
            multiplier = 1.5;
            finalResult = "win";
        } else if (finalScore >= 20) {
            multiplier = 1.25;
            finalResult = "win";
        } else if (finalScore >= 10) {
            multiplier = 0.5;
            finalResult = "lose";
        } else {
            multiplier = 0;
            finalResult = "lose";
        }
        setRewardMultiplier(multiplier);
        setResult(finalResult);
    }

    const countdown = useTimer(countdownTime, handleTimeUp)
    
    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
            endGame();
        }
    }


    return (
        <div className={`${minigameStyles.container} ${minigameStyles.alignToBottom}`}>
            <div className={`${styles.machine} ${minigameStyles.gameArea}`}>
                <div className={styles.interactiveArea}>
                
                    {/* Levá část: Grid s dírami */}
                    <div className={styles.gridWrapper}>
                        <HolesGrid holes={holes} hitCallback={handleHit} isUpCallback={waitToDespawn}/>
                    </div>

                    {/* Pravá část: Sloupeček s info boxy a tlačítkem */}
                    <div className={styles.sidebar}>

                        <div className={styles.scoreTag}>
                            <span className={styles.scoreLabel}>HITS</span>
                            <span className={styles.scoreValue}>{score}</span>
                        </div>
                            

                        <div className={styles.buttonWrapper}>
                            <MolesStartButton startCallback={handleStart} secondsLeft={countdown.seconds}/>
                        </div>
                    </div>

                </div>
                {result && (
                        <div onAnimationEnd={handleAnimationEnd} className={`${minigameStyles.resultScreen}`}>
                            {result === "win" && <span className={`${minigameStyles.resultText}`}>You win!</span>}
                            {result === "lose" && <span className={`${minigameStyles.resultText}`}>You lose!</span>}
                            {result === "draw" && <span className={`${minigameStyles.resultText}`}>It's a draw!</span>}
                        </div>
                    )}

            </div>

        </div>
    );
}

export default WhackAMole;