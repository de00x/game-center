import { IGameButtonsRatingProps } from './types/GameButtonsRating.types'
import styles from './styles/GameButtonsRating.module.scss'
import { FC, memo } from 'react'

const GameButtonsRating: FC<IGameButtonsRatingProps> = ({ ...props }) => {
  return (
    <div className={styles.gameRating}>
      <div className={styles.categoryRating}>
        <div>{props.gameInfo.categoryRating}</div>
        <span>{props.gameInfo.categoryRatingNumber} RATINGS</span>
      </div>
      <div className={styles.categoryGenres}>
        <div>#{props.gameInfo.genresRatingNumber}</div>
        <span>{props.gameInfo.categoryGenres}</span>
      </div>
      <div className={styles.totalRating}>
        <div>#{props.gameInfo.totalRatingNumber}</div>
        <span>{props.gameInfo.totalRatingName}</span>
      </div>
    </div>
  )
}

export default memo(GameButtonsRating)
