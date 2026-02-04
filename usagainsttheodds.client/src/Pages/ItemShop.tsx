import ChangeScreenButton from "../Components/ChangeScreenButton"
import { use, useEffect, useState } from "react";
import type { Items } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";




const ItemShop = () => {

    const { setRelationshipValue, tickets, setTickets,setEndReason } = useOwnOutlet();

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
    
    console.log(data)
    const handleBuy = (Id: string) => {

        const item = data.find(i => i.itemId === Id);
        if (!item) {
            console.error("Item not found");
            return;
        }

        console.log(item.itemId, item.relationRestoreValue, item.description, item.name, item.price)

        if (tickets < item.price) {
            alert("Not enough tickets!");
            return;
        }
        if (item.itemId === "pinkbear"){
            setEndReason("victory")
        }

        setTickets(prev => prev - item.price);
        
        setRelationshipValue(prev => Math.min(100, prev + item.relationRestoreValue));

    }

    return (
        <div>

            <h1>ItemShop</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1em' }}>
                {data.map((item) => (
                    <div key={item.itemId} style={{ border: '1px solid black', padding: '1em' }}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price} tickets</p>
                        <p>Relation Restore: {item.relationRestoreValue}</p>
                        <button onClick={() => handleBuy(item.itemId)}>Buy</button>
                    </div>
                ))}

            </div>

            <ChangeScreenButton to="/game" text="Go Back" />
        </div>
    )
}





export default ItemShop;