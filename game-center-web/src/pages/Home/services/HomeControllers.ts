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
      props.setGameCard([...props.gameCard, ...res.data])
      localStorage.setItem('currentDownloadPage', '2')
    }
  }
  return { downloadNextGamePage }
}

export default HomeControllers
