import { useEffect, useRef, useState } from 'react';
import minigameStyles from '../../assets/styles/Minigames/Minigame.module.css';
import HolesGrid from '../../Components/WhackAMole/HolesGrid';
import type { MoleHoleType } from '../../Types/MoleHoleType';
import random from "../../Helpers/randomGeneratorHelper"
import useTimer from '../../Hooks/useTimer';
import MolesStartButton from '../../Components/WhackAMole/MolesStartButton';
import MoleHole from '../../Components/WhackAMole/MoleHole';

const WhackkAMole = () => {
    const [score, setScore] = useState<number>(0);
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
    const [spawnInterval, setSpawnInterval] = useState<number>(1000);
    const [despawnInterval, setDespawnInterval] = useState<number>(2500);
    const [possibleMoles, setPossibleMoles] = useState<number>(1);
    

    //nekdy buguje vylezani

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
        setScore(prev => prev + 1);
        despawnMole(index);
    }

    const waitToDespawn = (index: number) => {
        setTimeout(() => {
            despawnMole(index);
        }, despawnInterval);
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
        console.log("hra začala")
        setMolesSpawning(true)
        countdown.start()
    }

    const handleTimeUp = () => {
        console.log("čas vypršel")
        setMolesSpawning(false)
    }
    
    const countdown = useTimer(30000, handleTimeUp)

    return (
        <div className={`${minigameStyles.container}`}>
            <h2>Moles hit: {score}</h2>
            <h2>Time left: {countdown.seconds}.{countdown.milliseconds}</h2>
            <HolesGrid holes={holes} hitCallback={handleHit} isUpCallback={waitToDespawn}/>

            <MolesStartButton startCallback={handleStart}/>

        </div>
    );
}

export default WhackkAMole;