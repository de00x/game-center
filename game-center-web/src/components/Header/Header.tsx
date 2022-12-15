import { ReactComponent as Search } from './img/search.svg'
import { CSSTransition } from 'react-transition-group'
import { FC, useCallback, useState } from 'react'
import { ratedImg } from './img/img'
import './styles/index.scss'
import styles from './styles/Header.module.scss'

export const Header: FC = (): JSX.Element => {
  const [isOpenOtherFlyMenu, setIsOpenOtherFlyMenu] = useState(false)

  const openFlyOtherMenu = useCallback(() => {
    setIsOpenOtherFlyMenu(true)
  }, [])
  // const openFlyOtherMenu = () => {
  //   setIsOpenOtherFlyMenu(true)
  // }
  console.log('123')

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBtnHome}>RAWG</div>
      <div className={styles.headerBtnRate}>
        Rate top games
        <img src={ratedImg} alt="ratedImg" />
      </div>
      <div className={styles.headerInputContainer}>
        <Search />
        <input placeholder="Search 838,593 games" />
        <div className={styles.inputHotKeyAlt}>alt</div>
        <div className={styles.inputHotKeyPlus}>+</div>
        <div className={styles.inputHotKeyEnter}>enter</div>
      </div>
      <div className={styles.headerLogIn}>LOG IN</div>
      <div className={styles.headerSignUp}>SIGN UP</div>
      <div className={styles.headerApi}>API</div>
      <div className={styles.headerOtherMenuContainer} onMouseOver={openFlyOtherMenu}>
        <CSSTransition
          in={isOpenOtherFlyMenu}
          classNames="otherFlyMenu"
          timeout={300}
          unmountOnExit
        >
          <div className={styles.headerOtherMenu} onMouseLeave={() => setIsOpenOtherFlyMenu(false)}>
            <div>Leaderboard</div>
            <div>Discord</div>
            <div>@rawgtheworld</div>
            <div>@rawgthepichures</div>
            <div>Get an API key</div>
            <div>Sitemap</div>
          </div>
        </CSSTransition>
        ...
      </div>
    </div>
  )
}
