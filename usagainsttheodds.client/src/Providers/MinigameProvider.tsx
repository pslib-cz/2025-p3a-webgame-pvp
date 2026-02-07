import React, { useState, useEffect, type PropsWithChildren, createContext, use } from "react";
import type { GameData, GameResult, GameState } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";


type MinigameContextType = {
    endGame: () => void;
    state: GameState;
    setState: (state: GameState) => void;
    data: GameData | null;
    playAgain: () => void;
    playGame: () => void;
    exitPagePath: string;
    result: GameResult;
    setResult: (result: GameResult) => void;
    reward: number;
    setReward: (reward: number) => void;
    rewardMultiplier: number;
    setRewardMultiplier: (multiplier: number) => void;
    bet: number;
    setBet: (bet: number) => void;
}

// Vytvoření kontextu
export const MinigameContext = createContext<MinigameContextType | null>(null);

type MinigameProviderProps = {
    exitPage: string;
    promise: Promise<any> | null;
}

export const MinigameProvider: React.FC<PropsWithChildren<MinigameProviderProps>> = ({ children, exitPage, promise }) => {

    const { tickets, setTickets, setPlayer, setGirlfriend, setRelationshipValue, setIsMinigamePlaying } = useOwnOutlet();


    const exitPagePath = exitPage;
    const data: GameData | null = use(promise || Promise.reject("No promise provided to MinigameProvider"));
    const [state, setState] = useState<GameState>("intro");
    const [result, setResult] = useState<GameResult>(null);
    const [rewardMultiplier, setRewardMultiplier] = useState<number>(2);
    const [bet, setBet] = useState<number>(data!.price > tickets ? tickets : data!.price);
    const [reward, setReward] = useState<number>(bet * rewardMultiplier);

    useEffect(() => {
        if (result === "win") setReward(Math.round(bet * rewardMultiplier));
        else if (result === "lose") setReward(0);
    }, [rewardMultiplier, bet, result]);

    const playAgain = () => {
        setState("intro");
    }
    
    const playGame = () => {

        if (bet > tickets) {
            alert(`Not enough tickets to play this game.\nYou have ${tickets} tickets, but the bet is ${bet} tickets.`);
            return;
        } else {
            setResult(null);
            setRewardMultiplier(2);
            console.log("Starting minigame, bet:", bet);
            setIsMinigamePlaying(true);
            setTickets(prev => prev - bet);
            setState("playing");
        }
    }

    const endGame = () => {
        const pHungerMultiplier = 5;
        const pThirstMultiplier = 7;
        const pDrunkennessMultiplier = 2;
        const gHungerMultiplier = 4;
        const gThirstMultiplier = 5;
        const gDrunkennessMultiplier = 1;
        const staminaMultiplier = 3;
        
        setState("ended");
        setRelationshipValue(prev => prev - (data!.difficulty * staminaMultiplier));
        setTickets(prev => prev + reward);
        setPlayer(prev => ({
            ...prev,
            hunger: ((prev.hunger - (data!.difficulty*pHungerMultiplier)) >= 0 ? (prev.hunger - (data!.difficulty*pHungerMultiplier)) : 0),
            thirst: ((prev.thirst - (data!.difficulty*pThirstMultiplier)) >= 0 ? (prev.thirst - (data!.difficulty*pThirstMultiplier)) : 0),
            drunkenness: ((prev.drunkenness - (data!.difficulty*pDrunkennessMultiplier)) >= 0 ? (prev.drunkenness - (data!.difficulty*pDrunkennessMultiplier)) : 0),
        }))
        setGirlfriend(prev => ({
            ...prev,
            hunger: ((prev.hunger - (data!.difficulty*gHungerMultiplier)) >= 0 ? (prev.hunger - (data!.difficulty*gHungerMultiplier)) : 0),
            thirst: ((prev.thirst - (data!.difficulty*gThirstMultiplier)) >= 0 ? (prev.thirst - (data!.difficulty*gThirstMultiplier)) : 0),
            drunkenness: ((prev.drunkenness - (data!.difficulty*gDrunkennessMultiplier)) >= 0 ? (prev.drunkenness - (data!.difficulty*gDrunkennessMultiplier)) : 0),
        }))

        setIsMinigamePlaying(false);
    }

    return (
        <MinigameContext.Provider value={{ 
            endGame,
            state,
            setState,
            data,
            playAgain,
            playGame,
            exitPagePath,
            result,
            setResult,
            reward,
            setReward,
            rewardMultiplier,
            setRewardMultiplier,
            bet,
            setBet
        }}>
            {children}
        </MinigameContext.Provider>
    )
}

export default MinigameProvider;