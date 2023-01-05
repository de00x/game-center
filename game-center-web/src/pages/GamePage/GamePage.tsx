import styles from './styles/GamePage.module.scss'
import { Header, Sidebar } from '../../components'
import { GameInfo } from './components'
import { FC } from 'react'

export const GamePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.gamePageWrapper}>
        <Sidebar />
        <div className={styles.gamePageContainer}>
          <GameInfo />
        </div>
      </div>
    </>
  )
}
