import { ReactComponent as PlayYouTubeBtn } from './img/PlayYouTubeBtn.svg'
import { IGameInfoVPlayerProps } from './types/GameInfoVPlayer.types'
import { PlayerFullVideo } from '../../../../../../../components'
import styles from './styles/GameIVideoPlayer.module.scss'
import { ReactComponent as Play } from './img/Play.svg'
import { CSSTransition } from 'react-transition-group'
import { GameIVideoPlayerService } from './services'
import { FC, memo, useRef, useState } from 'react'
import './styles/index.scss'

const GameInfoVideoPlayer: FC<IGameInfoVPlayerProps> = ({ ...props }): JSX.Element => {
  const [urlPlayFullVideo, setUrlPlayFullVideo] = useState('')
  const [isPlayingVideo, setIsPlayingVideo] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoPlayerRef: any = useRef()

  /// useEffects ///
  GameIVideoPlayerService.GetControlOverPlayer(urlPlayFullVideo, isPlayingVideo, videoPlayerRef)
  /// useEffects ///

  return (
    <>
      <CSSTransition
        in={urlPlayFullVideo !== ''}
        classNames="playFullVideo"
        timeout={700}
        unmountOnExit
      >
        <PlayerFullVideo
          urlPlayFullVideo={urlPlayFullVideo}
          setUrlPlayFullVideo={setUrlPlayFullVideo}
        />
      </CSSTransition>
      <div className={styles.gameInfoVPlayerContainer}>
        <video
          loop
          muted
          ref={videoPlayerRef}
          className={styles.itemPlayer}
          onClick={() => setIsPlayingVideo(!isPlayingVideo)}
          src={props.gameInfo.clip}
        />
        <CSSTransition
          in={isPlayingVideo}
          classNames="btnPlayFullVideo"
          timeout={200}
          unmountOnExit
        >
          <div
            className={styles.btnPlayFullVideo}
            onClick={() => setUrlPlayFullVideo(props.gameInfo.fullVideo)}
          >
            <PlayYouTubeBtn /> Play full trailer
          </div>
        </CSSTransition>
        <CSSTransition
          in={!isPlayingVideo}
          classNames="btnPlayFullVideo"
          timeout={200}
          unmountOnExit
        >
          <div className={styles.playVideoSVG}>
            <Play onClick={() => setIsPlayingVideo(!isPlayingVideo)} />
          </div>
        </CSSTransition>
        <CSSTransition
          in={!isPlayingVideo}
          classNames="btnPlayFullVideo"
          timeout={200}
          unmountOnExit
        >
          <div
            className={styles.playVideoImageBGD}
            onClick={() => setIsPlayingVideo(!isPlayingVideo)}
          >
            <img src={props.gameInfo.logoImg} alt="videoImageBGD" />
          </div>
        </CSSTransition>
      </div>
    </>
  )
}

export default memo(GameInfoVideoPlayer)
