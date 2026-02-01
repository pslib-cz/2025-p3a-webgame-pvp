import type React from "react";
import { useNavigate } from "react-router-dom";

type ResetButtonProps={
    text:string
    className?: string
    navigateTo: string
    isIngame?: boolean;
}


const ResetButton: React.FC<ResetButtonProps> = ({isIngame, text, className, navigateTo}) =>{
    const navigate = useNavigate();
    return(
        <button className={className} onClick={() => {localStorage.clear(); navigate(navigateTo); isIngame && window.location.reload();}}>
            {text}
        </button>
    )
}
export default ResetButton;