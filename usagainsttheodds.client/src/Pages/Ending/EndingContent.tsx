import { use } from "react";
import type { EndingType } from "../../Types/GameType";
import ResetButton from "../../Components/ResetButton";
import styles from "../../assets/styles/Ending.module.css"
import "../../assets/index.css"

//Pomocná komponenta pro samotný obsah cutscény
const EndingContent = ({ promise }: { promise: Promise<EndingType> }) => {
    const data = use(promise);

    return (
        <div className={styles.endpage}>
            <div 
            className={`${styles.layer} ${styles.layer1}`} 
            style={{ backgroundImage: `url(${data.backgroundUrl})` }}/>
            <div 
            className={`${styles.layer} ${styles.layer2}`} 
            style={{ backgroundImage: `url(${data.imageUrl})` }}/>
            <div className={styles.layer3}/>
            <div className={`${styles.layer4} ${styles.text}`}>
                <h1>{data.title}</h1>
                <p>{data.message}</p>
                <ResetButton className="buttonIntro" isIngame={true} text={"Try Again"} navigateTo={"/"} />                       
            </div>
        </div>
    );
};

export default EndingContent;