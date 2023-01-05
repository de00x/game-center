import { IHomeControllersProps } from '../types/Home.types'
import axios, { AxiosResponse } from 'axios'

const HomeControllers = ({ ...props }: IHomeControllersProps) => {
  const downloadNextGamePage = () => {
    const currentDownloadPage = Number(localStorage.getItem('currentDownloadPage'))
    axios
      .get(`/gamePages/?currentPage=${currentDownloadPage !== null ? currentDownloadPage + 1 : 1}`)
      .then((res) => responseNextGamePage(res))
      .catch((err) => console.log('err', err))
    const responseNextGamePage = (res: AxiosResponse) => {
      props.setGameCard(res.data)
      const prevLSDownloadPage = Number(localStorage.getItem('currentDownloadPage'))
      const nextLSDownloadPage = String(prevLSDownloadPage + 1)
      localStorage.setItem('currentDownloadPage', nextLSDownloadPage)
    }
  }
  const logicForButton = Number(localStorage.getItem('currentDownloadPage')) > 4

  return { downloadNextGamePage, logicForButton }
}

export default HomeControllers
