import { IAdditionalyInfoProps } from './types/AdditionalyInfo.types'
import { ReactComponent as ArrowRight } from './img/ArrowRight.svg'
import styles from './styles/AdditionalyInfo.module.scss'
import { FC } from 'react'

export const AdditionalyInfoItem: FC<IAdditionalyInfoProps> = ({ gameItem }): JSX.Element => {
  return (
    <div className={styles.additionalyInfoItemContainer}>
      <div className={styles.releaseDate}>
        <div>Release Date:</div>
        <div>{gameItem.release}</div>
      </div>
      <div className={styles.genres}>
        <div>Genres:</div>
        <div>
          {gameItem.genres.map((gameGenres) => (
            <div key={gameGenres}>{gameGenres}</div>
          ))}
        </div>
      </div>
      <div className={styles.chart}>
        <div>Chart:</div>
        <div>{gameItem.chart}</div>
      </div>
      <div className={styles.btnShowMore}>
        Show more like this <ArrowRight />
      </div>
      <div className={styles.btnHideGame}>Hide this game</div>
    </div>
  )
}
