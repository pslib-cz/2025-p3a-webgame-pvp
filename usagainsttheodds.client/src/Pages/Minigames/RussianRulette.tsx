import { useState } from "react";
import type { Screen, GameResult } from "../../Types/GameType"
import MiniGamePreset from "../../Components/MinigamePreset";


type RussianRuletteProps = {
    setCurrentScreen: (screen: Screen) => void
}

const RussianRulette = ({ setCurrentScreen }: RussianRuletteProps) => {


    const [gameState, setGameState] = useState<"idle" | "barrelOut" | "barrelIn" | "spun" | "shot" >("idle");
    const [barrelPosition, setBarrelPosition] = useState<number | null>(null);
    const [bulletPosition, setBulletPosition] = useState<number | null>(null);
    const [result, setResult] = useState<GameResult>(null);


//roztoci barrel a da ho do nahodne pozice (pouze pro prehlednost)
    const handleSpin = () => {
        setBarrelPosition(Math.floor(Math.random() * 6 + 1));
    }

//zkontroluje jestli se shoduje pozice naboje a barellu
    const handleShoot = () => {
        if (barrelPosition === bulletPosition){
            setResult("win")
        }else setResult("lose")

    }




    const Rulette = (endGame: () => void) => {

        switch (gameState) {
            case "idle":
                return <button onClick={() => setGameState("barrelOut")}>Take out the barrel</button>;
            case "barrelOut":

                return (

                    <div className="barrel--empty">
                        
                        {[1,2,3,4,5,6].map((num) => (

                        <button
                            key={num}
                            onClick={() => {setBulletPosition(num), setGameState("barrelIn")}}
                            className={bulletPosition === num ? "selected" : ""}
                        >
                            {num}
                        </button>

                        ))}

                    </div>



                )

            case "barrelIn":
                return <button onClick={() => { handleSpin();setGameState("spun")}}>Spin the barrel</button>;
            case "spun":
                return <button onClick={() => {handleShoot(); setGameState("shot")}}>Shoot</button>;
            case "shot":
                return <button onClick={() => endGame()}>End</button>;

            default:
                return null;


        }

    }








    return (
        <MiniGamePreset Result={result} setCurrentScreen={setCurrentScreen} GameName="Russian Rulette" GameInfo="A dangerous game of chance.">

            {({ endGame }) => (
                <div>
                    <div className="button--continue">
                        {Rulette(endGame)}
                    </div>
                </div>
            )}
        </MiniGamePreset>
    )
}


export default RussianRulette;