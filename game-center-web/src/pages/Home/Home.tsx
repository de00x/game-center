import ItemIMGPlatforms from './components/ItemIMGPlatforms/ItemIMGPlatforms'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Ellipsis } from './img/Ellipsis.svg'
import HomeControllers from './services/HomeControllers'
import { ReactComponent as Plus } from './img/Plus.svg'
import { CSSTransition } from 'react-transition-group'
import { SkeletonHome } from './components/Skeleton'
import HomeService from './services/Home.service'
import { IGameCard } from './types/Home.types'
import styles from './styles/Home.module.scss'
import { FC, useState } from 'react'
import './styles/index.scss'
import cn from 'classnames'
import {
  AdditionalyInfoItem,
  PlayerBackground,
  PlayerPictures,
  PlayFullVideo,
  PlayerVideo,
} from './components'

export const Home: FC = (): JSX.Element => {
  const [urlPlayFullVideo, setUrlPlayFullVideo] = useState('')
  const [currentPlayVideo, setCurrentPlayVideo] = useState(0)
  const [gameCard, setGameCard] = useState<IGameCard[]>([])
  const [isLoadingPage, setIsLoadingPage] = useState(true)

  /// useEffects ///
  HomeService.GetFirstGamePage(setGameCard, setIsLoadingPage)
  /// useEffects ///

  /// controllers ///
  const { downloadNextGamePage } = HomeControllers({ gameCard, setGameCard })
  /// controllers ///

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>New and trending</div>
      <div className={styles.subHeader}>Based on player counts and release date</div>
      <div className={styles.mainContainer}>
        {!isLoadingPage ? (
          <>
            <CSSTransition
              in={urlPlayFullVideo !== ''}
              classNames="playFullVideo"
              timeout={700}
              unmountOnExit
            >
              <PlayFullVideo
                urlPlayFullVideo={urlPlayFullVideo}
                setUrlPlayFullVideo={setUrlPlayFullVideo}
              />
            </CSSTransition>
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
                    <>
                      {gameItem.clip !== null ? (
                        <PlayerVideo currentPlayVideo={currentPlayVideo} gameItem={gameItem} />
                      ) : (
                        <PlayerPictures gameItem={gameItem} />
                      )}
                    </>
                  )}
                  <PlayerBackground
                    gameItem={gameItem}
                    currentPlayVideo={currentPlayVideo}
                    setUrlPlayFullVideo={setUrlPlayFullVideo}
                  />
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
          </>
        ) : (
          <SkeletonHome />
        )}
      </div>
      <div className={styles.btnLoadMoreContainer}>
        <button onClick={downloadNextGamePage}>Load more</button>
      </div>
    </div>
  )
}
