import styles from './styles/GameInfo.module.scss'
import { FC, useEffect } from 'react'
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
import axios from 'axios'

export const GameInfo: FC = (): JSX.Element => {
  useEffect(() => {
    const currentGamePageID = Number(localStorage.getItem('current-game-page-id'))
    axios
      .get(`/gameInfoPage/?currentInfoPage=${currentGamePageID}`)
      .then((res) => console.log('res', res))
      .catch((err) => console.log('err', err))
  }, [])

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
