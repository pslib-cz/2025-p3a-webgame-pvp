import styles from '../../assets/styles/components/moles.module.css';
import Mole from './Mole';

type MoleHoleProps = {
    index: number;
    isMoleUp: boolean;
    hitCallback: (index: number) => void;
    isUpCallback: (index: number) => void;
}

const MoleHole: React.FC<MoleHoleProps> = ({ index, isMoleUp, hitCallback, isUpCallback }) => {
    return (
        <div className={styles.moleHoleBack}>
                <Mole
                    index={index}
                    isUp={isMoleUp}
    
                    hitCallback={hitCallback}
                    isUpCallback={isUpCallback}
                />
            <div className={styles.moleHoleFront}/>
        </div>
    );
}
export default MoleHole;