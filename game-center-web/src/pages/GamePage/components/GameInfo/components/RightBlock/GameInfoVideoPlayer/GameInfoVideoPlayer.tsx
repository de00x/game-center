import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { IGameInfoVPlayerProps } from './types/GameInfoVPlayer.types'
import { FC, memo, useEffect, useRef, useState } from 'react'
import styles from './styles/GameIVideoPlayer.module.scss'
import { ReactComponent as Play } from './img/Play.svg'
import { CSSTransition } from 'react-transition-group'
import './styles/index.scss'

const GameInfoVideoPlayer: FC<IGameInfoVPlayerProps> = ({ ...props }): JSX.Element => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoPlayerRef: any = useRef()

  useEffect(() => {
    isPlayingVideo ? videoPlayerRef.current.play() : videoPlayerRef.current.pause()
  }, [isPlayingVideo])

  return (
    <div className={styles.gameInfoVPlayerContainer}>
      <video
        loop
        muted
        ref={videoPlayerRef}
        className={styles.itemPlayer}
        onClick={() => setIsPlayingVideo(!isPlayingVideo)}
        src={props.gameInfo.clip}
      />
      <CSSTransition in={isPlayingVideo} classNames="btnPlayFullVideo" timeout={200} unmountOnExit>
        <div className={styles.btnPlayFullVideo}>
          <PlayYouTubeBtn /> Play full trailer
        </div>
      </CSSTransition>
      <CSSTransition in={!isPlayingVideo} classNames="btnPlayFullVideo" timeout={200} unmountOnExit>
        <div className={styles.playVideoSVG}>
          <Play onClick={() => setIsPlayingVideo(!isPlayingVideo)} />
        </div>
      </CSSTransition>
      <CSSTransition in={!isPlayingVideo} classNames="btnPlayFullVideo" timeout={200} unmountOnExit>
        <div
          className={styles.playVideoImageBGD}
          onClick={() => setIsPlayingVideo(!isPlayingVideo)}
        >
          <img src={props.gameInfo.logoImg} alt="videoImageBGD" />
        </div>
      </CSSTransition>
    </div>
  )
}

export default memo(GameInfoVideoPlayer)
