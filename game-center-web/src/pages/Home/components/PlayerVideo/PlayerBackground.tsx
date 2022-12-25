import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { ReactComponent as Pictures } from './img/pictures.svg'
import { ReactComponent as Play } from './img/Play.svg'
import { FC } from 'react'
import cn from 'classnames'
import styles from './styles/PlayerVideo.module.scss'
import { IPlayerVideoBGDProps } from './types/PlayerVideo.types'

export const PlayerBackground: FC<IPlayerVideoBGDProps> = ({ ...props }) => {
  /// styles ///
  const gameLogo = cn(styles.gameLogo, {
    [styles.gameLogoOff]: props.currentPlayVideo === props.gameItem.id,
  })
  const gameLogoPlaySVG = cn(styles.gameLogoPlaySVG, {
    [styles.gameLogoPlaySVGOff]: props.currentPlayVideo === props.gameItem.id,
  })
  const playFullVideoBtn = cn(styles.playFullVideoBtn, {
    [styles.playFullVideoBtnActive]: props.currentPlayVideo === props.gameItem.id,
    [styles.playFullPicturesBtnActive]: props.gameItem.clip === null,
  })
  /// styles ///

  return (
    <>
      <img src={props.gameItem.logoImg} alt="gameLogo" className={gameLogo} />
      <div className={gameLogoPlaySVG}>
        {props.gameItem.clip !== null ? <Play /> : <Pictures />}
      </div>
      <div
        className={playFullVideoBtn}
        onClick={() => props.setUrlPlayFullVideo(props.gameItem.fullVideo)}
      >
        <PlayYouTubeBtn /> Play full trailer
      </div>
    </>
  )
}
