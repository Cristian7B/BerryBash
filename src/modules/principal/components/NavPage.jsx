import { Link } from "react-router-dom"
export function NavPage() {
    return (
        <nav className="navBarContainer">
            <ul>
                <li>
                    <a target="_blank" className="urlNavRedirect" href="https://github.com/Cristian7B/berrybash/">GitHub</a>
                </li>
                <li>
                    <h2><Link to="/">BerryBash</Link></h2>
                </li>
                <li>
                    <Link className="urlNavRedirect" to="/game">¡Play!</Link>
                </li>
            </ul>
        </nav>
    )
}