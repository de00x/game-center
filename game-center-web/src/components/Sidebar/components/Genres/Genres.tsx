import { ReactComponent as ShowAll } from './img/ShowAll.svg'
import styles from './styles/Genres.module.scss'
import { FC, useState } from 'react'
import cn from 'classnames'
import {
  AdventureImg,
  StrategyImg,
  ShooterImg,
  ActionImg,
  PuzzleImg,
  RacingImg,
  SportsImg,
  RPGImg,
} from './img'

export const Genres: FC = (): JSX.Element => {
  const [showAllGenres, setShowAllGenres] = useState(false)
  return (
    <div className={styles.genresContainer}>
      <div className={styles.genresHeaderText}>Genres</div>
      <div className={styles.genresItem}>
        <div className={styles.genresIMG}>
          <img src={ActionImg} alt="ActionImg" />
        </div>
        Action
      </div>
      <div className={styles.genresItem}>
        <div className={styles.genresIMG}>
          <img src={StrategyImg} alt="StrategyImg" />
        </div>
        Strategy
      </div>
      <div className={styles.genresItem}>
        <div className={styles.genresIMG}>
          <img src={RPGImg} alt="RPGImg" />
        </div>
        RPG
      </div>
      {showAllGenres && (
        <>
          <div className={styles.genresItem}>
            <div className={styles.genresIMG}>
              <img src={ShooterImg} alt="ShooterImg" />
            </div>
            Shooter
          </div>
          <div className={styles.genresItem}>
            <div className={styles.genresIMG}>
              <img src={AdventureImg} alt="AdventureImg" />
            </div>
            Adventure
          </div>
          <div className={styles.genresItem}>
            <div className={styles.genresIMG}>
              <img src={PuzzleImg} alt="PuzzleImg" />
            </div>
            Puzzle
          </div>
          <div className={styles.genresItem}>
            <div className={styles.genresIMG}>
              <img src={RacingImg} alt="RacingImg" />
            </div>
            Racing
          </div>
          <div className={styles.genresItem}>
            <div className={styles.genresIMG}>
              <img src={SportsImg} alt="SportsImg" />
            </div>
            Sports
          </div>
        </>
      )}
      <div className={styles.genresItemShowAll} onClick={() => setShowAllGenres(!showAllGenres)}>
        <div
          className={cn(styles.genresSVGShowAll, {
            [styles.genresSVGShowAllShow]: showAllGenres,
          })}
        >
          <ShowAll />
        </div>
        {showAllGenres ? 'Hide' : 'Show all'}
      </div>
    </div>
  )
}
