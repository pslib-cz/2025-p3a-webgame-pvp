import ChangeScreenButton from "../Components/ChangeScreenButton"
import { Suspense, use, useEffect, useState } from "react";
import type { Consumable } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";
import apiGet from "../Helpers/apiHelper";
import styles from "../assets/styles/Shop.module.css"
import minigameStyles from '../assets/styles/Minigames/Minigame.module.css';
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "../Components/Loading"
import  ErrorPage from "../Pages/ErrorPage"



const FoodBarContent = ({ promise }: { promise: Promise<Consumable[]> }) => {

    const { setPlayer, setGirlfriend, tickets, setTickets } = useOwnOutlet();


    const data = use(promise);
    
    const handleBuy = (itemId: string) => {

        const item = data.find(i => i.consumableId === itemId);
        if (!item) {
            console.error("Item not found");
            return;
        }

        if (tickets < item.price) {
            alert("Not enough tickets!");
            return;
        }

        setTickets(prev => prev - item.price);
        
        setPlayer(prev => {
            return {
                ...prev,
                hunger: Math.min(100, prev.hunger + item.hungerRestoreValue),
                thirst: Math.min(100, prev.thirst + item.thirstRestoreValue),
                drunkenness: item.isAlcoholic ? Math.min(100, prev.drunkenness + item.alcoholContent) : prev.drunkenness
            };
        });
        setGirlfriend(prev => {
            return {
                ...prev,
                hunger: Math.min(100, prev.hunger + item.hungerRestoreValue),
                thirst: Math.min(100, prev.thirst + item.thirstRestoreValue),
                drunkenness: item.isAlcoholic ? Math.min(100, prev.drunkenness + item.alcoholContent) : prev.drunkenness
            };
        });
    }

    return (
        <div className={`${minigameStyles.table} ${minigameStyles.container}`}>

        <div className={styles.menu}>

            <div className={styles.itemsContainer}>
                <h1>MENU</h1>
                {data.map((item) => (
                    <div key={item.consumableId} className={styles.itemFood}>
                        <div className={styles.foodCard}>
                            <div className={styles.foodInfo}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.foodStats}>
                                <p>Price: {item.price}</p>
                                <p>Hunger: {item.hungerRestoreValue}</p>
                                <p>Thirst: {item.thirstRestoreValue}</p>
                            </div>
                            {item.isAlcoholic && <p>Alcohol: {item.alcoholContent}</p>}
                        </div>
                        <button onClick={() => handleBuy(item.consumableId)}>Buy</button>
                    </div>
                ))}

            </div>
        </div>

            <ChangeScreenButton className="buttonNext" to="/game/right" text="Go Back" />
        </div>
    )
}


const FoodBar = () => {
    const [promise, setPromise] = useState<Promise<Consumable[]> | null>(null);

    useEffect(() => {
        setPromise(apiGet<Consumable[]>('/api/consumables/'));
    }, []);

    if (!promise) {
        return <Loading />;
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Suspense fallback={<Loading/>}>
                <FoodBarContent promise={promise} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default FoodBar;