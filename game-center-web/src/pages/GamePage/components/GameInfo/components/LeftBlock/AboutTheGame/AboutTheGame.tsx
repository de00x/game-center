import { IAboutTheGameProps } from './types/AboutTheGame.types'
import styles from './styles/AboutTheGame.module.scss'
import { FC, memo, useState } from 'react'

const AboutTheGame: FC<IAboutTheGameProps> = ({ ...props }): JSX.Element => {
  const [aboutGameTextShowMore, setAboutGameTextShowMore] = useState(false)

  return (
    <div className={styles.aboutTheGame}>
      <div className={styles.aboutTheGameHeaderText}>About</div>
      <div className={styles.aboutTheGameText}>
        {props.gameInfo.about}
        {!aboutGameTextShowMore && <span>...</span>}
        {aboutGameTextShowMore && (
          <span className={styles.aboutGameTextShowMore}>{props.gameInfo.aboutMore}</span>
        )}
      </div>
      <span
        className={styles.aboutGameTextShowMoreBtn}
        onClick={() => setAboutGameTextShowMore(!aboutGameTextShowMore)}
      >
        {aboutGameTextShowMore ? 'Show less' : 'Read more'}
      </span>
      <div className={styles.additionallyInfoAboutGame}>
        <div className={styles.additInfoGameLeftBlock}>
          <div className={styles.additInfoGameHeader}>Platforms</div>
          <div className={styles.additInfoPlatforms}>
            {props.gameInfo.allPlatforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
          <div className={styles.additInfoGameHeader}>Release date</div>
          <div className={styles.additInfoReleaseDate}>
            <span>{props.gameInfo.release}</span>
          </div>
          <div className={styles.additInfoGameHeader}>Publisher</div>
          <div className={styles.additInfoPublisher}>
            <span>{props.gameInfo.publisher}</span>
          </div>
        </div>
        <div className={styles.additInfoGameRightBlock}>
          <div className={styles.additInfoGameHeader}>Genres</div>
          <div className={styles.additInfoGenres}>
            {props.gameInfo.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          <div className={styles.additInfoGameHeader}>Developer</div>
          <div className={styles.additInfoDeveloper}>
            <span>{props.gameInfo.developer}</span>
          </div>
          <div className={styles.additInfoGameHeader}>Age rating</div>
          <div className={styles.additInfoAgeRating}>
            <span>{props.gameInfo.ageRating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutTheGame)
