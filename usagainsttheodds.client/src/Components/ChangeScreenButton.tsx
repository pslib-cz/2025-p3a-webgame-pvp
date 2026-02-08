import { useNavigate } from "react-router-dom";
import type { FC } from "react";

type ChangeScreenButtonProps = {
  to?: string;  // cesta na route?
  text?: string;
  onClick?: () => void;
  className?: string;
}

const ChangeScreenButton: FC<ChangeScreenButtonProps> = ({ to, text, onClick, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ChangeScreenButton;