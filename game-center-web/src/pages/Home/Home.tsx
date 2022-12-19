import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { ReactComponent as PlayStation4 } from './img/PlayStation4.svg'
import { ReactComponent as ArrowRight } from './img/ArrowRight.svg'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Ellipsis } from './img/Ellipsis.svg'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import { ReactComponent as Play } from './img/Play.svg'
import { ReactComponent as Plus } from './img/Plus.svg'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './styles/Home.module.scss'
import cn from 'classnames'
import './styles/index.scss'

export const Home: FC = (): JSX.Element => {
  const [isPlayVideo, setIsPlayVideo] = useState(false)

  /// styles ///
  const gameLogo = cn(styles.gameLogo, { [styles.gameLogoOff]: isPlayVideo })
  const gameLogoPlaySVG = cn(styles.gameLogoPlaySVG, { [styles.gameLogoPlaySVGOff]: isPlayVideo })
  const playFullVideoBtn = cn(styles.playFullVideoBtn, {
    [styles.playFullVideoBtnActive]: isPlayVideo,
  })
  /// styles ///

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>New and trending</div>
      <div className={styles.subHeader}>Based on player counts and release date</div>
      <div className={styles.mainContainer}>
        <div
          className={styles.mainItem}
          onMouseOver={() => setIsPlayVideo(true)}
          onMouseOut={() => setIsPlayVideo(false)}
        >
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
          <div className={styles.itemInfoContainer}>
            <div className={styles.itemPlatforms}>
              <PC />
              <PlayStation4 />
              <XboxOne />
              <IOS />
              <Android />
              <NintendoSwitch />
            </div>
            <div className={styles.itemName}>Vampire: The Masquerade - Bloodlines 2</div>
            <div className={styles.itemControllersContainer}>
              <div className={styles.controllerPlus}>
                <Plus />
              </div>
              <CSSTransition
                in={isPlayVideo}
                classNames="itemControllers"
                timeout={500}
                unmountOnExit
              >
                <div className={styles.additionalyControllers}>
                  <div>
                    <Wishlist />
                  </div>
                  <div>
                    <Ellipsis />
                  </div>
                </div>
              </CSSTransition>
            </div>
            {isPlayVideo && (
              <div className={styles.additionalyInfoItemContainer}>
                <div className={styles.releaseDate}>
                  <div>Release Date:</div>
                  <div>Dec 31, 2023</div>
                </div>
                <div className={styles.genres}>
                  <div>Genres:</div>
                  <div>Action, RPG</div>
                </div>
                <div className={styles.chart}>
                  <div>Chart:</div>
                  <div>#1 Top 2023</div>
                </div>
                <div className={styles.btnShowMore}>
                  Show more like this <ArrowRight />
                </div>
                <div className={styles.btnHideGame}>Hide this game</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
