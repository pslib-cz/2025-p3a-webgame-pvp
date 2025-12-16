import { useMinigame } from "../../hooks/useMinigame";

const TestMinigame = () => {

    const { setResult, endGame } = useMinigame();

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1em' }}>
            <button style={{fontSize: "2em", backgroundColor: "#dc0303ff", cursor: "pointer"}} onClick={() => {setResult("lose"); endGame()}}>Lose</button>
            <button style={{fontSize: "2em", backgroundColor: "#fff700ff", cursor: "pointer"}} onClick={() => {setResult("draw"); endGame()}}>Draw</button>
            <button style={{fontSize: "2em", backgroundColor: "#03dc35ff", cursor: "pointer"}} onClick={() => {setResult("win"); endGame()}}>Win</button>
        </div>
    )
}

export default TestMinigame;