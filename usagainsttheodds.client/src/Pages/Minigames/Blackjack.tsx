import { useState } from "react";
import ds from "../../Services/deckService";
import type { Deck, Hand } from "../../Types/PlayingCardType";
import { useRef, useEffect } from "react";
import CardHand from "../../Components/Cards/CardHand";
import type { GameResult } from "../../Types/GameType";


const Blackjack = () => {

    const [playerHand, setPlayerHand] = useState<Hand>([])
    const [dealerHand, setDealerHand] = useState<Hand>([])
    const [playerHandValue, setPlayerHandValue] = useState<number>(0);
    const [dealerHandValue, setDealerHandValue] = useState<number>(0);
    const [dealerHiddenCards, setDealerHiddenCards] = useState<number[]>([1]);
    const deckCount: number = 1
    const [deck, setDeck] = useState<Deck>(ds.createShuffledDeck(deckCount));
    const [turn, setTurn] = useState<"player" | "dealer">("player");
    const [gameResult, setGameResult] = useState<GameResult | null>(null);

    const deckRef = useRef<Deck>(deck); // ref pro ulozeni aktualniho stavu balicku kvuli asynchronnimu pristupu
    useEffect(() => {
        deckRef.current = deck 
    }, [deck]);

    // funkce pro tahani karet
    const draw = (person: "player" | "dealer", count: number = 1) => {
        const drawn: Hand = [];
        let local = deckRef.current;
        for (let i = 0; i < count; i++) { 
            const { card, newDeck } = ds.drawCard(local);
            if (!card) break;
            drawn.push(card);
            local = newDeck;
        }
        deckRef.current = local;
        if (drawn.length > 0) {
            if (person === "player") setPlayerHand(p => [...p, ...drawn]);
            else setDealerHand(d => [...d, ...drawn]);
            setDeck([...deckRef.current]);
        }
    };

    const calculateHandValue = (hand: Hand, hiddenCards?: number[]): number => {
        let handValue = 0
        let As = 0

        for (const card of hand) {
            if (hiddenCards && hiddenCards.includes(hand.indexOf(card) + 1)) {
                continue; // Skip hidden karty
            }
            const cv = card.value
            if (cv === "A") {
                As++
            } else if (cv ==="J" || cv ==="Q" || cv === "K") {
                handValue += 10
            } else {
                handValue += Number.parseInt(cv, 10)
            }
        }

        //vyhodnotí Áčka
        handValue += As * 11 //bere všechny jako 11
        while (handValue > 21 && As > 0) { //když ruka přesahuje 21 tak odečte 10 za každy eso dokud neni pod 21
            handValue -= 10
            As--
        }

        return handValue
    }

    //změní hodnotu ruky pokaždé co se změní počet karet
    useEffect(() => {
        setDealerHandValue(calculateHandValue(dealerHand, dealerHiddenCards))
    }, [dealerHand, dealerHiddenCards])
    useEffect(() => {
        setPlayerHandValue(calculateHandValue(playerHand))
    }, [playerHand])

    const switchTurns = () => {
        setTurn(prev => prev === "dealer" ? "player" : "dealer");
    }

    const handleDeckClick = () => {
        draw(turn);
        switchTurns()
    }

    const revealDealersCards = () => {
        setDealerHiddenCards([]);
    }

    const reset = () => {
        setGameResult(null);
        setDealerHand([])
        setPlayerHand([])
        setTurn("player")
        const newDeck = ds.createShuffledDeck(deckCount);
        deckRef.current = newDeck;   // synchronně aktualizovat ref
        setDeck(newDeck)
        setDealerHiddenCards([1])
    }

    const dealInitialHands = () => {
        let local = [...deckRef.current];
        const pHand: Hand = [];
        const dHand: Hand = [];

        for (let round = 0; round < 2; round++) {
            const pDraw = ds.drawCard(local);
            if (pDraw.card) pHand.push(pDraw.card);
            local = pDraw.newDeck;

            const dDraw = ds.drawCard(local);
            if (dDraw.card) dHand.push(dDraw.card);
            local = dDraw.newDeck;
        }

        // nastavíme stavy najednou (UI se aktualizuje asynchronně)
        setPlayerHand(pHand);
        setDealerHand(dHand);
        setDeck(local);
        setTurn("player");
        setPlayerHandValue(calculateHandValue(pHand));
        setDealerHandValue(calculateHandValue(dHand, [1]));

        // pokud hráč dostal blackjack, vyřešíme to hned lokálně
        if (calculateHandValue(pHand) === 21) {
            console.log("Player has blackjack!");
            handleStand();
        }

    }

    const handleStart = () => {
        reset()
        dealInitialHands()
    }

    const handleHit = () => {
        draw("player")
    }

    const handleStand = async () => {
        const dealerValue = await dealerAction()
        decideGameResult(playerHandValue, dealerValue)
    }

    const dealerAction = async () => {
        setTurn("dealer");
        revealDealersCards()
        let localDealerHandValue = calculateHandValue(dealerHand);
        let localDealerHand = [...dealerHand];
        let localDeck = [...deckRef.current];
        while (localDealerHandValue < 17) {
            const { card, newDeck } = ds.drawCard(localDeck);
            if (!card) break;
            localDealerHand.push(card);
            localDeck = newDeck;
            localDealerHandValue = calculateHandValue(localDealerHand);
        }
        setDealerHand(localDealerHand);
        setDeck(localDeck);
        setDealerHandValue(localDealerHandValue);

        return localDealerHandValue;
    }

    const decideGameResult = (player: number, dealer: number): GameResult => {
        const result = (): GameResult => {
            if (player > 21) return "lose";            
            if (dealer > 21) return "win";
            if (player > dealer) return "win";            
            if (dealer > player) return "lose";
            return "draw";
        }
        const resultValue = result();
        setGameResult(resultValue);
        return resultValue;
    }


    return (
        <>
            <div>Blackjack Component</div>
            <button onClick={handleStart}>Start game</button>
            <button onClick={reset}>Reset</button>
            <button onClick={revealDealersCards}>Reveal</button>


            <div>
                {deck.length>0 && <img onClick={handleDeckClick} style={{height: "136px"}} src="src\assets\images\Cards\deckOfCards.png" alt="" />}
                <p>{deck.length} cards left</p>
                <h2>Dealer Hand: {dealerHandValue}</h2>
                <CardHand hand={dealerHand} hiddenCards={dealerHiddenCards}/>
                <h2>Player Hand: {playerHandValue}</h2>
                <CardHand hand={playerHand} />
            </div>
            {turn === "player" && (
                <div>
                    <button onClick={handleHit}>Hit</button>
                    <button onClick={handleStand}>Stand</button>
                </div>
            )}
            {gameResult && (
                <>
                    {gameResult === "win" ? <h2>You win!</h2> :
                    gameResult === "lose" ? <h2>You lose!</h2> : <h2>It's a draw!</h2>}
                </>
            )}
        </>
    );
}

export default Blackjack;