import { IIGameInfo } from '../types/GameInfo.types'
import { useEffect } from 'react'
import axios from 'axios'

const GameInfoService = {
  GetCurrentGamePageInfo(setCurrentGameInfo: React.Dispatch<React.SetStateAction<IIGameInfo[]>>) {
    useEffect(() => {
      const currentGamePageID = Number(localStorage.getItem('current-game-page-id'))
      axios
        .get(`/gameInfoPage/?currentInfoPage=${currentGamePageID}`)
        .then((res) => setCurrentGameInfo(res.data))
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },
}

export default GameInfoService
