import { useState } from "react";
import dH from "../../Helpers/deckHelper";
import type { Deck, Hand } from "../../Types/PlayingCardType";
import { useRef, useEffect } from "react";
import CardHand from "../../Components/Cards/CardHand";
import type { GameResult } from "../../Types/GameType";
import { useMinigame } from "../../Hooks/useMinigame";
import styles from "../../assets/styles/minigames/Blackjack.module.css";



const Blackjack = () => {

    const [started, setStarted] = useState<boolean>(false);
    const [playerHand, setPlayerHand] = useState<Hand>([]) // playerHand, dealerHand - pole karet pro hráče a dealera
    const [dealerHand, setDealerHand] = useState<Hand>([])
    const [playerHandValue, setPlayerHandValue] = useState<number>(0); // playerHandValue, dealerHandValue - číselné hodnoty ruk (spočítané)
    const [dealerHandValue, setDealerHandValue] = useState<number>(0);
    const [dealerHiddenCards, setDealerHiddenCards] = useState<number[]>([1]); // dealerHiddenCards - indexy karet dealera které jsou skryté (při startu první karta)
    const deckCount: number = 1
    const [deck, setDeck] = useState<Deck>(dH.createShuffledDeck(deckCount)); // deck - aktuální balíček (používá se i deckRef pro synchronní přístup)
    const [buttonsVisible, setButtonsVisible] = useState<boolean>(false); // buttonsVisible - zda se zobrazují tlačítka Hit/Stand

    const { endGame, setResult, result, setRewardMultiplier } = useMinigame();//získání endGame funkce z kontextu
    const endGameTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);//ref na timeout pro ukončení hry aby šel zrušit při unmountu

    const deckRef = useRef<Deck>(deck); // Ref na balíček pro synchronní čtení mimo React state (řeší race condition)
    useEffect(() => {
        deckRef.current = deck;
    }, [deck]);

    // useEffect: aktualizace hodnoty dealerovy ruky když se změní karty nebo skryté indexy
    useEffect(() => {
        setDealerHandValue(calculateHandValue(dealerHand, dealerHiddenCards));
    }, [dealerHand, dealerHiddenCards])
    useEffect(() => {
        setPlayerHandValue(calculateHandValue(playerHand));
    }, [playerHand])




    // useEffect: při mountu komponenty
    useEffect(() => {

        return () => {
            // cleanup při unmountu komponenty
            if (endGameTimeoutRef.current) {
                clearTimeout(endGameTimeoutRef.current);
            }
        }
    }, []);

    // handleStart - zahájí novou hru: resetne stavy a rozdá počáteční karty
    const handleStart = () => {
        console.log("Starting Blackjack game...");
        // reset();
        setStarted(true);
        dealInitialHands()
    }
    // reset - resetuje stavy pro novou hru
    // const reset = () => {

    //     setResult(null);
    //     setDealerHand([])
    //     setPlayerHand([])
    //     setButtonsVisible(false);
    //     const newDeck = dH.createShuffledDeck(deckCount);
    //     deckRef.current = newDeck;   // synchronně aktualizovat ref
    //     setDeck(newDeck)
    //     setDealerHiddenCards([1])
    // }

    // dealInitialHands - rozdá počáteční karty hráči a dealerovi
    const dealInitialHands = () => {
        let local = [...deckRef.current];
        const pHand: Hand = [];
        const dHand: Hand = [];


        // rozdá po jedné kartě hráči a dealerovi dvakrát
        for (let round = 0; round < 2; round++) {
            const pDraw = dH.drawCard(local);
            if (pDraw.card) pHand.push(pDraw.card);
            local = pDraw.newDeck;

            const dDraw = dH.drawCard(local);
            if (dDraw.card) dHand.push(dDraw.card);
            local = dDraw.newDeck;
        }

        // nastaví stavy najednou (UI se aktualizuje asynchronně)
        setPlayerHand(pHand);
        setDealerHand(dHand);
        setDeck(local);
        deckRef.current = local; // synchronně aktualizovat ref
        
        if (calculateHandValue(pHand) === 21) {
            console.warn("Player dealt a blackjack on initial deal!");//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        console.log("Initial hands dealt. Player Hand:", calculateHandValue(pHand), "Dealer Hand:", calculateHandValue(dHand, dealerHiddenCards));

        const playerValue = calculateHandValue(pHand);


        // pokud hráč dostal blackjack, vyřeší to hned lokálně
        if (calculateHandValue(pHand) === 21) {
            handleBlackjack(playerValue); 
        } else setButtonsVisible(true);

    }

    // handleBlackjack - zpracuje situaci kdy hráč má blackjack při rozdání
    const handleBlackjack = (playerHandValue?: number) => {
        console.log("Player has blackjack!");
        setRewardMultiplier(1.5);

        const playerValue = playerHandValue !== undefined ? playerHandValue : calculateHandValue(playerHand);
        const dealerValue = dealerAction();

        setButtonsVisible(false);
        decideGameResult(playerValue, dealerValue)
    }



    // handleHit - hráč táhne kartu
    const handleHit = () => {
        console.log("Player hits.");
        // draw card synchronously from deck service (vrátí card a newDeck)
        const { card, newDeck } = dH.drawCard(deckRef.current);
        if (!card) return;

        // okamžitě aktualizuj ref a stav balíčku
        deckRef.current = newDeck;
        setDeck(newDeck);

        // sestav novou hráčovu ruku a nastav ji do stavu
        const newPlayerHand = [...playerHand, card];
        setPlayerHand(newPlayerHand);

        const newPlayerValue = calculateHandValue(newPlayerHand);
        console.log("New player hand value:", newPlayerValue);

        if (newPlayerValue > 21) {
            console.log("Player busts!");
            // hráč bust -> odhalit dealera a rozhodnout výsledek
            revealDealersCards();
            const dealerValue = calculateHandValue(dealerHand);
            decideGameResult(newPlayerValue, dealerValue);
            setButtonsVisible(false);
        } else if (newPlayerValue === 21) {
            console.log("Player hits 21!");
            // 21 -> dealer odehraje a pak rozhodnout
            const dealerValue = dealerAction();
            decideGameResult(21, dealerValue);
        } else {
            // nic dalšího, pokračuj ve hře (tlačítka zůstanou viditelné)
        }
    }

    // calculateHandValue - spočítá hodnotu ruky (A může být 1 nebo 11), volitelně přeskočí skryté karty
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
            } else if (cv === "J" || cv === "Q" || cv === "K") {
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

    // handleStand - hráč stojí, dealer odehraje a rozhodne se výsledek
    const handleStand = () => {
        console.log("Player stands.");
        setButtonsVisible(false);
        const playerHandValue = calculateHandValue(playerHand);
        const dealerValue = dealerAction()
        decideGameResult(playerHandValue, dealerValue)
    }

    // dealerAction - logika dealera: odehrává karty dokud nemá >= 17
    const dealerAction = () => {
        console.log("Dealer's turn.");
        setButtonsVisible(false);
        revealDealersCards()
        let localDealerHandValue = calculateHandValue(dealerHand);
        let localDealerHand = [...dealerHand];
        let localDeck = [...deckRef.current];
        while (localDealerHandValue < 17) {
            const { card, newDeck } = dH.drawCard(localDeck);
            if (!card) break;
            localDealerHand.push(card);
            localDeck = newDeck;
            localDealerHandValue = calculateHandValue(localDealerHand);
        }
        setDealerHand(localDealerHand);
        setDeck(localDeck);
        setDealerHandValue(localDealerHandValue);

        console.log("Dealer's turn ended with hand value:", localDealerHandValue);
        return localDealerHandValue;
    }
    // revealDealersCards - odhalí všechny karty dealera
    const revealDealersCards = () => {
        console.log("Revealing dealer's cards.");
        setDealerHiddenCards([]);
    }

   
    // decideGameResult - rozhodne výsledek hry na základě hodnot ruk hráče a dealera
    const decideGameResult = (player: number, dealer: number): void => {
        const result = (): GameResult => {
            if (player > 21) {
                if (dealer > 21) {
                    return "draw";
                } else if (dealer <= 21) {
                    return "lose";
                }
            } else if (player <= 21) {
                if (dealer > 21) {
                    return "win";
                } else if (dealer <= 21) {
                    if (player > dealer) {
                        return "win";
                    } else if (dealer > player) {
                        return "lose";
                    } else {
                        return "draw";
                    }
                }
            }
            return "draw"
        }

        const resultValue = result();
        setResult(resultValue);

        console.log("Game ended with result:", resultValue, "Player:", player, "Dealer:", dealer);

        endGameTimeoutRef.current = setTimeout(() => {
            endGame();
        }, 2500)
    }

    

    return (
        <div>
            <h1>Blackjack Component</h1>
            {!started && (
                <button onClick={handleStart}>Deal cards</button>
            )}
            {started && (
                <>
                    <div>
                        <h2>Dealer Hand: {dealerHandValue}</h2>
                        <CardHand hand={dealerHand} hiddenCards={dealerHiddenCards} />
                        <h2>Player Hand: {playerHandValue}</h2>
                        <CardHand hand={playerHand} />
                    </div>
                    {buttonsVisible && (
                        <div>
                            <button onClick={handleHit}>Hit</button>
                            <button onClick={handleStand}>Stand</button>
                        </div>
                    )}
                    {result && (
                        <div className={styles.resultScreen}>
                            <h2>{result}</h2>
                        </div>
                    )}
                </>
            )}
            
        </div>
    );
}

export default Blackjack;