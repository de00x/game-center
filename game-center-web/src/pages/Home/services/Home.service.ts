import { IGameCard } from '../types/Home.types'
import { useEffect } from 'react'
import axios from 'axios'

const HomeService = {
  GetFirstGamePage(
    setGameCard: React.Dispatch<React.SetStateAction<IGameCard[]>>,
    setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    useEffect(() => {
      localStorage.setItem('currentDownloadPage', '1')
      const currentDownloadPage = Number(localStorage.getItem('currentDownloadPage'))
      axios
        .get(`/gamePages/?currentPage=${currentDownloadPage !== null ? currentDownloadPage : 1}`)
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
