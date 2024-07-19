import { useContext } from "react"
import { ModeContext } from "../context/Modes"
import { ShowScore } from "./ShowScore"

export function Score() {
    const {score} = useContext(ModeContext)
    
    return (
        <ShowScore score={score}/>
    )
}