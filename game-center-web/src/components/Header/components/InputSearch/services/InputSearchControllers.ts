import { IInputControllersProps } from '../types/InputSearch.types'
import { AxiosResponse } from 'axios'

const InputSearchControllers = ({ ...props }: IInputControllersProps) => {
  const updateCurrSearchGames = (res: AxiosResponse) => {
    let response: string = res.data.count.toString()
    const strFirst: string = response.slice(0, -3)
    const strLast: string = response.slice(-3)
    response = strFirst + ',' + strLast
    response.length > 0
      ? props.setCurrentSearchGames(`Search ${response} games`)
      : props.setCurrentSearchGames('Search 840,735 games')
  }
  return { updateCurrSearchGames }
}

export default InputSearchControllers
