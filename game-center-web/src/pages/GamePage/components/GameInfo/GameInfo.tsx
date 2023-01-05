import {
  GameBtnsReviewComment,
  GamePlatformsPlaytime,
  GameInfoVideoPlayer,
  GameSysRequirements,
  GameInfoPhotoAlbum,
  GameButtonsRating,
  GameButtonsAddTo,
  GameContributors,
  CurrentDirectory,
  GameRatingScale,
  EditTheGameInfo,
  WhereToBuyGame,
  AboutTheGame,
  GameWebsite,
  GameName,
} from './components'
import { FC, useState } from 'react'
import styles from './styles/GameInfo.module.scss'
import { IIGameInfo } from './types/GameInfo.types'
import GameInfoService from './services/GameInfo.service'

export const GameInfo: FC = (): JSX.Element => {
  const [currentGameInfo, setCurrentGameInfo] = useState<IIGameInfo[]>([])

  /// useEffects ///
  GameInfoService.GetCurrentGamePageInfo(setCurrentGameInfo)
  /// useEffects ///

  return (
    <>
      {currentGameInfo.map((gameInfo) => (
        <div className={styles.gameInfoContainer} key={gameInfo.id}>
          <div className={styles.gameInfoBlockLeft}>
            <CurrentDirectory gameName={gameInfo.name} />
            <GamePlatformsPlaytime />
            <GameName gameName={gameInfo.name} />
            <GameButtonsAddTo ratingMyGames={gameInfo.ratingMyGames} />
            <GameButtonsRating gameInfo={gameInfo} />
            <GameRatingScale gameInfo={gameInfo} />
            <GameBtnsReviewComment />
            <AboutTheGame gameInfo={gameInfo} />
            <GameWebsite gameWebSite={gameInfo.website} />
            <GameSysRequirements systemReqPC={gameInfo.systemRequirementsPC} />
          </div>
          <div className={styles.gameInfoBlockRight}>
            <GameInfoVideoPlayer gameInfo={gameInfo} />
            <GameInfoPhotoAlbum photoAlbum={gameInfo.photoAlbum} />
            <EditTheGameInfo lastModified={gameInfo.lastModified} />
            <WhereToBuyGame gameInfo={gameInfo} />
            <GameContributors />
          </div>
        </div>
      ))}
    </>
  )
}
