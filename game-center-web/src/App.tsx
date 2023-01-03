import { Route, Routes } from 'react-router-dom'
import { GamePage } from './pages/GamePage'
import { Home } from './pages/Home'
import { FC } from 'react'
import './index.css'

const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game-page" element={<GamePage />} />
      </Routes>
    </>
  )
}

export default App
