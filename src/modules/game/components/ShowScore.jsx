import scoreIcon from "../../../assets/score.svg"

export function ShowScore({score}) {
    return (
        <div className="showScoreContainer">
            <div className="scoreIcon">
                <img src={scoreIcon} alt="Icon show score" />
                <h1>Score</h1>
            </div>
            <div className="actualScore">
                ¡{score}100!
            </div>
        </div>
    )
}