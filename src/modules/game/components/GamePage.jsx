import {DivGame} from './DivGame'
import { ModeSelector } from './ModeSelector'
import { SetTime } from './SetTime'
import { ShowScore } from './ShowScore'
import { TimeGame } from './TimeGame'

export function GamePage() {
    return (
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
                <ShowScore/>
            </div>
            <div className="gamePlayerLayout">
                <DivGame/>
            </div>
        </div>
    )
}