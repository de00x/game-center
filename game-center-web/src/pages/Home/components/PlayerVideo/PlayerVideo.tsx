import { IPlayerVideoProps } from './types/PlayerVideo.types'
import styles from './styles/PlayerVideo.module.scss'
import { FC, useEffect, useRef } from 'react'

export const PlayerVideo: FC<IPlayerVideoProps> = ({ gameItem, currentPlayVideo }): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoPlayerRef: any = useRef()

  useEffect(() => {
    if (currentPlayVideo === gameItem.id) {
      videoPlayerRef.current.play()
    } else videoPlayerRef.current.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayVideo])

  return (
    <video
      className={styles.itemPlayer}
      muted
      loop
      ref={videoPlayerRef}
      src={gameItem.clip !== null ? gameItem.clip : undefined}
    />
  )
}
