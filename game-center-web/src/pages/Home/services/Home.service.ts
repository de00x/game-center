import { IGameCard } from '../types/Home.types'
import { useEffect } from 'react'
import axios from 'axios'

const HomeService = {
  GetFirstGamePage(
    setGameCard: React.Dispatch<React.SetStateAction<IGameCard[]>>,
    setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    useEffect(() => {
      localStorage.setItem('currentGamePage', '1')
      const currentGamePage = Number(localStorage.getItem('currentGamePage'))
      axios
        .get(`/gamePages/?currentPage=${currentGamePage !== null ? currentGamePage : 1}`)
        .then((res) => {
          setGameCard(res.data)
          setIsLoadingPage(false)
        })
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },
}
export default HomeService
