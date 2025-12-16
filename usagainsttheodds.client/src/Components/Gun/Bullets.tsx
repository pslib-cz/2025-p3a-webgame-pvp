import React from "react";
import styles from "../../assets/styles/components/Gun/Bullet.module.css"
import { useState } from "react";

const Bullets= () =>{
    const [clickable, setClickable] = useState<boolean>(true);

        const ChosePosition = (pos:number) =>{
            setClickable(false);

            return (pos)
        }

    return (
        <>
            {Array.from({ length: 6 }, (_, i) => (
                <button onClick={() => clickable && ChosePosition(i)} key={i} className={`${styles.pos[i]}`}>
                    
                </button>
            ))}
        </>
    )
}
export default Bullets;