import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { type UserData } from "./Types/UserDataType";
import { isDeepEqual } from "./Helpers/generalHelper";
import { useNavigate } from 'react-router-dom';
import type { EndReason, Person } from './Types/GameType';
import { useGameSounds } from "./Hooks/useGameSounds";


const RootLayout = () => {
    const intitialData: UserData = {
        ticketsAmount: 5000,
        relationshipStamina: 85,
        boughtBalloon: false,
        boughtFlower: false,
        lastDrink: null,
        lastFood: null,
        endReason: null,
        player: {
            name: "John",
            hunger: 50,
            thirst: 50,
            drunkenness: 10,
        },
        girlfriend: {
            name: "Anastasia",
            hunger: 50,
            thirst: 50,
            drunkenness: 10,
        },
    };


    const [userData, setUserData] = useState<UserData>(() => {

        const stored = localStorage.getItem("UserData");
        return stored ? JSON.parse(stored) : intitialData;  // Return saved data
    });//taha data z local storage jinak hodi initial value


    const [tickets, setTickets] = useState<number>(userData.ticketsAmount);
    const [relationshipValue, setRelationshipValue] = useState<number>(userData.relationshipStamina);
    const [boughtBalloon, setBoughtBalloon] = useState<boolean>(userData.boughtBalloon);
    const [boughtFlower, setBoughtFlower] = useState<boolean>(userData.boughtFlower);
    const [lastFood, setLastFood] = useState(userData.lastFood);
    const [lastDrink, setLastDrink] = useState(userData.lastDrink);
    const [player, setPlayer] = useState<Person>(userData.player);
    const [girlfriend, setGirlfriend] = useState<Person>(userData.girlfriend);
    const [endReason, setEndReason] = useState<EndReason | null>(userData.endReason);

    const [isPauseMenuOpen, setIsPauseMenuOpen] = useState(false);
    const { play, stop, isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted } = useGameSounds();
    const navigate = useNavigate();


    const checkIfEnd = (data: UserData) => {
        if (data.relationshipStamina <= 0) {
            setEndReason("breakup");
        }
        if (data.ticketsAmount <= 0) {
            setEndReason("bankrupt");
        }
        if (data.player.hunger <= 0 || data.girlfriend.hunger <= 0) {
            setEndReason("hungry");
        }
        if (data.player.thirst <= 0 || data.girlfriend.thirst <= 0) {
            setEndReason("thirsty");
        }
        if (data.player.drunkenness >= 100 || data.girlfriend.drunkenness >= 100) {
            setEndReason("drunk");
        }

        return;
    }

    useEffect(() => {
        if (endReason !== null) {
            navigate('/ending');
        }
    }, [endReason]);




    useEffect(() => {
        const updated = {
            ...userData,
            ticketsAmount: tickets,
            relationshipStamina: relationshipValue,
            boughtBalloon: boughtBalloon,
            boughtFlower: boughtFlower,
            lastFood: lastFood,
            lastDrink: lastDrink,
            endReason: endReason,
            player: player,
            girlfriend: girlfriend,
        };

        localStorage.setItem("UserData", JSON.stringify(updated));

        setUserData((prev) =>
            isDeepEqual(prev, updated) ? prev : updated
        );


        checkIfEnd(updated);

    }, [tickets, relationshipValue, boughtBalloon, boughtFlower, lastFood, lastDrink, player, girlfriend, endReason]);//ulozi do local storage kdyz se zmeni hodnota


    //protřídit
    return (
        <div className="game-root">
            <Outlet
                context={{
                    tickets,
                    setTickets,
                    relationshipValue,
                    setRelationshipValue,
                    boughtBalloon,
                    setBoughtBalloon,
                    boughtFlower,
                    setBoughtFlower,
                    lastFood,
                    setLastFood,
                    lastDrink,
                    setLastDrink,
                    player,
                    setPlayer,
                    girlfriend,
                    setGirlfriend,
                    endReason,
                    setEndReason,
                    isPauseMenuOpen,
                    setIsPauseMenuOpen,
                    play,
                    stop,
                    isMusicMuted,
                    setIsMusicMuted,
                    isSfxMuted,
                    setIsSfxMuted,
                }}
            />
        </div>

    );
};

export default RootLayout;
