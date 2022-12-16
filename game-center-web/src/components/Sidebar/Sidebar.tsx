import { FC } from 'react'
import styles from './styles/Sidebar.module.scss'
import { Browse, Genres, NewReleases, Platforms, Top } from './components'

export const Sidebar: FC = (): JSX.Element => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.homePage}>Home</div>
      <div className={styles.reviewsPage}>Reviews</div>
      <NewReleases />
      <Top />
      <div className={styles.allGamesPage}>All Games</div>
      <Browse />
      <Platforms />
      <Genres />
    </div>
  )
}
