import { arrayContributors } from './utils/arrayContributors'
import styles from './styles/GameContrib.module.scss'
import { FC, memo } from 'react'

const GameContributors: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.contributorsHeader}>Top contributors</div>
      <div className={styles.contributorsContainer}>
        {arrayContributors.map((contributor, i) => (
          <div className={styles.contributor} key={i}>
            <div className={styles.contributorPhoto}>
              <img src={contributor.contributorPhoto} alt="contributorPhoto" />
            </div>
            <div className={styles.contributorsInfo}>
              <div className={styles.contributorName}>
                <div>{contributor.contributorName}</div>
                <div>{contributor.contributorEdits} edits</div>
              </div>
              <div className={styles.contributorFollows}>
                <div>
                  <span>+</span>Follow
                </div>
                <div>{contributor.contributorFollowers}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default memo(GameContributors)
