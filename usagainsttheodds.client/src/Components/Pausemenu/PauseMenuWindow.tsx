import { createPortal } from "react-dom";
import ResetButton from "../ResetButton";
import '../../assets/index.css'
import styles from "../../assets/styles/components/pausemenu.module.css";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import { useSound } from "../../Providers/SoundProvider";


type ModalProps = {
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {

  const { setIsPauseMenuOpen } = useOwnOutlet();
  const { isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted, musicVolume, setMusicVolume, sfxVolume, setSfxVolume } = useSound();

  const {setPlayer, setGirlfriend, setTickets, setRelationshipValue, addNotification} = useOwnOutlet();


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
          <div className={styles.interactiveBtn}>
            <p>Music</p>
            <div className={styles.interactiveVolume}>
              <button onClick={() => setIsMusicMuted(!isMusicMuted)}>
                {isMusicMuted ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#341B17" d="M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#341B17" d="M11 2h2v20h-2v-2H9v-2h2V6H9V4h2zM7 8V6h2v2zm0 8H3V8h4v2H5v4h2zm0 0v2h2v-2zm10-6h-2v4h2zm2-2h2v8h-2zm0 8v2h-4v-2zm0-10v2h-4V6z"/></svg>}
              </button>
              <input type="range" min="0" max="1" step="0.01" value={musicVolume} onChange={(e) => setMusicVolume(parseFloat(e.target.value))}/>
            </div>
          </div>
          
          <div className={styles.interactiveBtn}>
            <p>Sound Effects</p>
            <div className={styles.interactiveVolume}>
              <button onClick={() => setIsSfxMuted(!isSfxMuted)}>
                {isSfxMuted ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#341B17" d="M13 2h-2v2H9v2H7v2H3v8h4v2h2v2h2v2h2zM9 18v-2H7v-2H5v-4h2V8h2V6h2v12zm10-6.777h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#341B17" d="M11 2h2v20h-2v-2H9v-2h2V6H9V4h2zM7 8V6h2v2zm0 8H3V8h4v2H5v4h2zm0 0v2h2v-2zm10-6h-2v4h2zm2-2h2v8h-2zm0 8v2h-4v-2zm0-10v2h-4V6z"/></svg>}
              </button>
              <input type="range" min="0" max="1" step="0.01" value={sfxVolume} onChange={(e) => setSfxVolume(parseFloat(e.target.value))}/>
            </div>
          </div>
          
          
        </div>
        <div className={styles.modalStats}>
                    <button onClick={() => setTickets(0)}>Tickets 0</button>
                    <button onClick={() => setRelationshipValue(0)}>Relationship 0</button>
                    <button onClick={() => setPlayer(prev => ({ ...prev, hunger: 0 }))}>Player hunger 0</button>
                    <button onClick={() => setPlayer(prev => ({ ...prev, thirst: 0 }))}>Player thirst 0</button>
                    <button onClick={() => setPlayer(prev => ({ ...prev, drunkenness: 100 }))}>Player drunkenness 100</button>
                    <button onClick={() => setGirlfriend(prev => ({ ...prev, hunger: 0 }))}>Girlfriend hunger 0</button>
                    <button onClick={() => setGirlfriend(prev => ({ ...prev, thirst: 0 }))}>Girlfriend thirst 0</button>
                    <button onClick={() => setGirlfriend(prev => ({ ...prev, drunkenness: 100 }))}>Girlfriend drunkenness 100</button>
                  <button onClick={() => addNotification("New notification", "/images/Avatars/girlfriendAvatar.png")}>add notification</button>
        </div>
        <div className={styles.modalButtons}>
          <ResetButton className="buttonIntro buttonRules" isIngame={true} navigateTo="/" text="Reset Game" />
          <button className="buttonIntro buttonRules" onClick={() => setIsPauseMenuOpen(false)}>Return to game</button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;