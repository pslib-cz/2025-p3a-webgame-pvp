import RelationShipMeter from "./RelationshipMeter";
import TicketCounter from "./TicketCounter";
import styles from "../../assets/styles/components/HUD/HUD.module.css"

type HUDProps = {
    tickets: number;
    relationship: number;
}

const HUD: React.FC<HUDProps> = ({ tickets, relationship }) => {
    return (
        <div className={styles.container}>
            <TicketCounter value={tickets} />
            <RelationShipMeter relationshipValue={relationship} />
        </div>
    )
}
export default HUD;