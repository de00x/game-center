import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { ReactComponent as Play } from './img/Play.svg'
import { FC } from 'react'
import cn from 'classnames'
import styles from './styles/PlayerVideo.module.scss'
import { IPlayerVideoProps } from './types/PlayerVideo.types'

export const PlayerBackground: FC<IPlayerVideoProps> = ({ gameItem, currentPlayVideo }) => {
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
    <>
      <img src={gameItem.logoImg} alt="gameLogo" className={gameLogo} />
      <div className={gameLogoPlaySVG}>
        <Play />
      </div>
      <div className={playFullVideoBtn}>
        <PlayYouTubeBtn /> Play full video
      </div>
    </>
  )
}
