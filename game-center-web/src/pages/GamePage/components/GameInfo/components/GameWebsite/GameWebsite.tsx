import styles from './styles/GameWebsite.module.scss'
import { FC, memo } from 'react'

const GameWebsite: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.websiteThisGameText}>Website</div>
      <div className={styles.websiteThisGameLink}>
        <a href="https://www.bloodlines2.com" target={'_blank'} rel="noreferrer">
          https://www.bloodlines2.com
        </a>
      </div>
    </>
  )
}

export default memo(GameWebsite)
