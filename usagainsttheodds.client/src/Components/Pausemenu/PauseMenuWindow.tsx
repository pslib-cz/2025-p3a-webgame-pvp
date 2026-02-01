import { createPortal } from "react-dom";
import ResetButton from "../ResetButton";
import styles from "../../assets/styles/components/pausemenu.module.css";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";


type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {

  const { setIsPauseMenuOpen, isMusicMuted, setIsMusicMuted } = useOwnOutlet();

  const {setPlayer, setGirlfriend, setTickets, setRelationshipValue, setEndReason} = useOwnOutlet();


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
          <ResetButton isIngame={true} navigateTo="/" text="Reset Game" />
        </div>

                  <div style={{display: "flex", flexWrap: "wrap", maxWidth: "300px"}}>
                    <button onClick={() => setEndReason("victory")}>victory</button>
                    <button onClick={() => setTickets(0)}>Tickets 0</button>
                    <button onClick={() => setRelationshipValue(0)}>Relationship 0</button>
                    <button onClick={() => setPlayer(prev => ({ ...prev, hunger: 0 }))}>Player hunger 0</button>
                    <button onClick={() => setPlayer(prev => ({ ...prev, thirst: 0 }))}>Player thirst 0</button>
                    <button onClick={() => setPlayer(prev => ({ ...prev, drunkenness: 100 }))}>Player drunkenness 100</button>
                    <button onClick={() => setGirlfriend(prev => ({ ...prev, hunger: 0 }))}>Girlfriend hunger 0</button>
                    <button onClick={() => setGirlfriend(prev => ({ ...prev, thirst: 0 }))}>Girlfriend thirst 0</button>
                    <button onClick={() => setGirlfriend(prev => ({ ...prev, drunkenness: 100 }))}>Girlfriend drunkenness 100</button>
                  </div>

        <button className={styles.returnButton} onClick={() => setIsPauseMenuOpen(false)}>Return to game</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;