import { IGameRatingScaleProps } from './types/GameRatingScale.types'
import { ReactComponent as Circle } from './img/Circle.svg'
import { likeImg, mehImg, ratingImg, skipImg } from './img'
import styles from './styles/GameRatingScale.module.scss'
import { FC, memo, useState } from 'react'
import cn from 'classnames'

const GameRatingScale: FC<IGameRatingScaleProps> = ({ ...props }): JSX.Element => {
  const [ratingScaleActive, setRatingScaleActive] = useState(0)

  return (
    <div className={styles.ratingScaleContainer}>
      <div className={styles.ratingScaleHeader}>Click to rate</div>
      <div className={styles.ratingScale} onMouseLeave={() => setRatingScaleActive(0)}>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 1 })}
          style={{ width: `${props.gameInfo.exceptional}%` }}
          onMouseEnter={() => setRatingScaleActive(1)}
        >
          <img src={ratingImg} className={styles.scaleBackgroundRatingImage} alt="ratingImage" />
        </div>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 2 })}
          style={{ width: `${props.gameInfo.recommended}%` }}
          onMouseEnter={() => setRatingScaleActive(2)}
        >
          <img src={likeImg} className={styles.scaleBackgroundLikeImage} alt="likeImage" />
        </div>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 3 })}
          style={{ width: `${props.gameInfo.meh}%` }}
          onMouseEnter={() => setRatingScaleActive(3)}
        >
          <img src={mehImg} className={styles.scaleBackgroundMehImage} alt="mehImage" />
        </div>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 4 })}
          style={{ width: `${props.gameInfo.skip}%` }}
          onMouseEnter={() => setRatingScaleActive(4)}
        >
          <img src={skipImg} className={styles.scaleBackgroundSkipImage} alt="skipImage" />
        </div>
      </div>
      <div className={styles.ratingScaleNaming}>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 1 })}
          onMouseEnter={() => setRatingScaleActive(1)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Exceptional <span>{props.gameInfo.exceptional}</span>
        </div>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 2 })}
          onMouseEnter={() => setRatingScaleActive(2)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Recommended <span>{props.gameInfo.recommended}</span>
        </div>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 3 })}
          onMouseEnter={() => setRatingScaleActive(3)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Meh <span>{props.gameInfo.meh}</span>
        </div>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 4 })}
          onMouseEnter={() => setRatingScaleActive(4)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Skip <span>{props.gameInfo.skip}</span>
        </div>
      </div>
    </div>
  )
}

export default memo(GameRatingScale)
