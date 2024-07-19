import { useContext } from "react"
import scoreIcon from "../../../assets/score.svg"
import { ModeContext } from "../context/Modes"

export function ShowScore() {
    const {score} = useContext(ModeContext)
    return (
        <div className="showScoreContainer">
            <div className="scoreIcon">
                <img src={scoreIcon} alt="Icon show score" />
                <h1>Score</h1>
            </div>
            <div className="actualScore">
                ¡{score}!
            </div>
        </div>
    )
}