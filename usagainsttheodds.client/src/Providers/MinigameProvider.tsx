import React, { useState, useEffect, type PropsWithChildren, createContext, use } from "react";
import type { GameData, GameResult, GameState } from "../Types/GameType";



type MinigameContextType = {
    endGame: () => void;
    state: GameState;
    setState: (state: GameState) => void;
    data: GameData | null;
    continueGame: () => void;
    exitGame: () => void;
    result: GameResult;
    setResult: (result: GameResult) => void;
    tickets: number;
    setTickets: (tickets: number) => void;
    rewardMultiplier: number;
    setRewardMultiplier: (multiplier: number) => void;
}

// Vytvoření kontextu
export const MinigameContext = createContext<MinigameContextType | null>(null);

type MinigameProviderProps = {
    onExitCallback: () => void;
    promise: Promise<any> | null;
}

export const MinigameProvider: React.FC<PropsWithChildren<MinigameProviderProps>> = ({ children, onExitCallback, promise }) => {

    
    
    const data: GameData | null = use(promise || Promise.reject("No promise provided"))



    const [state, setState] = useState<GameState>("intro");
    const endGame = () => {
        setState("ended");
    }
    const continueGame = () => {
        setState("playing");
    }
    const exitGame = () => {
        onExitCallback();
    }
    const [result, setResult] = useState<GameResult>(null);
    const [rewardMultiplier, setRewardMultiplier] = useState<number>(2);
    const [tickets, setTickets] = useState<number>(0);
    useEffect(() => {
        if (result === "win") setTickets(data!.price * rewardMultiplier);
        else if (result === "lose") setTickets(-data!.price);
    }, [rewardMultiplier, data, result]);

    return (
        <MinigameContext.Provider value={{ 
            endGame,
            state,
            setState,
            data,
            continueGame,
            exitGame,
            result,
            setResult,
            tickets,
            setTickets,
            rewardMultiplier,
            setRewardMultiplier
        }}>
            {children}
        </MinigameContext.Provider>
    )
}

export default MinigameProvider;