import type { EndReason, Person } from "./GameType";
import type { SoundName } from "./SoundType";


export type GameContextType = {
    tickets: number;
    setTickets: React.Dispatch<React.SetStateAction<number>>;
    relationshipValue: number;
    setRelationshipValue: React.Dispatch<React.SetStateAction<number>>;
    boughtBalloon: boolean;
    setBoughtBalloon: React.Dispatch<React.SetStateAction<boolean>>;
    boughtFlower: boolean;
    setBoughtFlower: React.Dispatch<React.SetStateAction<boolean>>;
    lastFood: any;
    setLastFood: React.Dispatch<React.SetStateAction<any>>;
    lastDrink: any;
    setLastDrink: React.Dispatch<React.SetStateAction<any>>;
    player: Person;
    setPlayer: React.Dispatch<React.SetStateAction<Person>>;
    girlfriend: Person;
    setGirlfriend: React.Dispatch<React.SetStateAction<Person>>;
    endReason: EndReason | null;
    setEndReason: React.Dispatch<React.SetStateAction<EndReason | null>>;
    endPerson: "boy" | "girl" | null;
    setEndPerson: React.Dispatch<React.SetStateAction<"boy" | "girl" | null>>;
    isPauseMenuOpen: boolean;
    setIsPauseMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    play: (soundName: SoundName) => void;
    stop: (soundName: SoundName) => void;
    isMusicMuted: boolean;
    setIsMusicMuted: React.Dispatch<React.SetStateAction<boolean>>;
    isStarted: boolean;
    setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}