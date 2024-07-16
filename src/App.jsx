import { MouseFollower } from './components/MouseFollower'
import './App.css'
import { PrincipalPage } from './components/PrincipalPage'
import { GamePage } from './components/GamePage'
import ConfettiExplosion from './components/ConfettiExplosion'

function App() {
  return (
    <>
      <MouseFollower/>
      <PrincipalPage/>
      <GamePage/>
      <ConfettiExplosion/>
    </>
  )
}

export default App
