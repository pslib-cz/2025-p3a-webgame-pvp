import { useOutletContext } from "react-router-dom";
import type { SoundName } from "../Types/SoundType";

export const useOwnOutlet = () => {
    const outlet = useOutletContext<{
        tickets: number;
        setTickets: React.Dispatch<React.SetStateAction<number>>;
        relationshipValue: number;
        setRelationshipValue: React.Dispatch<React.SetStateAction<number>>;
        player: {
            name: string;
            hunger: number;
            thirst: number;
            drunkenness: number;
        };
        setPlayer: React.Dispatch<React.SetStateAction<{
            name: string;
            hunger: number;
            thirst: number;
            drunkenness: number;
        }>>
        girlfriend: {
            name: string;
            hunger: number;
            thirst: number;
            drunkenness: number;
        };
        setGirlfriend: React.Dispatch<React.SetStateAction<{
            hunger: number;
            thirst: number;
            drunkenness: number;
        }>>

        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

        play: (soundName: SoundName) => void;
        stop: (soundName: SoundName) => void;
        isMusicMuted: boolean;
        setIsMusicMuted: React.Dispatch<React.SetStateAction<boolean>>;
        isSfxMuted: boolean;
        setIsSfxMuted: React.Dispatch<React.SetStateAction<boolean>>;
    }>()
    
    return outlet;
};