import { useEffect, useEffectEvent, useRef, useState } from 'react';
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
    const freeIndexesRef = useRef<number[]>([])
    const [spawnInterval, setSpawnInterval] = useState<number>(1000);
    
    useEffect(() => {
        if (!molesSpawning) return;

        const interval = setInterval(() => {
            console.log("available holes", ...freeIndexesRef.current)
            if (freeIndexesRef.current.length > 0) {
                const pickedIndex = random.pickFromArray(freeIndexesRef.current);
                spawnMole(pickedIndex);
                console.log("picked hole", pickedIndex)
            }
        }, spawnInterval);

        return () => clearInterval(interval);
    }, [molesSpawning, spawnInterval])


    useEffect(() => {
        freeIndexesRef.current = []
        holes.filter(hole => !hole.isMoleUp).forEach(freehole => freeIndexesRef.current.push(freehole.index))
        console.log("free holes updated ", ...freeIndexesRef.current)
    },[holes])

    const handleHit = (index: number) => {
        setScore(prev => prev + 1);
        despawnMole(index);
    }

    const despawnMole = (index: number) => {
        setHoles(prev => [
            ...prev.slice(0, index),
            { ...prev[index], isMoleUp: false },
            ...prev.slice(index + 1)
        ])
    }
    //nahodny cas po jakem despawn

    const spawnMole = (index: number) => {
        setHoles(prev => [
            ...prev.slice(0, index),
            { ...prev[index], isMoleUp: true },
            ...prev.slice(index + 1)
        ])
    }

    return (
    <div className={minigameStyles.container}>
        <h2>Moles hit: {score}</h2>
        <HolesGrid holes={holes} hitCallback={(id) => handleHit(id)} />

        <button onClick={() => setHoles(prev => prev.map(hole => ({ ...hole, isMoleUp: true })))}>spawn all moles</button>
        <button onClick={() => setHoles(prev => prev.map(hole => ({ ...hole, isMoleUp: false })))}>despawn all moles</button>
        <button onClick={() => setMolesSpawning(prev => !prev)}>{molesSpawning ? "Stop Spawning" : "Start Spawning"}</button>
    </div>
    );
}

export default WhackkAMole;