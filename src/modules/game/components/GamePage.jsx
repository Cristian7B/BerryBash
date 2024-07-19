import { ModeProvider } from '../context/Modes'
import {DivGame} from './DivGame'
import { ModeSelector } from './ModeSelector'
import { SetTime } from './SetTime'
import { Score } from "./Score"
import { TimeGame } from './TimeGame'

export function GamePage() {
    return (
        <ModeProvider>
            <div className="containerGame">
                <div className="selectMode">
                    <ModeSelector/>
                </div>
                <div className="setTimeGame">
                    <SetTime/>
                </div>
                <div className="timeGame">
                    <TimeGame/>
                </div>
                <div className="scoreShow">
                    <Score/>
                </div>
                <div className="gamePlayerLayout">
                    <DivGame/>
                </div>
            </div>
        </ModeProvider>
    )
}