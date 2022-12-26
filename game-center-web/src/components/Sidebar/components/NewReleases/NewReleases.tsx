import { ReactComponent as Last30Days } from './img/Last30Days.svg'
import { ReactComponent as ReleaseCal } from './img/ReleaseCal.svg'
import { ReactComponent as ThisWeek } from './img/ThisWeek.svg'
import { ReactComponent as NextWeek } from './img/NextWeek.svg'
import styles from './styles/NewReleases.module.scss'
import { FC } from 'react'

export const NewReleases: FC = (): JSX.Element => {
  return (
    <div className={styles.newReleasesContainer}>
      New Releases
      <div className={styles.newReleasesItem}>
        <div className={styles.newReleasesSVG}>
          <Last30Days />
        </div>
        Last 30 days
      </div>
      <div className={styles.newReleasesItem}>
        <div className={styles.newReleasesSVG}>
          <ThisWeek />
        </div>
        This week
      </div>
      <div className={styles.newReleasesItem}>
        <div className={styles.newReleasesSVG}>
          <NextWeek />
        </div>
        Next week
      </div>
      <div className={styles.newReleasesItem}>
        <div className={styles.newReleasesSVG}>
          <ReleaseCal />
        </div>
        Release calendar
      </div>
    </div>
  )
}
