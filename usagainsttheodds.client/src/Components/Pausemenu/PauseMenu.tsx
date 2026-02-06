import { useEffect } from "react";
import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import PauseMenuButton from "./PauseMenuButton";
import PauseMenuWindow from "./PauseMenuWindow";


const PauseMenu = () => {

    const {isPauseMenuOpen, setIsPauseMenuOpen} = useOwnOutlet();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsPauseMenuOpen(!isPauseMenuOpen);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isPauseMenuOpen, setIsPauseMenuOpen]);

    return (
        <>
            <PauseMenuButton />
            {isPauseMenuOpen && (<PauseMenuWindow />)}
        </>
    );
}

export default PauseMenu;