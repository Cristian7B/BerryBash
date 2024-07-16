import { useEffect, useState, useRef } from "react"
import { foodEmojis, foodStyles } from "../consts"
import { randomNumber } from "../utils/randomNumber"
import { ModalScore } from "./ModalScore";

export function DivGame() {

    const [startGame, setStartGame] = useState(false)
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [positionFruit, setPositionFruit] = useState({x: randomNumber(containerSize.x), y: randomNumber(containerSize.y)})
    const [showFruit, setShowFruit] = useState(foodEmojis[randomNumber(49)])
    const [counter, setCounter] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const containerRef = useRef(null);
    const intervalRefFruit = useRef(null);
    

    const startInformation = () => {
        setStartGame(startGame ? false : true)
    }

    const resetGame = () => {
        setStartGame(false)
        setShowModal(false)
        setCounter(0);
        setPositionFruit({x: randomNumber(containerSize.x), y: randomNumber(containerSize.y)});
        setShowFruit(foodEmojis[randomNumber(49)])
    }

    useEffect(() => {
        if (containerRef.current) {
          setContainerSize({
            x: containerRef.current.offsetWidth,
            y: containerRef.current.offsetHeight,
          });
        }
        setPositionFruit({x: randomNumber(containerSize.x) - 50, y: randomNumber(containerSize.y) - 50})
    }, [startGame]);
    

    const handleFruitClick = () => {
        const fruitIndex = randomNumber(49);
        setShowFruit(foodEmojis[fruitIndex]);
        setPositionFruit({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
        setCounter(counter + 1); 
        resetFruitInterval();
    };

    
    function startShowFruit() {
        const timerFruit = setInterval(() => {
            const fruitIndex = randomNumber(49)
            setShowFruit(foodEmojis[fruitIndex])
            setPositionFruit({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
        }, 1000)
        intervalRefFruit.current = timerFruit
    }

    const resetFruitInterval = () => {
        if (intervalRefFruit.current) {
            clearInterval(intervalRefFruit.current);
        }
        startShowFruit();
    };

    useEffect(() => {
        if (startGame) {
            const timer = setTimeout(() => {
                startInformation();
                setShowModal(true);
            }, 5000);

            startShowFruit();

            return () => {
                clearTimeout(timer);
                clearInterval(intervalRefFruit.current);
            };
            
        }
    }, [startGame])

    return(
        <div className="containerAllGame">
            <div ref={containerRef} className="gameContainerFood">
                <div 
                    style={foodStyles(positionFruit, startGame)} 
                    onClick={handleFruitClick} 
                    className="elementFood"
                >
                    {showFruit}
                </div>
            </div>
            <button onClick={startInformation}>Iniciar</button>
            {
                showModal && (
                    <ModalScore 
                        resetGame={resetGame} 
                        counterScore={counter}
                    />
                )
            }
        </div>
    )
}