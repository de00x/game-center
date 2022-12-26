import InputSearchControllers from './services/InputSearchControllers'
import InputSearchService from './services/InputSearch.service'
import { ReactComponent as Search } from './img/search.svg'
import styles from './styles/InputSearch.module.scss'
import { FC, memo, useState } from 'react'

const InputSearch: FC = (): JSX.Element => {
  const [visibleHotKeyInput, setVisibleHotKeyInput] = useState(true)
  const [currentSearchGames, setCurrentSearchGames] = useState('')
  const [searchInputData, setSearchInputData] = useState('')
  const [isFocusInput, setIsFocusInput] = useState(false)

  /// controllers ///
  const { updateCurrSearchGames } = InputSearchControllers({ setCurrentSearchGames })
  /// controllers ///

  /// useEffects ///
  InputSearchService.GetCurrentSearchGames(updateCurrSearchGames)
  /// useEffects ///

  return (
    <div className={styles.headerInputContainer}>
      <Search />
      <input
        value={searchInputData}
        placeholder={currentSearchGames}
        onFocus={() => setIsFocusInput(true)}
        onBlur={() => setIsFocusInput(false)}
        onMouseLeave={() => setVisibleHotKeyInput(true)}
        onMouseEnter={() => setVisibleHotKeyInput(false)}
        onChange={(e) => setSearchInputData(e.target.value)}
      />
      {visibleHotKeyInput && !isFocusInput && (
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
