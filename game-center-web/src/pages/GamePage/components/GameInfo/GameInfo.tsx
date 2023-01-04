import styles from './styles/GameInfo.module.scss'
import { FC } from 'react'
import {
  GameBtnsReviewComment,
  GamePlatformsPlaytime,
  GameInfoVideoPlayer,
  GameSysRequirements,
  GameInfoPhotoAlbum,
  GameButtonsRating,
  GameButtonsAddTo,
  GameContributors,
  GameRatingScale,
  EditTheGameInfo,
  WhereToBuyGame,
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
      <div className={styles.gameInfoBlockRight}>
        <GameInfoVideoPlayer />
        <GameInfoPhotoAlbum />
        <EditTheGameInfo />
        <WhereToBuyGame />
        <GameContributors />
      </div>
    </div>
  )
}
