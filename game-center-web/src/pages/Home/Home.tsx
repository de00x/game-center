import { AdditionalyInfoItem, ItemIMGPlatforms, PlayerVideo } from './components'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Ellipsis } from './img/Ellipsis.svg'
import { ReactComponent as Plus } from './img/Plus.svg'
import { CSSTransition } from 'react-transition-group'
import { FC, useEffect, useState } from 'react'
import { IGameCard } from './types/Home.types'
import axios from 'axios'
import './styles/index.scss'
import styles from './styles/Home.module.scss'

export const Home: FC = (): JSX.Element => {
  const [gameCard, setGameCard] = useState<IGameCard[]>([])
  const [isPlayVideo, setIsPlayVideo] = useState(false)

  useEffect(() => {
    axios
      .get('/gamePages')
      .then((res) => setGameCard(res.data))
      .catch((err) => console.log('err', err))
  }, [])

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>New and trending</div>
      <div className={styles.subHeader}>Based on player counts and release date</div>
      <div className={styles.mainContainer}>
        {gameCard.map((gameItem) => (
          <div
            className={styles.mainItem}
            onMouseOver={() => setIsPlayVideo(true)}
            onMouseOut={() => setIsPlayVideo(false)}
            key={gameItem.id}
          >
            <PlayerVideo
              isPlayVideo={isPlayVideo}
              clipURL={gameItem.clipURL}
              logoImg={gameItem.logoImg}
            />
            <div className={styles.itemInfoContainer}>
              <ItemIMGPlatforms gameItem={gameItem} />
              <div className={styles.itemName}>{gameItem.name}</div>
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
              {isPlayVideo && <AdditionalyInfoItem gameItem={gameItem} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
