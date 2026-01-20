import styles from "../../assets/styles/Minigames/Darts.module.css"



const DartsSlider = () => {


 return (
    <div className={styles.bar}>
        <img className={`${styles.pointer} ${styles.pointerDown}`} src="/images/darts/pointer.png" alt="pointer" />
        <img className={styles.pointer} src="/images/darts/pointer.png" alt="pointer" />

    </div>
  );



}
export default DartsSlider;