import { ModalScore } from "./ModalScore";
import { ElementToShow } from "./ElementToShow";
import { useGameState } from "../hooks/useGameState";

export function DivGame() {
    console.log("RECHARGED")
    const {
        containerRef,
        showElement,
        positionElement,
        startGame,
        showModal,
        score,
        startInformation,
        resetGame,
        handleElementClick,
    } = useGameState()

    return (
        <div className="containerAllGame">
            <div ref={containerRef} className="gameContainerFood">
                <ElementToShow 
                    positionElement={positionElement}
                    startGame={startGame}
                    handleElementClick={handleElementClick}
                >
                    {showElement}
                </ElementToShow>
            </div>

            <div className="startResetDiv">
                <button onClick={startInformation}>Iniciar</button>
                <div>Resetear</div>
            </div>

            {
                showModal && (
                    <ModalScore 
                        resetGame={resetGame} 
                        counterScore={score}
                    />
                )
            }
        </div>
    )
}