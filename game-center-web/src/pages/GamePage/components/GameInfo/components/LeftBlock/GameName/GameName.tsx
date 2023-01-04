import styles from './styles/GameName.module.scss'
import { FC, memo } from 'react'

const GameName: FC = (): JSX.Element => {
  return <div className={styles.gameName}>Vampire: The Masquerade - Bloodlines 2</div>
}

export default memo(GameName)
