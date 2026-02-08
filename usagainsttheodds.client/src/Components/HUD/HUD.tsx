import StatMeter from "./StatMeter";
import TicketCounter from "./TicketCounter";
import styles from "../../assets/styles/components/HUD/HUD.module.css"
import type { Person } from "../../Types/GameType";

type HUDProps = {
    tickets: number;
    relationshipValue: number;
    player:Person
    girlfriend:Person
};



const HUD: React.FC<HUDProps> = ({ tickets, relationshipValue, player, girlfriend }) => {

    return (
        <div className={styles.stats_container}>
            <div className={`${styles.row}`}>
                <div className={`${styles.relationshipContainer}`}>
                    <StatMeter type="relationship" value={relationshipValue} />
                </div>
                <TicketCounter value={tickets} />
            </div>
            <div className={`${styles.row}`}>
                <div className={`${styles.personContainer}`}>
                    <h1 className={styles.name}>{player.name}</h1>
                    <StatMeter type="hunger" value={player.hunger} />
                    <StatMeter type="thirst" value={player.thirst} />
                    {/*<StatMeter type="drunkenness" value={player.drunkenness} />*/}
                </div>
                <div className={`${styles.personContainer}`}>
                    <h1 className={styles.name}>{girlfriend.name}</h1>
                    <StatMeter type="hunger" value={girlfriend.hunger} />
                    <StatMeter type="thirst" value={girlfriend.thirst} />
                    {/*<StatMeter type="drunkenness" value={girlfriend.drunkenness} />*/}
                </div>          
            </div>  
        </div>
    )
}
export default HUD;