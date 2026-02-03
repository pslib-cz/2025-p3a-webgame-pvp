import React, { createContext, useContext } from 'react';
import { useGameSounds } from '../Hooks/useGameSounds';

const SoundContext = createContext<ReturnType<typeof useGameSounds> | null>(null);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const soundApi = useGameSounds();

    return (
        <SoundContext.Provider value={soundApi}>
            {children}
        </SoundContext.Provider>
    );
};


export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) throw new Error("useSound must be used within SoundProvider");
    return context;
};