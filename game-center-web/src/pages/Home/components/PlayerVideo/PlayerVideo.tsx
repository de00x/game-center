import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { IPlayerVideoProps } from './types/PlayerVideo.types'
import { ReactComponent as Play } from './img/Play.svg'
import { FC } from 'react'
import cn from 'classnames'
import './styles/index.scss'
import ReactPlayer from 'react-player/youtube'
import styles from './styles/PlayerVideo.module.scss'

export const PlayerVideo: FC<IPlayerVideoProps> = ({ gameItem, currentPlayVideo }): JSX.Element => {
  /// styles ///
  const gameLogo = cn(styles.gameLogo, { [styles.gameLogoOff]: currentPlayVideo === gameItem.id })
  const gameLogoPlaySVG = cn(styles.gameLogoPlaySVG, {
    [styles.gameLogoPlaySVGOff]: currentPlayVideo === gameItem.id,
  })
  const playFullVideoBtn = cn(styles.playFullVideoBtn, {
    [styles.playFullVideoBtnActive]: currentPlayVideo === gameItem.id,
  })
  /// styles ///

  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        url={gameItem.clipURL}
        className="itemPlayer"
        playing={currentPlayVideo === gameItem.id}
        volume={0}
        muted={true}
      />
      <img src={gameItem.logoImg} alt="gameLogo" className={gameLogo} />
      <div className={gameLogoPlaySVG}>
        <Play />
      </div>
      <a href={gameItem.clipURL} target="_blank" rel="noreferrer">
        <div className={playFullVideoBtn}>
          <PlayYouTubeBtn /> Play full video
        </div>
      </a>
    </div>
  )
}
