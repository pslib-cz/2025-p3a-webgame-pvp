import styles from "../../assets/styles/components/moles.module.css";
import type { MoleHoleType } from "../../Types/MoleHoleType";
import MoleHole from "./MoleHole";

type HolesGridProps = {
    hitCallback: (index: number) => void;
    isUpCallback: (index: number) => void
    holes: MoleHoleType[];
}

const HolesGrid: React.FC<HolesGridProps> = ({ holes, hitCallback, isUpCallback }) => {


    return (
        <div className={styles.grid}>
            {holes.map((hole, index) => (
                <span key={index}>
                    <MoleHole
                        index={hole.index}
                        isMoleUp={hole.isMoleUp}
                        hitCallback={() => hitCallback(hole.index)}
                        isUpCallback={() => isUpCallback(hole.index)}
                    />
                </span>
            ))}
        </div>
    );
}

export default HolesGrid;