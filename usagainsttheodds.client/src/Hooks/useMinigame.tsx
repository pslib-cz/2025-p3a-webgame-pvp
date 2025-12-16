import { useContext } from "react";
import { MinigameContext } from "../Providers/MinigameProvider";


// Vlastní hook pro snadné použití v komponentách
export const useMinigame = () => {
    const context = useContext(MinigameContext);
    if (!context) {
        throw new Error("useMinigame must be used inside MiniGameProvider");
    }
    return context;
};