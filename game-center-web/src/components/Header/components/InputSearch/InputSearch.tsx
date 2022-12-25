import { ReactComponent as Search } from './img/search.svg'
import axios, { AxiosResponse } from 'axios'
import styles from './styles/InputSearch.module.scss'
import { FC, memo, useEffect, useState } from 'react'

const apiKey = '4089d1fab1a545d5997b89198910cfa4'

const InputSearch: FC = (): JSX.Element => {
  const [visibleHotKeyInput, setVisibleHotKeyInput] = useState(true)
  const [currentSearchGames, setCurrentSearchGames] = useState('')
  const [searchInputData, setSearchInputData] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((res) => updateCurrSearchGames(res))
      .catch((err) => console.log('err', err))
  }, [])

  const updateCurrSearchGames = (res: AxiosResponse): void => {
    let response: string = res.data.count.toString()
    const strFirst: string = response.slice(0, -3)
    const strLast: string = response.slice(-3)
    response = strFirst + ',' + strLast
    response.length > 0
      ? setCurrentSearchGames(`Search ${response} games`)
      : setCurrentSearchGames('Search 840,735 games')
  }

  return (
    <div className={styles.headerInputContainer}>
      <Search />
      <input
        value={searchInputData}
        placeholder={currentSearchGames}
        onMouseLeave={() => setVisibleHotKeyInput(true)}
        onMouseEnter={() => setVisibleHotKeyInput(false)}
        onChange={(e) => setSearchInputData(e.target.value)}
      />
      {visibleHotKeyInput && searchInputData.length === 0 && (
        <>
          <div className={styles.inputHotKeyAlt}>alt</div>
          <div className={styles.inputHotKeyPlus}>+</div>
          <div className={styles.inputHotKeyEnter}>enter</div>
        </>
      )}
    </div>
  )
}

export default memo(InputSearch)
