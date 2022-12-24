import { AdditionalyInfoItem, PlayerBackground, PlayerVideo } from './components'
import ItemIMGPlatforms from './components/ItemIMGPlatforms/ItemIMGPlatforms'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Ellipsis } from './img/Ellipsis.svg'
import { ReactComponent as Plus } from './img/Plus.svg'
import { CSSTransition } from 'react-transition-group'
import { FC, useEffect, useState } from 'react'
import { IGameCard } from './types/Home.types'
import axios from 'axios'
import './styles/index.scss'
import cn from 'classnames'
import styles from './styles/Home.module.scss'

export const Home: FC = (): JSX.Element => {
  const [gameCard, setGameCard] = useState<IGameCard[]>([])
  const [currentPlayVideo, setCurrentPlayVideo] = useState(0)

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
            className={cn(styles.mainItem, {
              [styles.mainItemActive]: currentPlayVideo === gameItem.id,
            })}
            onMouseOver={() => setCurrentPlayVideo(gameItem.id)}
            onMouseOut={() => setCurrentPlayVideo(0)}
            key={gameItem.id}
          >
            <div className={styles.playerWrapper}>
              {currentPlayVideo === gameItem.id && (
                <PlayerVideo currentPlayVideo={currentPlayVideo} gameItem={gameItem} />
              )}
              <PlayerBackground currentPlayVideo={currentPlayVideo} gameItem={gameItem} />
            </div>
            <div className={styles.itemInfoContainer}>
              <ItemIMGPlatforms gameItem={gameItem} />
              <div className={styles.itemName}>{gameItem.name}</div>
              <div className={styles.itemControllersContainer}>
                <div className={styles.controllerPlus}>
                  <Plus />
                </div>
                <CSSTransition
                  in={currentPlayVideo === gameItem.id}
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
            </div>
            {currentPlayVideo === gameItem.id && (
              <AdditionalyInfoItem gameItem={gameItem} currentPlayVideo={currentPlayVideo} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
