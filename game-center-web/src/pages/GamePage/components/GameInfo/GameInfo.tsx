import styles from './styles/GameInfo.module.scss'
import { GameInfoBlockLeft } from './components'
import { FC } from 'react'

export const GameInfo: FC = (): JSX.Element => {
  return (
    <div className={styles.gameInfoContainer}>
      <GameInfoBlockLeft />
      <div className={styles.gameInfoBlockRight}>2</div>
    </div>
  )
}
