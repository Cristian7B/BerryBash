import { useContext } from "react"
import { ModeContext } from "../context/Modes"

export function InputNumber(){
    const {timeGame, setTimeGame} = useContext(ModeContext)
    const setNewTime = (event) => {
        setTimeGame(event.target.value)
    }
    return (
        <input 
            placeholder="10" 
            className="inputNumberTime" 
            type="number" 
            onChange={setNewTime}
        />
    )
}