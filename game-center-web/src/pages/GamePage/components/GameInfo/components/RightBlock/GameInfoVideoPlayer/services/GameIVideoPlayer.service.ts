import { useEffect } from 'react'

const GameIVideoPlayerService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  GetControlOverPlayer(urlPlayFullVideo: string, isPlayingVideo: boolean, videoPlayerRef: any) {
    useEffect(() => {
      isPlayingVideo && urlPlayFullVideo === ''
        ? videoPlayerRef.current.play()
        : videoPlayerRef.current.pause()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlayingVideo, urlPlayFullVideo])
  },
}

export default GameIVideoPlayerService
