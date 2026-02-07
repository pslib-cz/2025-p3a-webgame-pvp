import ChangeScreenButton from "../Components/ChangeScreenButton"
import { Suspense, use, useEffect, useState } from "react";
import type { Items } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";
import { ErrorBoundary } from "react-error-boundary";
import apiGet from "../Helpers/apiHelper";
import { Loading } from "../Components/Loading"
import ErrorPage from "../Pages/ErrorPage"
import styles from "../assets/styles/Shop.module.css"




const ItemShopContent = ({ promise }: { promise: Promise<Items[]> }) => {

    const { setRelationshipValue, tickets, setTickets,setEndReason, setHasWon } = useOwnOutlet();

    const data = use(promise);




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
            setHasWon(true);
            setEndReason("victory")
        }

        setTickets(prev => prev - item.price);
        
        setRelationshipValue(prev => Math.min(100, prev + item.relationRestoreValue));

    }

    return (
        <div className={styles.page}>

            <h1>ItemShop</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1em' }}>
                {data.map((item) => (
            <div 
                key={item.itemId} 
                className={styles.item} 
                data-id={item.itemId}>
            
            <div className={styles.itemCard}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: {item.price} tickets</p>
                <p>Relation: {item.relationRestoreValue}</p>
                <button onClick={() => handleBuy(item.itemId)}>Buy</button>
            </div>
        </div>
    ))}

            </div>

            <ChangeScreenButton to="/game" text="Go Back" />
        </div>
    )
}

const ItemShop = () => {
    const [promise, setPromise] = useState<Promise<Items[]> | null>(null);

    useEffect(() => {
        setPromise(apiGet<Items[]>('/api/items'));
    }, []);

    if (!promise) {
        return <Loading />;
    }

    return (

        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Suspense fallback={<Loading/>}>
                <ItemShopContent promise={promise} />
            </Suspense>
        </ErrorBoundary>
    );
};

export default ItemShop;