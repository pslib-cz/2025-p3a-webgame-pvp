import { useOutletContext } from "react-router-dom";
import { useMinigame } from "../../Hooks/useMinigame"
import ChangeScreenButton from "../ChangeScreenButton"




const MinigameInfo = ({ }) => {

    const { exitPagePath, playGame, data } = useMinigame();

    const { setTickets, tickets } = useOutletContext<{
        setTickets: React.Dispatch<React.SetStateAction<number>>;
        tickets: number;
    }>();

    const handlePlay = () => {
        if (data!.price > tickets) {
            alert("Not enough tickets to play this game.");
            return;
        } else {
            console.log("Starting minigame, price:", data!.price);
            setTickets(prev => prev - data!.price);
            playGame();
        }
    }
    

    return (
        <div>
            <h2>{data ? data.name : "No name available"}</h2>
            <p>
                {data ? data.description : "No description available"}
            </p>
            <ChangeScreenButton to={exitPagePath} text="Exit" />
            <button onClick={handlePlay}>Play</button>
        </div>
    )
}

export default MinigameInfo;