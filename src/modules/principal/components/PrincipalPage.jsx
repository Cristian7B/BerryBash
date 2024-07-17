import { StartGameRedirect } from "./StartGameRedirect"
import { TitlePrincipal } from "./TitlePrincipal"
import ConfettiExplosion from './ConfettiExplosion'

export function PrincipalPage() {
    return (
        <div className="principalPageGame">
            <ConfettiExplosion/>
            <div className="titlePrincipal">
                <TitlePrincipal/>
                <StartGameRedirect/>
            </div>
        </div>
    )
}