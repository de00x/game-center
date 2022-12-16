import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { FC } from 'react'

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default App
