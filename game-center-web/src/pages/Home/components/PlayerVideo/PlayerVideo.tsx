import { IPlayerVideoProps } from './types/PlayerVideo.types'
import styles from './styles/PlayerVideo.module.scss'
import { FC, useEffect, useRef } from 'react'

export const PlayerVideo: FC<IPlayerVideoProps> = ({ ...props }): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoPlayerRef: any = useRef()

  useEffect(() => {
    if (props.gameItem.clip !== null) {
      if (props.currentPlayVideo === props.gameItem.id) {
        videoPlayerRef.current.play()
      } else videoPlayerRef.current.pause()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentPlayVideo])

  return (
    <video
      className={styles.itemPlayer}
      muted
      loop
      ref={videoPlayerRef}
      src={props.gameItem.clip !== null ? props.gameItem.clip : undefined}
    />
  )
}
