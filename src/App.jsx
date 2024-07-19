import { MouseFollower } from './modules/principal/components/MouseFollower'
import { PrincipalPage } from './modules/principal/components/PrincipalPage'
import { GamePage } from './modules/game/components/GamePage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavPage } from './modules/principal/components/NavPage'
import { Analytics } from '@vercel/analytics/react'
import { stylesBackground } from './modules/game/utils/consts'

function App() {
  return (
    <div style={stylesBackground}>
    <Analytics/>
    <Router>
      <MouseFollower/>
      <NavPage/>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}></Route>
        <Route path='/game' element={<GamePage/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
