import { ReactComponent as Collections } from './img/Collections.svg'
import { ReactComponent as Developers } from './img/Developers.svg'
import { ReactComponent as Publishers } from './img/Publishers.svg'
import { ReactComponent as Platforms } from './img/Platforms.svg'
import { ReactComponent as Creators } from './img/Creators.svg'
import { ReactComponent as ShowAll } from './img/ShowAll.svg'
import { ReactComponent as Reviews } from './img/Reviews.svg'
import { ReactComponent as Stores } from './img/Stores.svg'
import { ReactComponent as Genres } from './img/Genres.svg'
import { ReactComponent as Tags } from './img/Tags.svg'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './styles/Browse.module.scss'

export const Browse: FC = (): JSX.Element => {
  const [showAllBrowse, setShowAllBrowse] = useState(false)
  return (
    <div className={styles.browseContainer}>
      <div className={styles.browseHeaderText}>Browse</div>
      <div className={styles.browseItem}>
        <div className={styles.browseSVG}>
          <Platforms />
        </div>
        Platforms
      </div>
      <div className={styles.browseItem}>
        <div className={styles.browseSVG}>
          <Stores />
        </div>
        Stores
      </div>
      <div className={styles.browseItem}>
        <div className={styles.browseSVG}>
          <Collections />
        </div>
        Collections
      </div>
      {showAllBrowse && (
        <>
          <div className={styles.browseItem}>
            <div className={styles.browseSVG}>
              <Reviews />
            </div>
            Reviews
          </div>
          <div className={styles.browseItem}>
            <div className={styles.browseSVG}>
              <Genres />
            </div>
            Genres
          </div>
          <div className={styles.browseItem}>
            <div className={styles.browseSVG}>
              <Creators />
            </div>
            Creators
          </div>
          <div className={styles.browseItem}>
            <div className={styles.browseSVG}>
              <Tags />
            </div>
            Tags
          </div>
          <div className={styles.browseItem}>
            <div className={styles.browseSVG}>
              <Developers />
            </div>
            Developers
          </div>
          <div className={styles.browseItem}>
            <div className={styles.browseSVG}>
              <Publishers />
            </div>
            Publishers
          </div>
        </>
      )}
      <div className={styles.browseItemShowAll} onClick={() => setShowAllBrowse(!showAllBrowse)}>
        <div
          className={cn(styles.browseSVGShowAll, { [styles.browseSVGShowAllShow]: showAllBrowse })}
        >
          <ShowAll />
        </div>
        {showAllBrowse ? 'Hide' : 'Show all'}
      </div>
    </div>
  )
}
