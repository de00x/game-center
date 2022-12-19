import { ReactComponent as ArrowRight } from './img/ArrowRight.svg'
import styles from './styles/AdditionalyInfo.module.scss'
import { FC } from 'react'

export const AdditionalyInfoItem: FC = (): JSX.Element => {
  return (
    <div className={styles.additionalyInfoItemContainer}>
      <div className={styles.releaseDate}>
        <div>Release Date:</div>
        <div>Dec 31, 2023</div>
      </div>
      <div className={styles.genres}>
        <div>Genres:</div>
        <div>Action, RPG</div>
      </div>
      <div className={styles.chart}>
        <div>Chart:</div>
        <div>#1 Top 2023</div>
      </div>
      <div className={styles.btnShowMore}>
        Show more like this <ArrowRight />
      </div>
      <div className={styles.btnHideGame}>Hide this game</div>
    </div>
  )
}
