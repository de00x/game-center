import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { FC } from 'react'
import './index.css'

const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>Page not Found</div>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
