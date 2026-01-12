import type React from "react"
import styles from "../../assets/styles/components/Gun/Gun.module.css"
import Bullets from "./Bullets"


type GunProps = {
    barrelOpened: boolean;
    bulletPosition?: (x:number) => void;
}

const Gun: React.FC<GunProps> = ({ barrelOpened = false, bulletPosition }) => {



    
    return (
        <div className={styles.gunWrapper}>
            <div
                className={`${styles.gunbarrel} ${styles.gun} ${
                barrelOpened ? styles.gunbarrelOppened : ""
                }`}
            >
                <Bullets bulletPosition={bulletPosition}/>
            </div>
            <div className={`${styles.gunbody} ${styles.gun}`} />
        </div>
    );
}

export default Gun