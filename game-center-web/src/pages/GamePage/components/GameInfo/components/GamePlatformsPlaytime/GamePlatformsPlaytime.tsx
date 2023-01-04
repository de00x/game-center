import styles from './styles/GamePlatPlaytime.module.scss'
import { FC, memo } from 'react'

const GamePlatformsPlaytime: FC = (): JSX.Element => {
  return (
    <div className={styles.platforms__playtime}>
      <div>Platforms</div>
      <div>AVERAGE PLAYTIME: </div>
    </div>
  )
}

export default memo(GamePlatformsPlaytime)
