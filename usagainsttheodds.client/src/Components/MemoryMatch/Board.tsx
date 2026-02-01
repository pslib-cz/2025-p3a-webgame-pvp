import Card from './Card';
import type { CardType } from '../../Types/CardType';
import style from "../../assets/styles/Minigames/Memorymatch.module.css"

type MemoryBoardProps = {
    cards: CardType[];
    onCardClick: (id: number) => void
}

const MemoryBoard = ({ cards, onCardClick }: MemoryBoardProps) => {
  return (
    <div className={style.board}>
      {cards.map(card => ( <Card key={card.id} card={card} onClick={onCardClick} /> ))}
    </div>
  )
}
export default MemoryBoard;

