import { useState } from "react";
import type { GameResult } from "../../Types/GameType"
import rH from "../../Helpers/randomGeneratorHelper";
import { useRef, useEffect } from "react";
import { useMinigame } from "../../hooks/useMinigame";


const Russianroulette = () => {

    const winTickets: number = 50;  // kolik tiketů získáš při výhře

    // všelijaké stavy hry – v jaké části hráč zrovna je
    const [gameState, setGameState] = useState<"idle" | "barrelOut" | "barrelIn" | "spun" | "shot">("idle");

    // pozice bubínku (kam se natočí)
    const [barrelPosition, setBarrelPosition] = useState<number | null>(null);

    // pozice náboje, kterou zvolil hráč
    const [bulletPosition, setBulletPosition] = useState<number | null>(null);

    const { endGame, setResult, setRewardMultiplier } = useMinigame();









    
    // 🔄 Funkce která náhodně nastaví pozici bubínku (1–6)
    const handleSpin = () => {
        setBarrelPosition(rH.generate(1, 6));  // dá random číslo 1–6
        console.log(barrelPosition);          // POZOR: ukazuje starou hodnotu — React stav se updateuje async
    }



    // 💥 Funkce, která zkontroluje jestli hráč trefil náboj
    const handleShoot = () => {
        console.log(barrelPosition);

        // pokud se pozice bubínku a náboje shoduje = boom = výhra
        if (barrelPosition === bulletPosition) {
            setResult("win");
        } else {
            setResult("lose");       // když se neshoduje = hráč přežil = prohra
        }
    }





    // 📦 Obalovač minihry — generuje UI kolem hry (layout, styl, atd.)
    return (
        <>

        </>
    )
}

export default Russianroulette;