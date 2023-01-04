import styles from './styles/AboutTheGame.module.scss'
import { FC, memo, useState } from 'react'

const AboutTheGame: FC = (): JSX.Element => {
  const [aboutGameTextShowMore, setAboutGameTextShowMore] = useState(false)

  return (
    <div className={styles.aboutTheGame}>
      <div className={styles.aboutTheGameHeaderText}>About</div>
      <div className={styles.aboutTheGameText}>
        Text about game less{!aboutGameTextShowMore && <span>...</span>}
        {aboutGameTextShowMore && (
          <span className={styles.aboutGameTextShowMore}>Text about game more</span>
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
            <span>PlayStation 5</span> <span>Xbox Series S/X</span> <span>PC</span>
            <span>Xbox One</span> <span>PlayStation 4</span>
          </div>
          <div className={styles.additInfoGameHeader}>Release date</div>
          <div className={styles.additInfoReleaseDate}>
            <span>Release Date</span>
          </div>
          <div className={styles.additInfoGameHeader}>Publisher</div>
          <div className={styles.additInfoPublisher}>
            <span>Paradox Interactive</span>
          </div>
        </div>
        <div className={styles.additInfoGameRightBlock}>
          <div className={styles.additInfoGameHeader}>Genres</div>
          <div className={styles.additInfoGenres}>
            <span>Action</span> <span>RPG</span>
          </div>
          <div className={styles.additInfoGameHeader}>Developer</div>
          <div className={styles.additInfoDeveloper}>
            <span>Hardsuit Labs</span>
          </div>
          <div className={styles.additInfoGameHeader}>Age rating</div>
          <div className={styles.additInfoAgeRating}>
            <span>Not rated</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutTheGame)
