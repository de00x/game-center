import { IPlayFullVideoProps } from './types/PlayFullVideo.types'
import { ReactComponent as Close } from './img/close.svg'
import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './styles/PlayFullVideo.module.scss'

export const PlayFullVideo: FC<IPlayFullVideoProps> = ({ ...props }) => {
  return (
    <div className={styles.fullVideoContainer}>
      <div className={styles.fullVideo}>
        <ReactPlayer url={props.urlPlayFullVideo} controls playing />
        <Close className={styles.closeBtn} onClick={() => props.setUrlPlayFullVideo('')} />
      </div>
    </div>
  )
}
