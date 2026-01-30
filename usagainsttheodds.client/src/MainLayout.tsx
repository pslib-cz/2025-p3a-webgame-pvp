import { Outlet } from "react-router-dom";
import HUD from "./Components/HUD/HUD";
import { useOwnOutlet } from "./Hooks/useOwnOutlet";

const MainLayout = () => {
    const context = useOwnOutlet();

    const { tickets, relationshipValue, player, girlfriend } = context;

    return (
        <>
            <HUD
                tickets={tickets}
                relationshipValue={relationshipValue}
                player={player}
                girlfriend={girlfriend}
            />

            <Outlet context={context} />
        </>
    );
};

export default MainLayout;