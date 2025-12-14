import { useOutletContext } from "react-router-dom";

export const useOwnOutlet = () => {
    const outlet = useOutletContext<{
        tickets: number;
        setTickets: React.Dispatch<React.SetStateAction<number>>;
        relationshipValue: number;
        setRelationshipValue: React.Dispatch<React.SetStateAction<number>>;
        player: {
            hunger: number;
            thirst: number;
            drunkenness: number;
        };
        setPlayer: React.Dispatch<React.SetStateAction<{
            hunger: number;
            thirst: number;
            drunkenness: number;
        }>>;
    }>()
    return outlet;
};