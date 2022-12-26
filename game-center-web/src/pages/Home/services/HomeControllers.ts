import { IHomeControllersProps } from '../types/Home.types'
import axios, { AxiosResponse } from 'axios'

const HomeControllers = ({ ...props }: IHomeControllersProps) => {
  const downloadNextGamePage = () => {
    const currentGamePage = Number(localStorage.getItem('currentGamePage'))
    axios
      .get(`/gamePages/?currentPage=${currentGamePage !== null ? currentGamePage + 1 : 1}`)
      .then((res) => responseNextGamePage(res))
      .catch((err) => console.log('err', err))
    const responseNextGamePage = (res: AxiosResponse) => {
      props.setGameCard([...props.gameCard, ...res.data])
      localStorage.setItem('currentGamePage', '2')
    }
  }
  return { downloadNextGamePage }
}

export default HomeControllers
