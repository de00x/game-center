import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { FC } from 'react'
import './index.css'

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="appMainWrapper">
        <Sidebar />
        <Home />
      </div>
    </>
  )
}

export default App
