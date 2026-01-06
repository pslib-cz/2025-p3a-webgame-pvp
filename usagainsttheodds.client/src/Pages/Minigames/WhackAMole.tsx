import { useEffect, useState } from 'react';
import minigameStyles from '../../assets/styles/Minigames/Minigame.module.css';
import HolesGrid from '../../Components/WhackAMole/HolesGrid';
import type { MoleHoleType } from '../../Types/MoleHoleType';
import random from "../../Helpers/randomGeneratorHelper"

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
    const [molesSpawning, setMolesSpawning] = useState<boolean>(true);
    const [spawnInterval, setSpawnInterval] = useState<number>(1000);
    const [despawnInterval, setDespawnInterval] = useState<number>(2500);
    const [possibleMoles, setPossibleMoles] = useState<number>(1);


    //kdyz zalejza dolu a hitnes ho tak animace fixnout

    useEffect(() => {
        if (!molesSpawning) return;

        const interval = setInterval(() => {

            if (holes.filter(x => x.isMoleUp === true).length < possibleMoles) {//aby to spawnovalo jen kolik ma
                const pickedIndex = random.generate(0,8);                
                spawnMole(pickedIndex);
                console.log("picked hole", pickedIndex)
            }//nahodnou neobsazenou pozici
            
        }, spawnInterval);

        return () => clearInterval(interval);
    }, [molesSpawning, spawnInterval])




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

    return (
    <div className={minigameStyles.container}>
        <h2>Moles hit: {score}</h2>
        <HolesGrid holes={holes} hitCallback={handleHit} isUpCallback={waitToDespawn}/>

        <button onClick={() => setHoles(prev => prev.map(hole => ({ ...hole, isMoleUp: true })))}>spawn all moles</button>
        <button onClick={() => setHoles(prev => prev.map(hole => ({ ...hole, isMoleUp: false })))}>despawn all moles</button>
        <button onClick={() => setMolesSpawning(prev => !prev)}>{molesSpawning ? "Stop Spawning" : "Start Spawning"}</button>
    </div>
    );
}

export default WhackkAMole;