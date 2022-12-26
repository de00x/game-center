import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { IPlayerVideoBGDProps } from './types/PlayerVideo.types'
import { ReactComponent as Pictures } from './img/pictures.svg'
import PlayerVideoStyles from './styles/PlayerVideoStyles'
import { ReactComponent as Play } from './img/Play.svg'
import { FC } from 'react'

export const PlayerBackground: FC<IPlayerVideoBGDProps> = ({ ...props }) => {
  /// styles ///
  const { gameLogo, gameLogoPlaySVG, playFullVideoBtn } = PlayerVideoStyles({ ...props })
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
