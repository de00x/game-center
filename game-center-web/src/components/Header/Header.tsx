import { CSSTransition } from 'react-transition-group'
import styles from './styles/Header.module.scss'
import { InputSearch } from './components'
import { FC, useState } from 'react'
import { ratedImg } from './img/img'
import './styles/index.scss'

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

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBtnHome}>RAWG</div>
      <div className={styles.headerBtnRate}>
        Rate top games
        <img src={ratedImg} alt="ratedImg" />
      </div>
      <InputSearch />
      <div className={styles.headerLogIn}>LOG IN</div>
      <div className={styles.headerSignUp}>SIGN UP</div>
      <div className={styles.headerApi}>API</div>
      <div
        className={styles.headerOtherMenuContainer}
        onMouseEnter={() => setIsOpenOtherFlyMenu(true)}
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
