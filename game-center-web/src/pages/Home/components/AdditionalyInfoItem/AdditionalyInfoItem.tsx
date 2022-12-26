import { IAdditionalyInfoProps } from './types/AdditionalyInfo.types'
import { ReactComponent as ArrowRight } from './img/ArrowRight.svg'
import styles from './styles/AdditionalyInfo.module.scss'
import cn from 'classnames'
import { FC } from 'react'

export const AdditionalyInfoItem: FC<IAdditionalyInfoProps> = ({ ...props }): JSX.Element => {
  return (
    <div
      className={cn(styles.additionalyInfoItemContainer, {
        [styles.additionalyInfoItemContainerAcitve]: props.currentPlayVideo === props.gameItem.id,
      })}
    >
      <div className={styles.releaseDate}>
        <div>Release Date:</div>
        <div>{props.gameItem.release}</div>
      </div>
      <div className={styles.genres}>
        <div>Genres:</div>
        <div>
          {props.gameItem.genres.map((gameGenres) => (
            <div key={gameGenres}>{gameGenres}</div>
          ))}
        </div>
      </div>
      <div className={styles.chart}>
        <div>Chart:</div>
        <div>{props.gameItem.chart}</div>
      </div>
      <div className={styles.btnShowMore}>
        Show more like this <ArrowRight />
      </div>
      <div className={styles.btnHideGame}>Hide this game</div>
    </div>
  )
}
