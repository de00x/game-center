import { ReactComponent as PlusWithoutBgd } from './img/PlusWithoutBgd.svg'
import { ReactComponent as Collections } from './img/Collections.svg'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import { ReactComponent as Comment } from './img/Comment.svg'
import { ReactComponent as Circle } from './img/Circle.svg'
import { likeImg, mehImg, ratingImg, skipImg } from './img'
import styles from './styles/GameInfoBlockLeft.module.scss'
import { ReactComponent as Plus } from './img/Plus.svg'
import { FC, useState } from 'react'
import cn from 'classnames'

export const GameInfoBlockLeft: FC = (): JSX.Element => {
  const [aboutGameTextShowMore, setAboutGameTextShowMore] = useState(false)
  const [systemReqShowMore, setSystemReqShowMore] = useState(false)
  const [ratingScaleActive, setRatingScaleActive] = useState(0)

  return (
    <div className={styles.gameInfoBlockLeft}>
      <div className={styles.platforms__playtime}>
        <div>Platforms</div>
        <div>AVERAGE PLAYTIME: </div>
      </div>
      <div className={styles.gameName}>Vampire: The Masquerade - Bloodlines 2</div>
      <div className={styles.gameButtonsAddTo}>
        <div className={styles.btnAddMyGames}>
          <div>Add to</div>
          <div>
            My games <span>615</span>
          </div>
          <Plus />
        </div>
        <div className={styles.btnAddWishlist}>
          <div>Add to</div>
          <div>Wishlist</div>
          <Wishlist />
        </div>
        <div className={styles.btnSaveCollection}>
          <div>Save to</div>
          <span>
            Collection <Collections />
          </span>
        </div>
      </div>
      <div className={styles.gameRating}>
        <div className={styles.categoryRating}>
          <div>Exceptional</div>
          <span>143 RATINGS</span>
        </div>
        <div className={styles.categoryGenres}>
          <div>#340</div>
          <span>RPG</span>
        </div>
        <div className={styles.totalRating}>
          <div>#1</div>
          <span>TOP 2023</span>
        </div>
      </div>
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
      <div className={styles.btnReview__Comment}>
        <div className={styles.btnReview}>
          <PlusWithoutBgd /> Write a review 143
        </div>
        <div className={styles.btnComment}>
          <Comment /> Write a comment
        </div>
      </div>
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
      <div className={styles.websiteThisGameText}>Website</div>
      <div className={styles.websiteThisGameLink}>
        <a href="https://www.bloodlines2.com" target={'_blank'} rel="noreferrer">
          https://www.bloodlines2.com
        </a>
      </div>
      <div className={styles.systemRequirements}>
        <div>System requirements for PC</div>
        {systemReqShowMore && (
          <div className={styles.systemReqText}>
            Recommended: OS: Windows 10 (64-bit) CPU: Intel Core i7-4790 or AMD Ryzen 3 3200G RAM:
            12GB GPU: Nvidia GeForce GTX 1060 6GB, a GTX 1660 Super, or AMD Radeon RX 590 VRAM: 6GB
            Direct X: Version 12 Available Storage Space: 70GB SSD GFX Setting Game Can Be Played
            On: High
          </div>
        )}
        <span
          className={styles.systemReqShowMoreBtn}
          onClick={() => setSystemReqShowMore(!systemReqShowMore)}
        >
          {systemReqShowMore ? 'Show less...' : 'Read more...'}
        </span>
      </div>
    </div>
  )
}
