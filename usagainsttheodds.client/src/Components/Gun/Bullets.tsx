import React from "react";
import styles from "../../assets/styles/components/Gun/Bullet.module.css"
import { useState } from "react";


type BulletsProps = {
    bulletPosition?: (x:number) => void;
}


const Bullets: React.FC<BulletsProps> = ({ bulletPosition }) => {

    const [bulletPos, setBulletPos] = useState<number | null>(null);
 




    return (
        <>
            {Array.from({ length: 6 }, (_, i) => (
            <button
                key={i}
                onClick={() => {
                    console.log("Clicked bullet position:", i + 1);
                    setBulletPos(i); 
                    bulletPosition?.(i);
                }} 
                className={`${styles.bullet} ${styles['pos' + (i+1)] ?? ''} ${bulletPos === i ? styles.bulletIn : ''}` }
            />
            ))}
        </>
    )
}
export default Bullets;