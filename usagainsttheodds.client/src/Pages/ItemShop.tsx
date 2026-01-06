import ChangeScreenButton from "../Components/ChangeScreenButton"
import { use, useEffect, useState } from "react";
import type { Items } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";




const ItemShop = () => {

    const { setRelationshipValue, tickets, setTickets } = useOwnOutlet();

    const [promise, setPromise] = useState<Promise<Items[]> | null>(null);

    
    
    
    const fetchItems = () => {
        console.log("Fetching items data");
        return fetch(`/api/items/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }
    
    
    //load data from api
    useEffect(() => {
        setPromise(fetchItems());
    }, []);
    
    if (!promise) {
        return <div>Initializing request...</div>;
    }

    const data = use(promise);
    
    const handleBuy = (Id: string) => {

        const item = data.find(i => i.ItemId === Id);
        if (!item) {
            console.error("Item not found");
            return;
        }

        if (tickets < item.price) {
            alert("Not enough tickets!");
            return;
        }

        setTickets(prev => prev - item.price);
        
        setRelationshipValue(prev => Math.min(100, prev + item.RelationRestoreValue));

    }

    return (
        <div>

            <h1>ItemShop</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1em' }}>
                {data.map((item) => (
                    <div key={item.ItemId} style={{ border: '1px solid black', padding: '1em' }}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price} tickets</p>
                        <p>Relation Restore: {item.RelationRestoreValue}</p>
                        <button onClick={() => handleBuy(item.ItemId)}>Buy</button>
                    </div>
                ))}

            </div>

            <ChangeScreenButton to="/" text="Go Back" />
        </div>
    )
}

export default ItemShop;