import { useState } from "react";
import type { Screen, GameResult } from "../../Types/GameType"
import MiniGamePreset from "../../Components/MinigamePreset";
import rH from "../../Helpers/randomGeneratorHelper";


type RussianRuletteProps = {
    setCurrentScreen: (screen: Screen) => void;   // funkce na přepnutí screenů
    Tickets: (x: number) => void;                 // funkce na přidání/odebrání tiketů
}

const RussianRulette: React.FC<RussianRuletteProps> = ({ setCurrentScreen, Tickets }) => {

    const winTickets: number = 50;  // kolik tiketů získáš při výhře

    // všelijaké stavy hry – v jaké části hráč zrovna je
    const [gameState, setGameState] = useState<"idle" | "barrelOut" | "barrelIn" | "spun" | "shot">("idle");

    // pozice bubínku (kam se natočí)
    const [barrelPosition, setBarrelPosition] = useState<number | null>(null);

    // pozice náboje, kterou zvolil hráč
    const [bulletPosition, setBulletPosition] = useState<number | null>(null);

    // výsledek hry — výhra / prohra / null
    const [result, setResult] = useState<GameResult>(null);


    // 🔄 Funkce která náhodně nastaví pozici bubínku (1–6)
    const handleSpin = () => {
        setBarrelPosition(rH.generate(1, 6));  // dá random číslo 1–6
        console.log(barrelPosition);          // POZOR: ukazuje starou hodnotu — React stav se updateuje async
    }

    // 💥 Funkce, která zkontroluje jestli hráč trefil náboj
    const handleShoot = () => {
        console.log(barrelPosition);

        // pokud se pozice bubínku a náboje shoduje = boom = výhra
        if (barrelPosition === bulletPosition) {
            setResult("win");
            Tickets(winTickets);     // připíše tikety za výhru
        } else {
            setResult("lose");       // když se neshoduje = hráč přežil = prohra
        }
    }



    // 🎮 Tahle funkce na základě stavu hry renderuje správné tlačítko/obsah
    const Rulette = (endGame: () => void) => {

        switch (gameState) {

            // 🟢 Start hry — hráč vytáhne bubínek
            case "idle":
                return <button onClick={() => setGameState("barrelOut")}>Take out the barrel</button>;

            // 🔧 Hráč volí do kterého slotu dá náboj
            case "barrelOut":
                return (
                    <div className="barrel--empty">

                        {[1, 2, 3, 4, 5, 6].map((num) => (

                            <button
                                key={num}
                                onClick={() => {
                                    setBulletPosition(num);     // dá náboj do pozice
                                    setGameState("barrelIn");   // pokračuje dál
                                }}
                                className={bulletPosition === num ? "selected" : ""}
                            >
                                {num}
                            </button>

                        ))}

                    </div>
                )

            // 🔄 Natočí bubínek
            case "barrelIn":
                return <button
                    onClick={() => {
                        handleSpin();          // random natočení
                        setGameState("spun");  // další fáze
                    }}
                >
                    Spin the barrel
                </button>;

            // 🔫 Stisk spouště
            case "spun":
                return <button
                    onClick={() => {
                        handleShoot();         // zkontroluje výsledek
                        setGameState("shot");  // jde na konec hry
                    }}
                >
                    Shoot
                </button>;

            // 🏁 Konec hry — tlačítko na návrat zpět
            case "shot":
                return <button onClick={() => endGame()}>End</button>;

            default:
                return null;
        }

    }



    // 📦 Obalovač minihry — generuje UI kolem hry (layout, styl, atd.)
    return (
        <MiniGamePreset
            Tickets={Tickets}
            Result={result}
            setCurrentScreen={setCurrentScreen}
            GameName="Russian Rulette"
            GameInfo="A dangerous game of chance."
        >
            {/* MiniGamePreset poskytuje endGame callback */}
            {({ endGame }) => (
                <div>
                    <div className="button--continue">
                        {Rulette(endGame)}   {/* vykreslí aktuální fázi hry */}
                    </div>
                </div>
            )}
        </MiniGamePreset>
    )
}

export default RussianRulette;