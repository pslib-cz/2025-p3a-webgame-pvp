import { useOwnOutlet } from "../../Hooks/useOwnOutlet";
import PauseMenuButton from "./PauseMenuButton";
import PauseMenuWindow from "./PauseMenuWindow";


const PauseMenu = () => {

    const {isPauseMenuOpen} = useOwnOutlet();

    return (
        <>
            <PauseMenuButton />
            {isPauseMenuOpen && (<PauseMenuWindow />)}
        </>
    );
}

export default PauseMenu;