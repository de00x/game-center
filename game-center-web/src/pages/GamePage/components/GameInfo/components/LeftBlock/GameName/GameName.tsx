import { IGameNameProps } from './types/GameName.types'
import styles from './styles/GameName.module.scss'
import { FC, memo } from 'react'

const GameName: FC<IGameNameProps> = ({ ...props }): JSX.Element => {
  return <div className={styles.gameName}>{props.gameName}</div>
}

export default memo(GameName)
