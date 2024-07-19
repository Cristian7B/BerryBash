import { Styles } from "../utils/consts";

export function ElementToShow({children, positionElement, startGame, handleElementClick }) {
    return (
        <div 
            style={Styles(positionElement, startGame)} 
            onClick={handleElementClick} 
            className="elementShow"
        >
            {children}
        </div>
    )
}