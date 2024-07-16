import { NavPage } from "./NavPage"
import { StartGameRedirect } from "./StartGameRedirect"
import { TitlePrincipal } from "./TitlePrincipal"

export function PrincipalPage() {
    return (
        <div className="principalPageGame">
            <NavPage/>
            <div className="titlePrincipal">
                <TitlePrincipal/>
                <StartGameRedirect/>
            </div>
        </div>
    )
}