import styles from './styles/GameButtonsRating.module.scss'
import { FC, memo } from 'react'

const GameButtonsRating: FC = () => {
  return (
    <div className={styles.gameRating}>
      <div className={styles.categoryRating}>
        <div>Exceptional</div>
        <span>143 RATINGS</span>
      </div>
      <div className={styles.categoryGenres}>
        <div>#340</div>
        <span>RPG</span>
      </div>
      <div className={styles.totalRating}>
        <div>#1</div>
        <span>TOP 2023</span>
      </div>
    </div>
  )
}

export default memo(GameButtonsRating)
