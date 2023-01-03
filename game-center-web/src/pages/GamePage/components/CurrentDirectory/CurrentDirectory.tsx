import styles from './styles/CurrentDirectory.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const CurrentDirectory: FC = (): JSX.Element => {
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
      <div>Vampire: The Masquerade - Bloodlines 2</div>
    </div>
  )
}
