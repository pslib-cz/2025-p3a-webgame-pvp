import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { type UserData } from "./Types/UserDataType";
import { isDeepEqual } from "./Helpers/generalHelper";
import { useNavigate } from 'react-router-dom';
import type { EndReason, Person } from './Types/GameType';
import PauseMenu from "./Components/Pausemenu/PauseMenu";
import NotificationList from "./Components/Notifications/NotificationList";
import { GameContext } from "./Context/GameContext";
import type { NotificationData } from "./Types/NotificationType";
import { useSound } from "./Providers/SoundProvider";


const RootLayout = () => {
    const intitialData: UserData = {
        ticketsAmount: 5000,
        relationshipStamina: 85,
        boughtBalloon: false,
        boughtFlower: false,
        lastDrink: null,
        lastFood: null,
        endReason: null,
        endPerson: null,
        isStarted: false,
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
    const [endPerson, setEndPerson] = useState<"boy" | "girl" | null>(userData.endPerson);
    const [isStarted, setIsStarted] = useState<boolean>(userData.isStarted);


    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [isPauseMenuOpen, setIsPauseMenuOpen] = useState<boolean>(false);
    const { play, isMusicMuted } = useSound();
    const navigate = useNavigate();



    const checkStats = (data: UserData) => {

        if (data.relationshipStamina <= 0) {
            setEndReason("breakup");
            return;
        }
        if (data.ticketsAmount <= 0) {
            setEndReason("bankrupt");
            return;
        }

        if (data.relationshipStamina <= 20) {
            addNotification(`I'm worried about our relationship...`, `/images/Avatars/girlfriendAvatar.png`);
        }

        if (data.ticketsAmount <= 250) {
            addNotification(`We're running low on tickets!`, `/images/Avatars/boyfriendAvatar.png`);
        }

        const characters = [
            { key: "player" as const, type: "boy" as const },
            { key: "girlfriend" as const, type: "girl" as const }
        ]

        for (const char of characters) {
            const dataChar = data[char.key]

            // Kontrola hladovění, žízně a opilosti
            if (dataChar.hunger <= 0) {
                setEndPerson(char.type);
                setEndReason("hungry");
                return;
            }
            if (dataChar.thirst <= 0) {
                setEndPerson(char.type);
                setEndReason("thirsty");
                return;
            }
            if (dataChar.drunkenness >= 100) {
                setEndPerson(char.type);
                setEndReason("drunk");
                return;
            }

            //Kontrola pro notifikace hladovění, žízně a opilosti
            if (dataChar.hunger <= 20) {
                addNotification(`I'm starving!`, `/images/Avatars/${char.type}friendAvatar.png`);
            }
            if (dataChar.thirst <= 20) {
                addNotification(`I'm really thirsty!`, `/images/Avatars/${char.type}friendAvatar.png`);
            }
            if (dataChar.drunkenness >= 80) {
                addNotification(`I feel so drunk...`, `/images/Avatars/${char.type}friendAvatar.png`);
            }
        }

    };

    useEffect(() => {
        if (endReason !== null) {
            navigate('/ending');
        }
    }, [endReason]);

    useEffect(() => {
        const handleAutoPlay = () => {
            if (!isMusicMuted) {
                play('bgMusic');
            }
            window.removeEventListener('click', handleAutoPlay);
        };

        window.addEventListener('click', handleAutoPlay);
        return () => window.removeEventListener('click', handleAutoPlay);
    }, [play, isMusicMuted]);




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
            endPerson: endPerson,
            isStarted: isStarted,
            player: player,
            girlfriend: girlfriend,
        };

        localStorage.setItem("UserData", JSON.stringify(updated));

        setUserData((prev) =>
            isDeepEqual(prev, updated) ? prev : updated
        );


        checkStats(updated);

    }, [tickets, relationshipValue, boughtBalloon, boughtFlower, lastFood, lastDrink, player, girlfriend, endReason, endPerson, isStarted]);//ulozi do local storage kdyz se zmeni hodnota



    const addNotification = (text: string, imageSrc?: string) => {
        const newNotif: NotificationData = {
            id: crypto.randomUUID(), // Unikátní ID pro každou notifikaci
            text,
            imageSrc
        };
        setNotifications((prev) => [...prev, newNotif]);
    };

    const closeNotification = (id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };


    const gameContextValue = {
        tickets, setTickets,
        relationshipValue, setRelationshipValue,
        boughtBalloon, setBoughtBalloon,
        boughtFlower, setBoughtFlower,
        lastFood, setLastFood,
        lastDrink, setLastDrink,
        player, setPlayer,
        girlfriend, setGirlfriend,
        endReason, setEndReason,
        endPerson, setEndPerson,
        isPauseMenuOpen, setIsPauseMenuOpen,
        play,
        stop,
        isMusicMuted,
        isStarted, setIsStarted,
        addNotification, closeNotification,
        notifications
    }


    return (
        <GameContext.Provider value={gameContextValue}>
            <div className="game-root">
                <PauseMenu />
                <NotificationList />
                <Outlet />
            </div>
        </GameContext.Provider>

    );
};

export default RootLayout;
