import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { ReactComponent as PlayStation4 } from './img/PlayStation4.svg'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import { ReactComponent as ShowAll } from './img/ShowAll.svg'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './styles/Platforms.module.scss'

export const Platforms: FC = (): JSX.Element => {
  const [showAllPlatforms, setShowAllPlatforms] = useState(false)
  return (
    <div className={styles.platformsContainer}>
      <div className={styles.platformsHeaderText}>Platforms</div>
      <div className={styles.platformsItem}>
        <div className={styles.platformsSVG}>
          <PC />
        </div>
        PC
      </div>
      <div className={styles.platformsItem}>
        <div className={styles.platformsSVG}>
          <PlayStation4 />
        </div>
        PlayStation 4
      </div>
      <div className={styles.platformsItem}>
        <div className={styles.platformsSVG}>
          <XboxOne />
        </div>
        Xbox One
      </div>
      {showAllPlatforms && (
        <>
          <div className={styles.platformsItem}>
            <div className={styles.platformsSVG}>
              <NintendoSwitch />
            </div>
            Nintendo Switch
          </div>
          <div className={styles.platformsItem}>
            <div className={styles.platformsSVG}>
              <IOS />
            </div>
            iOS
          </div>
          <div className={styles.platformsItem}>
            <div className={styles.platformsSVG}>
              <Android />
            </div>
            Android
          </div>
        </>
      )}
      <div
        className={styles.platformsItemShowAll}
        onClick={() => setShowAllPlatforms(!showAllPlatforms)}
      >
        <div
          className={cn(styles.platformsSVGShowAll, {
            [styles.platformsSVGShowAllShow]: showAllPlatforms,
          })}
        >
          <ShowAll />
        </div>
        {showAllPlatforms ? 'Hide' : 'Show all'}
      </div>
    </div>
  )
}
