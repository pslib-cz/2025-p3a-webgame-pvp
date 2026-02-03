import { createPortal } from "react-dom";
import ResetButton from "../ResetButton";
import styles from "../../assets/styles/components/pausemenu.module.css";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import { useSound } from "../../Providers/SoundProvider";


type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {

  const { setIsPauseMenuOpen } = useOwnOutlet();
  const { isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted, musicVolume, setMusicVolume, sfxVolume, setSfxVolume } = useSound();

  const {setPlayer, setGirlfriend, setTickets, setRelationshipValue, setEndReason, addNotification} = useOwnOutlet();


  return createPortal(
    <div className={styles.modalBackdrop} onClick={() => setIsPauseMenuOpen(false)}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // aby klik uvnitř nezavřel modal
      >
        <div className={styles.pauseMenu}>
          <h2>Game menu</h2>
          <p>Once you're ready, you can continue</p>
        </div>
        <div className={styles.modalInteractive}>
          <p className={styles.interactiveBtn}>Music
            <div className={styles.interactiveVolume}>
              <button onClick={() => setIsMusicMuted(!isMusicMuted)}>{isMusicMuted ? "Off" : "On"} </button>
              <input  type="range" min="0" max="1" step="0.01" value={musicVolume} onChange={(e) => setMusicVolume(parseFloat(e.target.value))}/>
            </div>
          </p>
          <p className={styles.interactiveBtn}>Sound Effects
            
            <div className={styles.interactiveVolume}>
              <button onClick={() => setIsSfxMuted(!isSfxMuted)}> {isSfxMuted ? "Off" : "On"} </button>
              <input  type="range" min="0" max="1" step="0.01" value={sfxVolume} onChange={(e) => setSfxVolume(parseFloat(e.target.value))}/>
            </div>
          </p>
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
                  <button onClick={() => addNotification("New notification", "/images/Avatars/girlfriendAvatar.png")}>add notification</button>

        <button className={styles.returnButton} onClick={() => setIsPauseMenuOpen(false)}>Return to game</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;