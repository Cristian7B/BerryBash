import { useEffect, useState, useRef, useContext } from "react"
import { selectModeById } from "../utils/consts"
import { randomNumber } from "../utils/randomNumber"
import { ModeContext } from "../context/Modes";

export function useGameState() {
    const { mode, timeGame, startGame, setStartGame, score, setScore } = useContext(ModeContext);
    const emojisSelectedMode = selectModeById(mode)
    const lengthArrayEmojis = emojisSelectedMode.length - 1

    const random = randomNumber(lengthArrayEmojis)

    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [positionElement, setPositionElement] = useState({x: randomNumber(containerSize.x), y: randomNumber(containerSize.y)})
    const [showElement, setShowElement] = useState(emojisSelectedMode[random])
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
        setShowElement(emojisSelectedMode[random])
    }

    const handleElementClick = () => {
        setShowElement(emojisSelectedMode[random]);
        setPositionElement({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
        setScore(score + 1); 
        resetElementInterval();
    }
    
    const startShowElement = () => {
        const timerElement = setInterval(() => {
            setShowElement(emojisSelectedMode[random])
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
        if (containerRef.current) {

            setContainerSize({
                x: containerRef.current.offsetWidth,
                y: containerRef.current.offsetHeight,
            })

        }
        setPositionElement({x: randomNumber(containerSize.x) - 50, y: randomNumber(containerSize.y) - 50})
    }, [startGame])

    useEffect(() => {
        setShowElement(emojisSelectedMode[random])
    }, [emojisSelectedMode])

    useEffect(() => {
        if (startGame) {
            const timer = setTimeout(() => {
                startInformation()
                setShowModal(true)
            }, timeGame*1000)

            startShowElement()

            return () => {
                clearTimeout(timer)
                clearInterval(intervalRefElement.current)
            };
            
        }
    }, [startGame])

    return {
        containerRef,
        showElement,
        positionElement,
        startGame,
        showModal,
        score,
        startInformation,
        resetGame,
        handleElementClick,
    }

}