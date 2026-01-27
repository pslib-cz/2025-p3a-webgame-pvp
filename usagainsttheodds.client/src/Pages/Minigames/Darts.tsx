
import { useState } from "react";
import DartsSlider from "../../Components/Darts/DartsSlider";
import {type position, type stopped } from "../../Types/DartTypes"


const Darts = () => {

    
    const [pos, setPos] = useState<position>({posX: 0, posY: 0});
    const [isStopped, setIsStopped] = useState<stopped>({stoppedX: false, stoppedY: false});

    // const [isShot, setIsShot] = useState<boolean>(false);



    // useEffect(()=> {
    //     if(isStopped.stoppedX && isStopped.stoppedY){
    //         setIsShot(true);
    //         CountScore(pos.posX, pos.posY)
    //     }
    // }, [isStopped])


    // const CountScore: (x: number, y:number) =>{

    // }


//pocitani vzdalenosti - maxscore -  math.sqrt(math.pow(math.abs(posx - 50)) + math.pow(math.abs(posy -50))))




    return (
        <div>
            <DartsSlider isAxisY={false} dartsPosPercent={(x: number) => setPos({posX: x, posY: pos.posY})} isShot={isStopped.stoppedX}/>
            <button onClick={() => setIsStopped({stoppedX: true, stoppedY: isStopped.stoppedY})}>stoppedX</button>





            <DartsSlider isAxisY={true} dartsPosPercent={(y: number) => setPos({posX: pos.posX, posY: y})} isShot={isStopped.stoppedY}/>
            <button onClick={() => setIsStopped({stoppedX: isStopped.stoppedX, stoppedY: true})}>stoppedX</button>
        </div>

    )
}

export default Darts;