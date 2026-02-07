import { useMinigame } from "../../Hooks/useMinigame"
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import ChangeScreenButton from "../ChangeScreenButton"
import introstyles from "../../assets/styles/Intro.module.css"




const MinigameInfo = ({ }) => {

    const { exitPagePath, playGame, data, bet, setBet } = useMinigame();
    const { tickets } = useOwnOutlet();

    const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const inputValue = e.currentTarget.value;

        // Pokud je input prázdný (uživatel vše smazal), nastavíme 0 a skončíme
        if (inputValue === "") {
            setBet(0);
            return;
        }

        // Jinak převedeme na číslo
        const value = Number(inputValue);

        if (value > tickets) {
            setBet(tickets);
        } else {
            setBet(Math.abs(Math.round(value)));
        }
    }

    return (
        <div>
            <div>
                <h2>{data ? data.name : "No minigame name available"}</h2>
                <p>
                    {data ? data.description : "No minigame description available"}
                </p>
            </div>
            <div>
                <div className={introstyles.nameInputContainer}>
                    <label>Place your bet: </label>
                    <div className={introstyles.nameInputBox}>
                        <input className={introstyles.nameInput} type="number" min={1} max={tickets} onChange={(e) => handleBetChange(e)} value={bet === 0 ? "" : bet} placeholder="0" />
                    </div>
                    <button onClick={() => setBet(tickets)}>All in</button>
                </div>
            </div>
            <div>
                <ChangeScreenButton to={exitPagePath} text="Exit" />
                <button className="button" onClick={playGame}>Play</button>
            </div>
        </div>
    )
}

export default MinigameInfo;