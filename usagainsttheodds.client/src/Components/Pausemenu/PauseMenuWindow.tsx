import { createPortal } from "react-dom";
import ResetButton from "../ResetButton";
import styles from "../../assets/styles/components/pausemenu.module.css";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";


type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {

  const { setIsPauseMenuOpen, isMusicMuted, setIsMusicMuted } = useOwnOutlet();

  return createPortal(
    <div className={styles.modalBackdrop} onClick={() => setIsPauseMenuOpen(false)}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // aby klik uvnitř nezavřel modal
      >
        <div className={styles.pauseMenu}>
          <h2>Game menu</h2>
          <p>Once you´re ready, you can continue</p>
        </div>
        <div className={styles.modalInteractive}>
          <p className={styles.interactiveBtn}>Music<button onClick={() => setIsMusicMuted(!isMusicMuted)}>{isMusicMuted ? "Off" : "On"}</button></p>
          <ResetButton isIngame={true} navigateTo="/game" text="Restart Game" />
        </div>

        <button className={styles.returnButton} onClick={() => setIsPauseMenuOpen(false)}>Return to game</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;