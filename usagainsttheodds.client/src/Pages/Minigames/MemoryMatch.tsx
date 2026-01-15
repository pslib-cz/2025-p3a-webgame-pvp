import { useState, useEffect, use } from "react"
import MemoryBoard from "../../Components/MemoryMatch/Board"
import type { CardType } from "../../Types/CardType";
import style from "../../assets/styles/Minigames/Memorymatch.module.css"


function createCards(): CardType[] {
    const values = [...Array(8).keys(), ...Array(8).keys()] //opakuje se, potrebuji pary
    const cards: CardType[] = [];

    //zamichani na hraci plochu
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
    const [selectedIds, setSelectedIds] = useState<number[]>([]) //otocena karta po kliknuti
    const [isResolving, setIsResolving] = useState(false) //at nejde treti karta pri vyberu

    function handleCardClick(id: number) {
        if (playingTurn == "computer") return //neklikatelne pro pocitac

        const card = cards.find(c => c.id === id)!
        if (card.facingUp || card.collected) return
        if (selectedIds.length === 2) return


        setCards(prev => prev.map(card => card.id === id ? { ...card, facingUp: true } : card ))
        setSelectedIds(prev => [...prev, id])
    }

    //VYBIRANI A POROVNANI KARET
    useEffect(() => {
        if (selectedIds.length !== 2) return

        const [a, b] = selectedIds
        const cardA = cards.find(c => c.id === a)!
        const cardB = cards.find(c => c.id === b)!

        setIsResolving(true)

        if (cardA.value === cardB.value) { //shoda
            setCards(prev =>
                prev.map(card =>
                card.id === a || card.id === b ? { ...card, collected: true } : card
                )
            )
            setSelectedIds([])
            setIsResolving(false)
        } else {
            setTimeout(() => {
                setCards(prev =>
                prev.map(card =>
                    card.id === a || card.id === b ? { ...card, facingUp: false } : card
                )
                )
                setSelectedIds([])
                setIsResolving(false)
                setTurn(prev => prev === "human" ? "computer" : "human") //prepne tah kdyz neni shoda
            }, 800)
        }

        setSelectedIds([])
    }, [selectedIds, cards])

    //TAH POCITACE
    useEffect(() => {
        if (playingTurn !== "computer") return
        if (isResolving) return

        const unknownCards = cards.filter(c => !c.facingUp && !c.collected)
        if (unknownCards.length === 0) return

        // zatim uplne nahodne
        const randomCard = unknownCards[Math.floor(Math.random() * unknownCards.length)]

        const timer =setTimeout(() => {
            handleCardClick(randomCard.id)
            console.log("Computer clicked card " + randomCard.id)
        }, 500) //delay jen at to vypada lip

        return () => clearTimeout(timer)
    }, [playingTurn])

    return (
        <div>
            <h1>Memory Match Minigame</h1>
            <div className={style.board}>
                <MemoryBoard  cards={cards} onCardClick={handleCardClick} />
            </div>
        </div>
    )

}
export default MemoryMatch;