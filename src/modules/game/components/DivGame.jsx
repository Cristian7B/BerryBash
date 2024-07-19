import { useEffect, useState, useRef, useContext } from "react"
import { selectModeById, Styles } from "../utils/consts"
import { randomNumber } from "../utils/randomNumber"
import { ModalScore } from "./ModalScore";
import { ModeContext } from "../context/Modes";

export function DivGame() {
    const {mode} = useContext(ModeContext)
    const {timeGame} = useContext(ModeContext)
    const emojisSelectedMode = selectModeById(mode)
    const lengthArrayEmojis = emojisSelectedMode.length - 1

    const {startGame, setStartGame} = useContext(ModeContext)
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [positionElement, setPositionElement] = useState({x: randomNumber(containerSize.x), y: randomNumber(containerSize.y)})
    const [showElement, setShowElement] = useState(emojisSelectedMode[randomNumber(lengthArrayEmojis)])
    const {score, setScore} = useContext(ModeContext)
    const [showModal, setShowModal] = useState(false)

    const containerRef = useRef(null);
    const intervalRefElement = useRef(null);
    

    const startInformation = () => {
        setStartGame(startGame ? false : true)
    }

    const resetGame = () => {
        setStartGame(false)
        setShowModal(false)
        setScore(0);
        setPositionElement({x: randomNumber(containerSize.x), y: randomNumber(containerSize.y)});
        setShowElement(emojisSelectedMode[randomNumber(lengthArrayEmojis)])
    }

    useEffect(() => {
        if (containerRef.current) {
          setContainerSize({
            x: containerRef.current.offsetWidth,
            y: containerRef.current.offsetHeight,
          });
        }
        setPositionElement({x: randomNumber(containerSize.x) - 50, y: randomNumber(containerSize.y) - 50})
    }, [startGame]);

    useEffect(() => {
        setShowElement(emojisSelectedMode[randomNumber(lengthArrayEmojis)])
    }, [mode])
    

    const handleElementClick = () => {
        const ElementIndex = randomNumber(lengthArrayEmojis);
        setShowElement(emojisSelectedMode[ElementIndex]);
        setPositionElement({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
        setScore(score + 1); 
        resetElementInterval();
    };

    
    function startShowElement() {
        const timerElement = setInterval(() => {
            const ElementIndex = randomNumber(lengthArrayEmojis)
            setShowElement(emojisSelectedMode[ElementIndex])
            setPositionElement({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
        }, 1000)
        intervalRefElement.current = timerElement
    }

    const resetElementInterval = () => {
        if (intervalRefElement.current) {
            clearInterval(intervalRefElement.current);
        }
        startShowElement();
    };

    useEffect(() => {
        if (startGame) {
            const timer = setTimeout(() => {
                startInformation();
                setShowModal(true);
            }, timeGame*1000);

            startShowElement();

            return () => {
                clearTimeout(timer);
                clearInterval(intervalRefElement.current);
            };
            
        }
    }, [startGame])
    return(
        <div className="containerAllGame">
            <div ref={containerRef} className="gameContainerFood">
                <div 
                    style={Styles(positionElement, startGame)} 
                    onClick={handleElementClick} 
                    className="elementFood"
                >
                    {showElement}
                </div>
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