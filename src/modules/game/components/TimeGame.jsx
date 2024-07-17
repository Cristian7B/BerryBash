import clockIcon from "../../../assets/clock.svg"
export function TimeGame({time}) {
    return (
        <div className="containerTimeGame">
            <img src={clockIcon} alt="clock icon for game"/>
            <h2>{time}100</h2>
            <p>Segundos</p>
        </div>
    )
}