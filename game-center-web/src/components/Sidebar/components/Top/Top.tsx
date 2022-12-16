import { ReactComponent as BestOfTheYear } from './img/BestOfTheYear.svg'
import { ReactComponent as PopularIn2021 } from './img/PopularIn2021.svg'
import { ReactComponent as AllTimeTop250 } from './img/AllTimeTop250.svg'
import { FC } from 'react'
import styles from './styles/Top.module.scss'

export const Top: FC = (): JSX.Element => {
  return (
    <div className={styles.topContainer}>
      Top
      <div className={styles.topItem}>
        <div className={styles.topSVG}>
          <BestOfTheYear />
        </div>
        Best of the year
      </div>
      <div className={styles.topItem}>
        <div className={styles.topSVG}>
          <PopularIn2021 />
        </div>
        Popular in 2021
      </div>
      <div className={styles.topItem}>
        <div className={styles.topSVG}>
          <AllTimeTop250 />
        </div>
        All time top 250
      </div>
    </div>
  )
}
