import { useState } from "react";
import type { GameResult } from "../../Types/GameType"
import { useEffect } from "react";
import { useMinigame } from "../../Hooks/useMinigame";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"
import DartsSlider from "../../Components/Darts/DartsSlider";


const Darts = () => {


    // všelijaké stavy hry – v jaké části hráč zrovna je


    useEffect(()=> {

    }, [])








    return (
        <DartsSlider/>
    )
}

export default Darts;