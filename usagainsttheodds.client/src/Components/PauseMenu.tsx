import { createPortal } from "react-dom";
import { useOwnOutlet } from "../hooks/useOwnOutlet";

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
        <button onClick={onClose}>✖</button>
        <div>
          <button onClick={() => setIsMusicMuted(prev => !prev)}>{isMusicMuted ? "Unmute Music" : "Mute Music"}</button>
          <button onClick={() => setIsSfxMuted(prev => !prev)}>{isSfxMuted ? "Unmute SFX" : "Mute SFX"}</button>
        </div>
        <div className="pause-menu">
          <h2>You can rest :)</h2>
          <p>Once you´re ready, you can continue</p>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;