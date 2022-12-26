import { IPlayerVideoStylesProps } from '../types/PlayerVideo.types'
import styles from '../styles/PlayerVideo.module.scss'
import cn from 'classnames'

const PlayerVideoStyles = ({ ...props }: IPlayerVideoStylesProps) => {
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
  return { gameLogo, gameLogoPlaySVG, playFullVideoBtn }
}

export default PlayerVideoStyles
