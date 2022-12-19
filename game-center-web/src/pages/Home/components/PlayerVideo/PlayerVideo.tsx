import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { IPlayerVideoProps } from './types/PlayerVideo.types'
import { ReactComponent as Play } from './img/Play.svg'
import { FC } from 'react'
import cn from 'classnames'
import './styles/index.scss'
import ReactPlayer from 'react-player/youtube'
import styles from './styles/PlayerVideo.module.scss'

export const PlayerVideo: FC<IPlayerVideoProps> = ({
  clipURL,
  logoImg,
  isPlayVideo,
}): JSX.Element => {
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
        url={clipURL}
        className="itemPlayer"
        playing={isPlayVideo}
        volume={0}
        muted={true}
      />
      <img src={logoImg} alt="gameLogo" className={gameLogo} />
      <div className={gameLogoPlaySVG}>
        <Play />
      </div>
      <div className={playFullVideoBtn}>
        <PlayYouTubeBtn /> Play full video
      </div>
    </div>
  )
}
