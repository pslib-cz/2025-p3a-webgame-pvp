import type React from "react"
import styles from "../../assets/styles/components/Gun/Gun.module.css"
import Bullets from "./Bullets"


type GunProps = {

}

const Gun: React.FC<GunProps> = () => {


    
    return (
        <div className={`
            ${styles.gunbody}
            `}>
            <div className={`${styles.gunbarrel}`}>
                <Bullets/>
            </div>
        </div>
    );
}

export default Gun