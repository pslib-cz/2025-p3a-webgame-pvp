import React, { useState, useEffect, type PropsWithChildren, createContext, use } from "react";
import type { GameData, GameResult, GameState } from "../Types/GameType";


type MinigameContextType = {
    endGame: () => void;
    state: GameState;
    setState: (state: GameState) => void;
    data: GameData | null;
    playGame: () => void;
    exitPagePath: string;
    result: GameResult;
    setResult: (result: GameResult) => void;
    reward: number;
    setReward: (reward: number) => void;
    rewardMultiplier: number;
    setRewardMultiplier: (multiplier: number) => void;
}

// Vytvoření kontextu
export const MinigameContext = createContext<MinigameContextType | null>(null);

type MinigameProviderProps = {
    exitPage: string;
    promise: Promise<any> | null;
}

export const MinigameProvider: React.FC<PropsWithChildren<MinigameProviderProps>> = ({ children, exitPage, promise }) => {

    
    const exitPagePath = exitPage;
    const data: GameData | null = use(promise || Promise.reject("No promise provided to MinigameProvider"));

    const [state, setState] = useState<GameState>("intro");
    const endGame = () => {
        setState("ended");
    }
    const playGame = () => {
        setState("playing");
    }
    const [result, setResult] = useState<GameResult>(null);
    const [rewardMultiplier, setRewardMultiplier] = useState<number>(2);
    const [reward, setReward] = useState<number>(data!.price);
    useEffect(() => {
        if (result === "win") setReward(data!.price * rewardMultiplier);
        else if (result === "lose") setReward(0);
    }, [rewardMultiplier, data, result]);

    return (
        <MinigameContext.Provider value={{ 
            endGame,
            state,
            setState,
            data,
            playGame,
            exitPagePath,
            result,
            setResult,
            reward,
            setReward,
            rewardMultiplier,
            setRewardMultiplier
        }}>
            {children}
        </MinigameContext.Provider>
    )
}

export default MinigameProvider;