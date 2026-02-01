import { useState, useEffect } from "react"
import MemoryBoard from "../../Components/MemoryMatch/Board"
import type { CardType } from "../../Types/CardType";
import style from "../../assets/styles/Minigames/Memorymatch.module.css"


type MemoryItem = { id: number; value: number };


function createCards(): CardType[] {
    const values = [...Array(8).keys(), ...Array(8).keys()]

    // zamíchání
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[values[i], values[j]] = [values[j], values[i]]
    }

    return values.map((value, index) => ({
        id: index,
        value: value,
        facingUp: false,
        collected: false
    }));
}

const MemoryMatch = () => {
    const [playingTurn, setTurn] = useState<"human" | "computer">("human")
    const [cards, setCards] = useState<CardType[]>(createCards())
    const [selectedIds, setSelectedIds] = useState<number[]>([]) 
    const [isResolving, setIsResolving] = useState(false)
    
    // pamet pocitace
    const [computerMemory, setComputerMemory] = useState<MemoryItem[]>([])

    // TADY MENIM POCET PAMETI
    const addToMemory = (card: CardType) => {
        setComputerMemory(prev => {

            if (prev.find(m => m.id === card.id)) return prev;
            const newMemory = [...prev, { id: card.id, value: card.value }];
            
            if (newMemory.length > 6) {
                newMemory.shift(); 
            }
            return newMemory;
        });
    };

    function handleCardClick(id: number, isComputer = false) {

        if (playingTurn === "computer" && !isComputer) return 

        const card = cards.find(c => c.id === id)!
        
        if (card.facingUp || card.collected || isResolving) return
        if (selectedIds.length >= 2) return

        setCards(prev => prev.map(c => c.id === id ? { ...c, facingUp: true } : c ))
        setSelectedIds(prev => [...prev, id])
        addToMemory(card);
    }

    // VYHODNOCOVANI TAHU
    useEffect(() => {
        if (selectedIds.length !== 2) return

        const [idA, idB] = selectedIds
        const cardA = cards.find(c => c.id === idA)!
        const cardB = cards.find(c => c.id === idB)!

        setIsResolving(true) // Zablokuje další klikání

        if (cardA.value === cardB.value) {
            // SHODA
            setComputerMemory(prev => prev.filter(m => m.value !== cardA.value));

            setTimeout(() => {
                setCards(prev =>
                    prev.map(card =>
                        card.id === idA || card.id === idB ? { ...card, collected: true } : card
                    )
                )
                setSelectedIds([])
                setIsResolving(false)
            }, 500)
        } else {
            // NESHODA
            setTimeout(() => {
                setCards(prev =>
                    prev.map(card =>
                        card.id === idA || card.id === idB ? { ...card, facingUp: false } : card
                    )
                )
                setSelectedIds([])
                setIsResolving(false)
                setTurn(prev => prev === "human" ? "computer" : "human")
            }, 1200)
        }
    }, [selectedIds, cards])


    // POCITAC
    useEffect(() => {
        if (playingTurn !== "computer" || isResolving) return

        const makeMove = () => {
            const unknownCards = cards.filter(c => !c.facingUp && !c.collected)
            if (unknownCards.length === 0) return

            let cardToPickId: number | null = null;

            // prvni karta
            if (selectedIds.length === 0) {
                // hleda par v pameti
                const pairInMemory = findPairInMemory(computerMemory, cards);
                if (pairInMemory) {
                    cardToPickId = pairInMemory;
                } else {
                    // nemame par, nahodne
                    const random = unknownCards[Math.floor(Math.random() * unknownCards.length)];
                    cardToPickId = random.id;
                }
            } 
            
            // druha karta
            else if (selectedIds.length === 1) {
                const firstCardId = selectedIds[0];
                const firstCard = cards.find(c => c.id === firstCardId)!;

                // mame par, hleda jine id stejnou hodnotu
                const matchInMemory = computerMemory.find(m => m.value === firstCard.value && m.id !== firstCardId && !isCollected(m.id, cards));

                if (matchInMemory) {
                    cardToPickId = matchInMemory.id;
                } else {
                    // nemame par, nahdone
                    const validOptions = unknownCards.filter(c => c.id !== firstCardId);
                    if (validOptions.length > 0) {
                         const random = validOptions[Math.floor(Math.random() * validOptions.length)];
                         cardToPickId = random.id;
                    }
                }
            }

            if (cardToPickId !== null) {
                handleCardClick(cardToPickId, true); // true = hraje počítač
                console.log(`Computer picking: ${cardToPickId} (Memory size: ${computerMemory.length})`);
            }
        };

        const delay = selectedIds.length === 0 ? 1000 : 1200; 
        const timer = setTimeout(makeMove, delay);

        return () => clearTimeout(timer);

    }, [playingTurn, selectedIds, isResolving, cards, computerMemory])


    function isCollected(id: number, currentCards: CardType[]) {
        return currentCards.find(c => c.id === id)?.collected;
    }

    function findPairInMemory(memory: MemoryItem[], currentCards: CardType[]): number | null {
        const counts: Record<number, number[]> = {};
        
        for (const item of memory) {
            if (isCollected(item.id, currentCards)) continue; // Ignoruj již sebrané
            if (!counts[item.value]) counts[item.value] = [];
            counts[item.value].push(item.id);
        }

        for (const value in counts) {
            if (counts[value].length >= 2) {
                return counts[value][0];
            }
        }
        return null;
    }

    return (
        <div>
            <h1>Memory Match: {playingTurn === "human" ? "Hraje Hráč" : "Hraje Počítač"}</h1>
            <div className={style.board}>
                <MemoryBoard cards={cards} onCardClick={(id) => handleCardClick(id, false)} />
            </div>
            
            <div>
                PC Memory: {JSON.stringify(computerMemory)}
            </div>
        </div>
    )
}

export default MemoryMatch;