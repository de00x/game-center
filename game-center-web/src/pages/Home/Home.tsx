import ItemIMGPlatforms from './components/ItemIMGPlatforms/ItemIMGPlatforms'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Ellipsis } from './img/Ellipsis.svg'
import { ReactComponent as Plus } from './img/Plus.svg'
import { CSSTransition } from 'react-transition-group'
import { FC, useEffect, useState } from 'react'
import { IGameCard } from './types/Home.types'
import styles from './styles/Home.module.scss'
import './styles/index.scss'
import cn from 'classnames'
import axios, { AxiosResponse } from 'axios'
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

  useEffect(() => {
    localStorage.setItem('currentGamePage', '1')
    const currentGamePage = Number(localStorage.getItem('currentGamePage'))
    axios
      .get(`/gamePages/?currentPage=${currentGamePage !== null ? currentGamePage : 1}`)
      .then((res) => setGameCard(res.data))
      .catch((err) => console.log('err', err))
  }, [])

  const downloadNextGamePage = (): void => {
    const currentGamePage = Number(localStorage.getItem('currentGamePage'))
    axios
      .get(`/gamePages/?currentPage=${currentGamePage !== null ? currentGamePage + 1 : 1}`)
      .then((res) => responseNextGamePage(res))
      .catch((err) => console.log('err', err))
    const responseNextGamePage = (res: AxiosResponse): void => {
      setGameCard([...gameCard, ...res.data])
      localStorage.setItem('currentGamePage', '2')
    }
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>New and trending</div>
      <div className={styles.subHeader}>Based on player counts and release date</div>
      <div className={styles.mainContainer}>
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
      </div>
      <div className={styles.btnLoadMoreContainer}>
        <button onClick={downloadNextGamePage}>Load more</button>
      </div>
    </div>
  )
}
