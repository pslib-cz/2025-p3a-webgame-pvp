import MinigameInfo from "../Components/Minigames/MinigameInfo"


const RussianRulette= () => {

    const handleContinue = () => {
        return(
            //realna hra
            <div></div>
        )
    }
    

    return (
        <MinigameInfo Info="Russian rulette is a game." onContinue={ () => handleContinue()}/>
    )
}