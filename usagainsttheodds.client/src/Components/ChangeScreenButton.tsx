import { useNavigate } from "react-router-dom";
import type { FC } from "react";

type ChangeScreenButtonProps = {
  to?: string;  // cesta na route?
  text?: string;
}

const ChangeScreenButton: FC<ChangeScreenButtonProps> = ({ to, text }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => to && navigate(to)}>
      {text}
    </button>
  );
}

export default ChangeScreenButton;