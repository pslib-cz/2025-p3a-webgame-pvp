import { Outlet, useOutletContext } from "react-router-dom";
import HUD from "./Components/HUD/HUD";

const MainLayout = () => {
    const context = useOutletContext<any>();

    const { tickets, relationshipValue, player, girlFriend } = context;

    return (
        <>
            <HUD
                tickets={tickets}
                relationshipValue={relationshipValue}
                player={player}
                girlFriend={girlFriend}
            />

            <Outlet context={context} />
        </>
    );
};

export default MainLayout;