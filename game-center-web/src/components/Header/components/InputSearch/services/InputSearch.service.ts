import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'

const apiKey = '4089d1fab1a545d5997b89198910cfa4'

const InputSearchService = {
  GetCurrentSearchGames(updateCurrSearchGames: (res: AxiosResponse) => void) {
    useEffect(() => {
      axios
        .get(`https://api.rawg.io/api/games?key=${apiKey}`)
        .then((res) => updateCurrSearchGames(res))
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },
}

export default InputSearchService
