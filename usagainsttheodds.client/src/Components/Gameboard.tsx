import ChangeScreenButton from "./ChangeScreenButton"
import type { Screen } from "../Types/GameType"

type GameboardProps = {
    setCurrent: (s:Screen) => void
    buttons: Screen[]
}


const Gameboard:React.FC<GameboardProps> = ({setCurrent, buttons}) =>{

    const HandleGameChange = (s:Screen) => {
        setCurrent(s)
    }


    const buttonsList = buttons.map(btn => <ChangeScreenButton Screen={btn} OnClick={() => HandleGameChange(btn)}/>)



    return (

       <>
            {buttonsList}
      </> 
    )
}
export default Gameboard