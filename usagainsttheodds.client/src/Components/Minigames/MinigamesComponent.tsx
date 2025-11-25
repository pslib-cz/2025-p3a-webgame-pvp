import MinigameInfo from "./MinigameInfo"

type MinigamesComponentProps = {
    Info: string,
    Name: string,
    Game: () => void
    TicketCost: number
}

const MinigamesComponent:React.FC<MinigamesComponentProps>= ({Info, Name, Game, TicketCost}) => {



    

    const handleContinue = () => {
        return(
            Game
        )
    }
    

    return (
        <MinigameInfo Info={Info} GameName={Name} onContinue={ () => handleContinue()}/>
    )
}