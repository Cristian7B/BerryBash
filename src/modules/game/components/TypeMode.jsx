import { useMode } from "../hooks/useMode"

export function TypeMode({icon, name, description, id}) {
    const { setMode } = useMode()

    const sendTypeMode = () => {
        setMode(id)
    }

    return (
        <div onClick={sendTypeMode} className="typeModeContainer">
            <img src={icon} alt={name} />
            <div className="title-icon">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>  
        </div>
    )
}