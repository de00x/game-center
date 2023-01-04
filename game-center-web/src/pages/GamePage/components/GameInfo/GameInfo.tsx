import styles from './styles/GameInfo.module.scss'
import { FC } from 'react'
import {
  GameBtnsReviewComment,
  GamePlatformsPlaytime,
  GameSysRequirements,
  GameButtonsRating,
  GameButtonsAddTo,
  GameRatingScale,
  AboutTheGame,
  GameWebsite,
  GameName,
} from './components'

export const GameInfo: FC = (): JSX.Element => {
  return (
    <div className={styles.gameInfoContainer}>
      <div className={styles.gameInfoBlockLeft}>
        <GamePlatformsPlaytime />
        <GameName />
        <GameButtonsAddTo />
        <GameButtonsRating />
        <GameRatingScale />
        <GameBtnsReviewComment />
        <AboutTheGame />
        <GameWebsite />
        <GameSysRequirements />
      </div>
      <div className={styles.gameInfoBlockRight}>2</div>
    </div>
  )
}
