import { useState } from "react";
import type { Screen, GameResult } from "../../Types/GameType"
import MiniGamePreset from "../../Components/MinigamePreset";
import rS from "../../Services/randomService";


type RussianRuletteProps = {
    setCurrentScreen: (screen: Screen) => void;
    Tickets: (x:number) => void;
}

const RussianRulette:React.FC<RussianRuletteProps>= ({ setCurrentScreen,Tickets  }) => {


    const winTickets: number = 50; 

    const [gameState, setGameState] = useState<"idle" | "barrelOut" | "barrelIn" | "spun" | "shot" >("idle");
    const [barrelPosition, setBarrelPosition] = useState<number | null>(null);
    const [bulletPosition, setBulletPosition] = useState<number | null>(null);
    const [result, setResult] = useState<GameResult>(null);


//roztoci barrel a da ho do nahodne pozice (pouze pro prehlednost)
    const handleSpin = () => {
        setBarrelPosition(rS.generate(1,6));
        console.log(barrelPosition);//wtf picovina?
    }

//zkontroluje jestli se shoduje pozice naboje a barellu
    const handleShoot = () => {
        console.log(barrelPosition);
        if (barrelPosition === bulletPosition){
            setResult("win")
            Tickets(winTickets);
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
        <MiniGamePreset Tickets={Tickets} Result={result} setCurrentScreen={setCurrentScreen} GameName="Russian Rulette" GameInfo="A dangerous game of chance.">

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