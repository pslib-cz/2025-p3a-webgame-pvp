import React, { useState } from "react";
import dH from "../../Helpers/deckHelper";
import type { Deck, Hand } from "../../Types/PlayingCardType";
import { useRef, useEffect } from "react";
import CardHand from "../../Components/Cards/CardHand";
import type { GameResult } from "../../Types/GameType";
import { useMinigame } from "../../Hooks/useMinigame";
import styles from "../../assets/styles/minigames/Blackjack.module.css";
import minigameStyles from "../../assets/styles/Minigames/Minigame.module.css"



const Blackjack = () => {

    const deckCount: number = 1; // deckCount - počet balíčků použitých ve hře
    const resolveCardAnimation = useRef<(() => void) | null>(null); // resolveCardAnimation - ref na funkci pro vyřešení promise po dokončení animace karty
    
    //pozice balíčku a ruk pro animace
    const deckPosition: [number, number] = [85, 45]; // deckPosition - pozice balíčku pro animace
    const playerHandPosition: [number, number] = [50, 75]; // playerHandPosition - pozice ruky hráče pro animace
    const dealerHandPosition: [number, number] = [50, 45]; // dealerHandPosition - pozice ruky dealera pro animace
    const playerDeckOffset: [number, number] = [deckPosition[0]-playerHandPosition[0], deckPosition[1]-playerHandPosition[1]]; // playerDeckPosition - pozice balíčku pro animace hráče
    const dealerDeckOffset: [number, number] = [deckPosition[0]-dealerHandPosition[0], deckPosition[1]-dealerHandPosition[1]]; // dealerDeckPosition - pozice balíčku pro animace dealera




    const [started, setStarted] = useState<boolean>(false);
    const [playerHand, setPlayerHand] = useState<Hand>([]) // playerHand, dealerHand - pole karet pro hráče a dealera
    const [dealerHand, setDealerHand] = useState<Hand>([])
    const [playerHandValue, setPlayerHandValue] = useState<number>(0); // playerHandValue, dealerHandValue - číselné hodnoty ruk (spočítané)
    const [dealerHandValue, setDealerHandValue] = useState<number>(0);
    const [dealerHiddenCards, setDealerHiddenCards] = useState<number[]>([1]); // dealerHiddenCards - indexy karet dealera které jsou skryté (při startu první karta)
    const [deck, setDeck] = useState<Deck>(dH.createShuffledDeck(deckCount)); // deck - aktuální balíček (používá se i deckRef pro synchronní přístup)
    const [buttonsVisible, setButtonsVisible] = useState<boolean>(false); // buttonsVisible - zda se zobrazují tlačítka Hit/Stand
    const [blackjack, setBlackjack] = useState<boolean>(false);
    
    
    const { endGame, setResult, result, setRewardMultiplier } = useMinigame();//získání endGame funkce z kontextu
    
    
    const playerHandRef = useRef<Hand>([]); // Ref na ruku hráče pro synchronní přístup
    const dealerHandRef = useRef<Hand>([]); // Ref na ruku dealera pro synchronní přístup
    const deckRef = useRef<Deck>(deck); // Ref na balíček pro synchronní čtení mimo React state (řeší race condition)
    useEffect(() => {
        playerHandRef.current = playerHand;
    }, [playerHand]);
    useEffect(() => {
        dealerHandRef.current = dealerHand;
    }, [dealerHand]);
    useEffect(() => {
        deckRef.current = deck;
    }, [deck]);



    // handleStart - zahájí novou hru
    const handleStart = () => {
        console.log("Starting Blackjack game...");
        setStarted(true);
        dealInitialHands()
    }

    // handleCardAnimationEnd zavolají CardHands, když karta dodela animaci
    const handleCardAnimationEnd = () => {
        if (resolveCardAnimation.current) {

            const pValue = calculateHandValue(playerHandRef.current);
            setPlayerHandValue(pValue);
            const dValue = calculateHandValue(dealerHandRef.current, dealerHiddenCards);
            setDealerHandValue(dValue);

            resolveCardAnimation.current();
            resolveCardAnimation.current = null;
        }
    };

    const dealCard = (target: "player" | "dealer"): Promise<void> => {

        return new Promise((resolve) => {
            resolveCardAnimation.current = resolve; // uloží resolve funkci do refu, aby ji mohl zavolat PlayingCard po animaci

            const {card, newDeck} = dH.drawCard(deckRef.current);
            if (!card) {
                console.error("Deck is empty, cannot deal more cards.");
                resolve();
                return;
            }

            if (target === "player") {
                playerHandRef.current = [...playerHandRef.current, card];
                setPlayerHand([...playerHandRef.current]);
            } else {
                dealerHandRef.current = [...dealerHandRef.current, card];
                setDealerHand([...dealerHandRef.current]);
            }
            
            deckRef.current = newDeck;
            setDeck(newDeck);
        });
    }

    // dealInitialHands - rozdá počáteční karty hráči a dealerovi
    const dealInitialHands = async () => {

        await dealCard("player");
        await dealCard("dealer");
        await dealCard("player");
        await dealCard("dealer");
        
        console.log("Initial hands dealt. Player Hand:", calculateHandValue(playerHandRef.current), "Dealer Hand:", calculateHandValue(dealerHandRef.current, dealerHiddenCards));

        // pokud hráč dostal blackjack, vyřeší to hned lokálně
        if (calculateHandValue(playerHandRef.current) === 21) {
            handleBlackjack();
        } else setButtonsVisible(true);

    }

    // handleBlackjack - zpracuje situaci kdy hráč má blackjack při rozdání
    const handleBlackjack = async () => {
        console.log("Player has blackjack!");
        setRewardMultiplier(1.5);
        setBlackjack(true);

        const playerValue = calculateHandValue(playerHandRef.current);
        const dealerValue = await dealerAction();

        setButtonsVisible(false);
        await decideGameResult(playerValue, dealerValue)
    }



    // handleHit - hráč táhne kartu
    const handleHit = async () => {
        console.log("Player hits.");
        setButtonsVisible(false);

        await dealCard("player");        

        const newPlayerValue = calculateHandValue(playerHandRef.current);
        console.log("New player hand value:", newPlayerValue);

        if (newPlayerValue >= 21) {
            if (newPlayerValue === 21) {
                console.log("Player has 21!");
            } else {
                console.log("Player busts!");
            }
            revealDealersCards();
            decideGameResult(newPlayerValue, calculateHandValue(dealerHandRef.current));
        } else {
            setButtonsVisible(true);
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
    const handleStand = async () => {
        console.log("Player stands.");
        setButtonsVisible(false);
        const playerHandValue = calculateHandValue(playerHand);
        const dealerValue = await dealerAction()
        await decideGameResult(playerHandValue, dealerValue)
    }

    //tohle predelat na async

    // dealerAction - logika dealera: odehrává karty dokud nemá >= 17
    const dealerAction = async () => {
        console.log("Dealer's turn.");
        setButtonsVisible(false);
        await revealDealersCards();

        // Použije předané karty, nebo aktuální state, pokud nejsou předány
        let localDealerHandValue = calculateHandValue(dealerHandRef.current);

        while (localDealerHandValue < 17) {
            await dealCard("dealer");
            localDealerHandValue = calculateHandValue(dealerHandRef.current);
        }

        console.log("Dealer's turn ended with hand value:", localDealerHandValue);
        return localDealerHandValue;
    }

    // revealDealersCards - odhalí karty dealera
    const revealDealersCards = (): Promise<void> => {
        console.log("Revealing dealer's cards.");
        
        if (dealerHiddenCards.length === 0) return Promise.resolve();

        return new Promise((resolve) => {
            setDealerHiddenCards([]);
            resolveCardAnimation.current = resolve;
        });
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

    }
    
    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes("resultScreenFadeIn")) {
            endGame();
        }
    }
    

    return (
        <div className={`${styles.blackjackContainer} ${minigameStyles.container}`}>
            <span className={styles.deck} style={{left: `${deckPosition[0]}%`, top: `${deckPosition[1]}%`}}/>
            {!started && (
                <button className={`button ${styles.startButton}`} onClick={handleStart}>Deal cards</button>
            )}
            {started && (
                <>
                    <div
                        className={`${styles.handContainer} ${styles.dealerHandContainer}`}
                        style={{left: `${dealerHandPosition[0]}%`, top: `${dealerHandPosition[1]}%`}}
                    >
                        <p className={styles.handScore}>{dealerHandValue}</p>
                        <CardHand hand={dealerHandRef.current} hiddenCards={dealerHiddenCards} deckPosition={dealerDeckOffset} onAnimationEnd={handleCardAnimationEnd} />
                    </div>
                    <div
                        className={`${styles.handContainer} ${styles.playerHandContainer}`}
                        style={{left: `${playerHandPosition[0]}%`, top: `${playerHandPosition[1]}%`}}
                    >
                        <p className={styles.handScore}>{playerHandValue}</p>
                        <CardHand hand={playerHandRef.current} deckPosition={playerDeckOffset} onAnimationEnd={handleCardAnimationEnd} />
                    </div>
                    
                    {buttonsVisible && (
                        <div className={styles.buttonsContainer}>
                            <button className={`button`} onClick={handleHit}>Hit</button>
                            <button className={`button`} onClick={handleStand}>Stand</button>
                        </div>
                    )}
                    {result && (
                        <div onAnimationEnd={handleAnimationEnd} className={styles.resultScreen}>
                            {blackjack && <span className={styles.resultText}>Blackjack!</span>}
                            {result === "win" && <span className={styles.resultText}>You win!</span>}
                            {result === "lose" && <span className={styles.resultText}>You lose!</span>}
                            {result === "draw" && <span className={styles.resultText}>It's a draw!</span>}
                        </div>
                    )}
                </>
            )}
            
        </div>
    );
}

export default Blackjack;