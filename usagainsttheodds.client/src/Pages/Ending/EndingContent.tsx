import { use } from "react";
import type { EndingType } from "../../Types/GameType";
import ResetButton from "../../Components/ResetButton";

//Pomocná komponenta pro samotný obsah cutscény
const EndingContent = ({ promise }: { promise: Promise<EndingType> }) => {
    const data = use(promise);



    return (
        <div style={{ backgroundImage: `url(${data.imageUrl})` }}>
            <h1>{data.title}</h1>
            <p>{data.message}</p>
            

            <ResetButton isIngame={true} text={"Try Again"} navigateTo={"/"} />
        </div>
    );
};

export default EndingContent;