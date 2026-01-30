import { useContext } from "react";
import { GameContext } from "../RootLayout";
import type { GameContextType } from "../Types/GameContextType";

export const useOwnOutlet = () => {
    const context = useContext(GameContext);
    
    if (!context) {
        throw new Error("useOwnOutlet must be used within a GameContext.Provider");
    }

    return context as GameContextType;
};