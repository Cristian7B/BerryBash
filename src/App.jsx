import { MouseFollower } from './modules/principal/components/MouseFollower'
import { PrincipalPage } from './modules/principal/components/PrincipalPage'
import { GamePage } from './modules/game/components/GamePage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavPage } from './modules/principal/components/NavPage'

function App() {
  return (
    <>
    <Router>
      <MouseFollower/>
      <NavPage/>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}></Route>
        <Route path='/game' element={<GamePage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
