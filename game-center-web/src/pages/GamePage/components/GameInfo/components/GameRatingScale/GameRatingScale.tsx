import { ReactComponent as Circle } from './img/Circle.svg'
import { likeImg, mehImg, ratingImg, skipImg } from './img'
import styles from './styles/GameRatingScale.module.scss'
import { FC, memo, useState } from 'react'
import cn from 'classnames'

const GameRatingScale: FC = (): JSX.Element => {
  const [ratingScaleActive, setRatingScaleActive] = useState(0)

  return (
    <div className={styles.ratingScaleContainer}>
      <div className={styles.ratingScaleHeader}>Click to rate</div>
      <div className={styles.ratingScale} onMouseLeave={() => setRatingScaleActive(0)}>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 1 })}
          style={{ width: '64%' }}
          onMouseEnter={() => setRatingScaleActive(1)}
        >
          <img src={ratingImg} className={styles.scaleBackgroundRatingImage} alt="ratingImage" />
        </div>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 2 })}
          style={{ width: '42%' }}
          onMouseEnter={() => setRatingScaleActive(2)}
        >
          <img src={likeImg} className={styles.scaleBackgroundLikeImage} alt="likeImage" />
        </div>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 3 })}
          style={{ width: '15%' }}
          onMouseEnter={() => setRatingScaleActive(3)}
        >
          <img src={mehImg} className={styles.scaleBackgroundMehImage} alt="mehImage" />
        </div>
        <div
          className={cn({ [styles.ratingScaleActive]: ratingScaleActive === 4 })}
          style={{ width: '22%' }}
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
          <Circle /> Exceptional <span>64</span>
        </div>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 2 })}
          onMouseEnter={() => setRatingScaleActive(2)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Recommended <span>42</span>
        </div>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 3 })}
          onMouseEnter={() => setRatingScaleActive(3)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Meh <span>15</span>
        </div>
        <div
          className={cn({ [styles.ratingScaleNamingActive]: ratingScaleActive === 4 })}
          onMouseEnter={() => setRatingScaleActive(4)}
          onMouseLeave={() => setRatingScaleActive(0)}
        >
          <Circle /> Skip <span>22</span>
        </div>
      </div>
    </div>
  )
}

export default memo(GameRatingScale)
