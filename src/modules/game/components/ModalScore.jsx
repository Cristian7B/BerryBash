import confetti from "canvas-confetti"

export function ModalScore({counterScore, resetGame}) {
    confetti()
    return (
        <div className="modalWinner">
            <h1>{counterScore}</h1>
            <button onClick={resetGame}>Empezar de nuevo</button>
        </div>
    )
}