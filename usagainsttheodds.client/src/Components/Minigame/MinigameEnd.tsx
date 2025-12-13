import ChangeScreenButton from "../ChangeScreenButton"
import { useMinigame } from "../../Hooks/useMinigame"
import { useOutletContext } from "react-router-dom";



const MinigameEnd = ({ }) => {
    const { reward, exitPagePath, result } = useMinigame();

    const { setTickets } = useOutletContext<{
        setTickets: React.Dispatch<React.SetStateAction<number>>;
    }>();


    const handleEnd = () => {
        console.log("Handling end of minigame, reward:", reward);
        setTickets(prev => prev + reward);
    }


    return (
        <div>
            {result === "win" ? <h2>You Win!</h2> : result === "lose" ? <h2>You Lose!</h2> : <h2>It's a Draw!</h2>}
            <p>Your reward: {reward} tickets</p>
            <ChangeScreenButton to={exitPagePath} text="Exit" onClick={handleEnd} />
        </div>
    )
}

export default MinigameEnd;