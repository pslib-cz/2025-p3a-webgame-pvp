import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const StartPage = () => {
    const navigate = useNavigate();
    const hasSave = localStorage.getItem("UserData");

    const NewGame = () => {
        localStorage.removeItem("UserData");
        navigate("/cutscene/intro");
    };

    const Continue = () => {
        navigate("/game");
    };

    return (
        <>
            <h1>Us against the odds</h1>
            <button className="button-intro" onClick={NewGame}>
                New game
            </button>
            {hasSave && (
            <button className="button-intro" onClick={Continue}>
                Continue
            </button>
            )}
        </>
    );
};
export default StartPage;