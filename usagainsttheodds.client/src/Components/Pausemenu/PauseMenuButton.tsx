import styles from '../../assets/styles/components/pausemenu.module.css';
import { useOwnOutlet } from '../../Hooks/useOwnOutlet';


const PauseMenuButton = () => {

    const {setIsPauseMenuOpen} = useOwnOutlet();

    return (
        <button className={styles.button} onClick={() => setIsPauseMenuOpen(true)} />
    );
}

export default PauseMenuButton;
