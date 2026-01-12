import { createPortal } from "react-dom";
import { useOwnOutlet } from "../Hooks/useOwnOutlet";

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
  onMuteMusic?: () => void;
  onMuteSFX?: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {

  const { isMusicMuted, setIsMusicMuted, isSfxMuted, setIsSfxMuted } = useOwnOutlet();

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // aby klik uvnitř nezavřel modal
      >
        <div className="pause-menu">
          <h2>Game menu</h2>
          <p>Once you´re ready, you can continue</p>
        </div>
        <div className="modal-interactive">
          <p className="interactive-btn">Music<button onClick={() => setIsMusicMuted(prev => !prev)}>{isMusicMuted ? "Off" : "On"}</button></p>
          <p className="interactive-btn">SFX<button onClick={() => setIsSfxMuted(prev => !prev)}>{isSfxMuted ? "Off" : "On"}</button></p>
          <button onClick={() => {localStorage.clear(); window.location.reload();}}>Reset Game</button>
        </div>
        
        <button className="btn-modal-content" onClick={onClose}>Return to game</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;