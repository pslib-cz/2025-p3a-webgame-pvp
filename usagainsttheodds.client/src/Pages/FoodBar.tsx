import ChangeScreenButton from "../Components/ChangeScreenButton"
import { use, useEffect, useState } from "react";
import type { DrinkData, FoodData } from "../Types/GameType";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";



const FoodBar = () => {

    const { player, setPlayer, girlfriend, setGirlfriend, tickets, setTickets } = useOwnOutlet();

    const [foodPromise, setFoodPromise] = useState<Promise<FoodData[]> | null>(null);
    const [drinkPromise, setDrinkPromise] = useState<Promise<DrinkData[]> | null>(null);

    const fetchFood = () => {
        console.log("Fetching food data");
        return fetch(`https://localhost:7222/api/foods/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }


    const fetchDrink = () => {
        console.log("Fetching drink data");
        return fetch(`https://localhost:7222/api/drinks/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }


    //load data from api
    useEffect(() => {
        setFoodPromise(fetchFood());
        setDrinkPromise(fetchDrink());
    }, []);

    if (!foodPromise || !drinkPromise) {
        return <div>Initializing request...</div>;
    }

    const foodData = use(foodPromise);
    const drinkData = use(drinkPromise);

    const handleBuy = (itemType: "food" | "drink", itemId: string) => {


        if (itemType === "food") {


            const foodItem = foodData.find(item => item.foodId === itemId);

            if (foodItem && tickets >= foodItem.price) {
                setTickets(prev => prev - foodItem.price);
                setPlayer({
                    ...player,
                    hunger: Math.min(player.hunger + foodItem.restoreValue, 100)
                });
                setGirlfriend({
                    ...girlfriend,
                    hunger: Math.min(girlfriend.hunger + foodItem.restoreValue, 100)
                });
                console.log(`Bought food item: ${foodItem.name}`);
                console.log(`Player hunger: ${player.hunger}, Girlfriend hunger: ${girlfriend.hunger}, Tickets left: ${tickets - foodItem.price}`);
            } else alert("Not enough tickets to buy this item!");

        } else if (itemType === "drink") {


            const drinkItem = drinkData.find(item => item.drinkId === itemId);

            if (drinkItem && tickets >= drinkItem.price) {
                setTickets(prev => prev - drinkItem.price);
                setPlayer({
                    ...player,
                    thirst: Math.min(player.thirst + drinkItem.restoreValue, 100),
                    drunkenness: drinkItem.isAlcoholic ? Math.min(player.drunkenness + drinkItem.alcoholContent, 100) : player.drunkenness
                });
                setGirlfriend({
                    ...girlfriend,
                    thirst: Math.min(girlfriend.thirst + drinkItem.restoreValue, 100),
                    drunkenness: drinkItem.isAlcoholic ? Math.min(girlfriend.drunkenness + drinkItem.alcoholContent, 100) : girlfriend.drunkenness
                });
                console.log(`Bought drink item: ${drinkItem.name}`);
                console.log(`Player : ${player.thirst} ${player.drunkenness}, Girlfriend : ${girlfriend.thirst} ${girlfriend.drunkenness}, Tickets left: ${tickets - drinkItem.price}`);
            } else alert("Not enough tickets to buy this drink!");



        } else console.error("Invalid item type");







    }

    return (
        <div>

            <h1>FoodBar</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1em' }}>
                {foodData.map((foodItem: FoodData) => (
                    <div key={foodItem.foodId}>
                        <h2>{foodItem.name}</h2>
                        <p>Hunger Restore: {foodItem.restoreValue}</p>
                        <p>Price: {foodItem.price} tickets</p>
                        <button onClick={() => handleBuy("food", foodItem.foodId)}>Buy</button>
                    </div>
                ))}
                {drinkData.map((drinkItem: DrinkData) => (
                    <div key={drinkItem.drinkId}>
                        <h2>{drinkItem.name}</h2>
                        <p>Thirst Restore: {drinkItem.restoreValue}</p>
                        {drinkItem.isAlcoholic && <p>Alcohol Content: {drinkItem.alcoholContent}</p>}
                        <p>Price: {drinkItem.price} tickets</p>
                        <button onClick={() => handleBuy("drink", drinkItem.drinkId)}>Buy</button>
                    </div>
                ))}

            </div>

            <ChangeScreenButton to="/" text="Go Back" />
        </div>
    )
}

export default FoodBar;