import { createPortal } from "react-dom";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
  onMuteMusic?: () => void;
  onMuteSFX?: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // aby klik uvnitř nezavřel modal
      >
        <button onClick={onClose}>✖</button>
        <button>mute music</button>
        <button>mute SFX</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;