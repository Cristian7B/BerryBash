import iconGame from "../../../assets/game-controller-outline.svg"

export function StartGameRedirect() {
    return (
        <div className="redirectCard">
            <div className="cardShow">
                <button><img className="iconGameStart" src={iconGame} alt="" />Play Now</button>
                <p>Join the fun and challenge your friends</p>
            </div>
        </div>
    )
}