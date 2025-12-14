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
        <div className={styles.container}>
            <div className={styles.player}>
                <h1>{player.name}</h1>
                <StatMeter type="hunger" value={player.hunger} />
                <StatMeter type="thirst" value={player.thirst} />
                <StatMeter type="drunkenness" value={player.drunkenness} />
            </div>            
            <div className={styles.center}>
                <StatMeter type="relationship" value={relationshipValue} />
                <TicketCounter value={tickets} />
            </div>
            <div className={styles.girlfriend}>
                <h1>{girlfriend.name}</h1>
                <StatMeter person="girlfriend" type="hunger" value={girlfriend.hunger} />
                <StatMeter person="girlfriend" type="thirst" value={girlfriend.thirst} />
                <StatMeter person="girlfriend" type="drunkenness" value={girlfriend.drunkenness} />
            </div>            
        </div>
    )
}
export default HUD;