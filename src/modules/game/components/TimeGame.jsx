import { useContext, useEffect, useState } from "react"
import clockIcon from "../../../assets/clock.svg"
import { ModeContext } from "../context/Modes"

export function TimeGame() {
    const { timeGame, startGame } = useContext(ModeContext)
    const [timer, setTimer] = useState(timeGame)

    useEffect(() => {
        if (startGame) {
            const intervalId = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer > 0) {
                        return prevTimer - 1
                    } else {
                        clearInterval(intervalId)
                        return prevTimer
                    }
                })
            }, 1000)
            
            return () => clearInterval(intervalId)
        } 
        
        else {
            setTimer(timeGame)
        }
    }, [startGame, timeGame])

    return (
        <div className="containerTimeGame">
            <img src={clockIcon} alt="clock icon for game" />
            <h2>{timer}</h2>
            <p>Segundos</p>
        </div>
    );
}
