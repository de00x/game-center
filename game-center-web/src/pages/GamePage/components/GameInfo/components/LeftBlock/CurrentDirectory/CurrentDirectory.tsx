import { ICurrentDirectoryProps } from './types/CurrentDirectory.types'
import styles from './styles/CurrentDirectory.module.scss'
import { Link } from 'react-router-dom'
import { FC, memo } from 'react'

const CurrentDirectory: FC<ICurrentDirectoryProps> = ({ ...props }): JSX.Element => {
  return (
    <div className={styles.currentDirectory}>
      <Link to="/home">
        <div>HOME</div>
      </Link>
      <div>/</div>
      <Link to="/home">
        <div>GAMES</div>
      </Link>
      <div>/</div>
      <div>{props.gameName}</div>
    </div>
  )
}

export default memo(CurrentDirectory)
