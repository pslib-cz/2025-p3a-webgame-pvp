import { useState } from 'react';
import minigameStyles from '../../assets/styles/Minigames/Minigame.module.css';
import HolesGrid from '../../Components/WhackAMole/HolesGrid';
import type { MoleHoleType } from '../../Types/MoleHoleType';

const WhackkAMole = () => {
    const [score, setScore] = useState<number>(0);
    const [holes, setHoles] = useState<MoleHoleType[]>([
        { index: 0, isMoleUp: true },
        { index: 1, isMoleUp: true },
        { index: 2, isMoleUp: false },
        { index: 3, isMoleUp: true },
        { index: 4, isMoleUp: false },
        { index: 5, isMoleUp: true },
        { index: 6, isMoleUp: false },
        { index: 7, isMoleUp: true },
        { index: 8, isMoleUp: true }
    ]);

    const handleHit = (index: number) => {
        setScore(prev => prev + 1);
        hideMole(index);
    }

    const hideMole = (index: number) => {
        setHoles(prev => [
            ...prev.slice(0, index),
            { ...prev[index], isMoleUp: false },
            ...prev.slice(index + 1)
        ])
    }
    //nahodny cas po jakem despawn

    return (
    <div className={minigameStyles.container}>
        <h2>Moles hit: {score}</h2>
        <HolesGrid holes={holes} hitCallback={(id) => handleHit(id)} />

        <button onClick={() => setHoles(prev => prev.map(hole => ({ ...hole, isMoleUp: true })))}>spawn all moles</button>
        <button onClick={() => setHoles(prev => prev.map(hole => ({ ...hole, isMoleUp: false })))}>despawn all moles</button>
    </div>
    );
}

export default WhackkAMole;