import { ReactComponent as Search } from './img/search.svg'
import { CSSTransition } from 'react-transition-group'
import { FC, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { ratedImg } from './img/img'
import './styles/index.scss'
import styles from './styles/Header.module.scss'

const apiKey = '4089d1fab1a545d5997b89198910cfa4'

const otherMenuPoints = [
  'Leaderboard',
  'Discord',
  '@rawgtheworld',
  '@rawgthepichures',
  'Get an API key',
  'Sitemap',
]

export const Header: FC = (): JSX.Element => {
  const [isOpenOtherFlyMenu, setIsOpenOtherFlyMenu] = useState(false)
  const [currentSearchGames, setCurrentSearchGames] = useState('')

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
    <div className={styles.headerContainer}>
      <div className={styles.headerBtnHome}>RAWG</div>
      <div className={styles.headerBtnRate}>
        Rate top games
        <img src={ratedImg} alt="ratedImg" />
      </div>
      <div className={styles.headerInputContainer}>
        <Search />
        <input placeholder={currentSearchGames} />
        <div className={styles.inputHotKeyAlt}>alt</div>
        <div className={styles.inputHotKeyPlus}>+</div>
        <div className={styles.inputHotKeyEnter}>enter</div>
      </div>
      <div className={styles.headerLogIn}>LOG IN</div>
      <div className={styles.headerSignUp}>SIGN UP</div>
      <div className={styles.headerApi}>API</div>
      <div
        className={styles.headerOtherMenuContainer}
        onMouseOver={() => setIsOpenOtherFlyMenu(true)}
      >
        <CSSTransition
          in={isOpenOtherFlyMenu}
          classNames="otherFlyMenu"
          timeout={300}
          unmountOnExit
        >
          <div className={styles.headerOtherMenu} onMouseLeave={() => setIsOpenOtherFlyMenu(false)}>
            {otherMenuPoints.map((point) => (
              <div key={point}>{point}</div>
            ))}
          </div>
        </CSSTransition>
        ...
      </div>
    </div>
  )
}
