import styles from "../../assets/styles/components/moles.module.css"
import { useEffect, useState } from "react"
import useTimer from "../../Hooks/useTimer"

type MolesStartButtonProps =  {
    startCallback: () => void
}


const MolesStartButton: React.FC<MolesStartButtonProps> = ({startCallback}) => {
    const [state, setState] = useState<"NotStarted" | "Countdown" | "Started">("NotStarted")
    const [buttonText, setButtonText] = useState<"PLAY"| number | "WHACK THE MOLES">("PLAY")
    const countdown = useTimer(3900, () => onCountdownEnd())

    const onCountdownEnd = () => {
        setState("Started")
        startCallback()
    }

    useEffect(() => {
        switch (state) {
            case "NotStarted":
                setButtonText("PLAY")
                break
            case "Countdown":
                countdown.start()
                setButtonText(countdown.seconds)
                break
            case "Started":
                setButtonText("WHACK THE MOLES")
                break
        }
    }, [state, countdown.seconds])

    const handleClick = () => {
        if (state === "NotStarted") {
            setState("Countdown")
        }
    }



    return (
        <button onClick={handleClick} className={`${styles.startButtonContainer} ${state === "NotStarted" && styles.notStarted} ${state==="Started" && styles.startedContainer}`}>
            <div
                className={`${styles.startButtonText}  ${state === "Started" && styles.started}`}
            >
                {buttonText} {state === "Started" && buttonText}
            </div>
        </button>
    )

}

export default MolesStartButton