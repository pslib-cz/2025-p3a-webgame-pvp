import { Outlet } from "react-router-dom";
import HUD from "./Components/HUD/HUD";
import { useOutletContext } from "react-router-dom";

const MainLayout = () => {
  const { tickets, relationshipValue, player, girlFriend } =
    useOutletContext<any>();

  return (
    <>
      <HUD
        tickets={tickets}
        relationshipValue={relationshipValue}
        player={player}
        girlFriend={girlFriend}
      />
      <Outlet />
    </>
  );
};

export default MainLayout;