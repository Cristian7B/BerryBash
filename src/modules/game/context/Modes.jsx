import { createContext, useState } from "react";

export const ModeContext = createContext()

export function ModeProvider({children}) {

    const [mode, setMode] = useState("bullseyeMode")
    const [score, setScore] = useState(0)
    const [timeGame, setTimeGame] = useState(10)
    const [startGame, setStartGame] = useState(false)
    
    return (
        <ModeContext.Provider value={{mode, setMode, score, setScore, timeGame, setTimeGame, startGame, setStartGame}}>
            {children}
        </ModeContext.Provider>
    )
}