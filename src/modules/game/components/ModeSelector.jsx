import { ModeObject } from "../utils/modeInfo"
import { TypeMode } from "./TypeMode"
export function ModeSelector() {
    return (
        <div className="containerMode">
            <div className="titleContainerMod">
                <p>Mode</p>
                <h3>Select mode</h3>
            </div>

            {
                ModeObject.map(({name, description, icon, id}) => (
                    <TypeMode
                        key={name}
                        name={name}
                        description={description}
                        icon={icon}
                        id={id}
                    />
                ))
            }
        </div>
    )
}