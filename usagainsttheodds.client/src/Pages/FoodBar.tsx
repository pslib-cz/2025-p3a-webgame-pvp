import ChangeScreenButton from "../Components/ChangeScreenButton"
import { use, useEffect, useState } from "react";
import type { Consumable } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";



const FoodBar = () => {

    const { setPlayer, setGirlfriend, tickets, setTickets } = useOwnOutlet();

    const [promise, setPromise] = useState<Promise<Consumable[]> | null>(null);

    
    
    
    const fetchConsumables = () => {
        console.log("Fetching consumables data");
        return fetch(`/api/consumables/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }
    
    
    //load data from api
    useEffect(() => {
        setPromise(fetchConsumables());
    }, []);
    
    if (!promise) {
        return <div>Initializing request...</div>;
    }

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
        <div>

            <h1>FoodBar</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1em' }}>
                {data.map((item) => (
                    <div key={item.consumableId} style={{ border: '1px solid black', padding: '1em' }}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price} tickets</p>
                        <p>Hunger Restore: {item.hungerRestoreValue}</p>
                        <p>Thirst Restore: {item.thirstRestoreValue}</p>
                        {item.isAlcoholic && <p>Alcohol Content: {item.alcoholContent}</p>}
                        <button onClick={() => handleBuy(item.consumableId)}>Buy</button>
                    </div>
                ))}

            </div>

            <ChangeScreenButton to="/" text="Go Back" />
        </div>
    )
}

export default FoodBar;