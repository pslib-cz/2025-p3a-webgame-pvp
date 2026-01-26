import styles from "../../assets/styles/components/moles.module.css"
import { useEffect, useState } from "react"
import useTimer from "../../Hooks/useTimer"

type MolesStartButtonProps =  {
    startCallback: () => void
    secondsLeft: number
}


const MolesStartButton: React.FC<MolesStartButtonProps> = ({startCallback, secondsLeft}) => {
    const [state, setState] = useState<"NotStarted" | "Countdown" | "Started" | "Ended">("NotStarted")
    const [buttonText, setButtonText] = useState<"PLAY"| number | "GO!">("PLAY")
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
                if (countdown.seconds <= 0) setButtonText("GO!")
                break
            case "Started":
                if (secondsLeft <= 29 ) setButtonText(secondsLeft)
                break
        }
    }, [state, countdown.seconds])

    useEffect(() => {
        if (state === "Started") {
            setButtonText(secondsLeft)
        }
        if (secondsLeft <= 0 && state === "Started") {
            setState("Ended")
        }
    }, [secondsLeft])

    const handleClick = () => {
        if (state === "NotStarted") {
            setState("Countdown")
        }
    }



    return (
        <button onClick={handleClick} className={`${styles.startButtonContainer} ${state === "NotStarted" && styles.notStarted}`}>
            <div
                className={`${styles.startButtonText}`}
            >
                {buttonText}
            </div>
        </button>
    )

}

export default MolesStartButton