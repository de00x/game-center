import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { ReactComponent as PlayStation4 } from './img/PlayStation4.svg'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Ellipsis } from './img/Ellipsis.svg'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import { ReactComponent as Plus } from './img/Plus.svg'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC, useState } from 'react'
import styles from './styles/Home.module.scss'
import './styles/index.scss'
import { AdditionalyInfoItem, PlayerVideo } from './components'

export const Home: FC = (): JSX.Element => {
  const [isPlayVideo, setIsPlayVideo] = useState(false)

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
          <PlayerVideo isPlayVideo={isPlayVideo} />
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
            {isPlayVideo && <AdditionalyInfoItem />}
          </div>
        </div>
      </div>
    </div>
  )
}
