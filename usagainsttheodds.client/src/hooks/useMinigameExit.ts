import type { Screen } from "../Types/GameType"

type UseMinigameExitProps = {
    setCurrentScreen: (screen: Screen) => void
}

export const useMinigameExit = ({ setCurrentScreen }: UseMinigameExitProps) => {
    return {
        onExit: setCurrentScreen
    }
}
