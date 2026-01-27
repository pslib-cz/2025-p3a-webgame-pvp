import Card from './Card';
import type { CardType } from '../../Types/CardType';

type MemoryBoardProps = {
    cards: CardType[];
    onCardClick: (id: number) => void
}

const MemoryBoard = ({ cards, onCardClick }: MemoryBoardProps) => {
  return (
    <div>
      {cards.map(card => ( <Card key={card.id} card={card} onClick={onCardClick} /> ))}
    </div>
  )
}
export default MemoryBoard;

