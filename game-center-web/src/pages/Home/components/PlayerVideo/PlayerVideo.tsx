import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { IPlayerVideoProps } from './types/PlayerVideo.types'
import { ReactComponent as Play } from './img/Play.svg'
import { FC } from 'react'
import cn from 'classnames'
import './styles/index.scss'
import ReactPlayer from 'react-player/youtube'
import styles from './styles/PlayerVideo.module.scss'

export const PlayerVideo: FC<IPlayerVideoProps> = ({ isPlayVideo }): JSX.Element => {
  /// styles ///
  const gameLogo = cn(styles.gameLogo, { [styles.gameLogoOff]: isPlayVideo })
  const gameLogoPlaySVG = cn(styles.gameLogoPlaySVG, { [styles.gameLogoPlaySVGOff]: isPlayVideo })
  const playFullVideoBtn = cn(styles.playFullVideoBtn, {
    [styles.playFullVideoBtnActive]: isPlayVideo,
  })
  /// styles ///

  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        url="https://youtu.be/OkcNFoW5dzs"
        className="itemPlayer"
        playing={isPlayVideo}
        volume={0}
        muted={true}
      />
      <img
        src="https://cdn.cloudflare.steamstatic.com/steam/apps/532790/capsule_616x353.jpg?t=1636013283"
        alt="gameLogo"
        className={gameLogo}
      />
      <div className={gameLogoPlaySVG}>
        <Play />
      </div>
      <div className={playFullVideoBtn}>
        <PlayYouTubeBtn /> Play full video
      </div>
    </div>
  )
}
