import { IGameWebsiteProps } from './types/GameWebsite.types'
import styles from './styles/GameWebsite.module.scss'
import { FC, memo } from 'react'

const GameWebsite: FC<IGameWebsiteProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div className={styles.websiteThisGameText}>Website</div>
      <div className={styles.websiteThisGameLink}>
        <a href={props.gameWebSite} target={'_blank'} rel="noreferrer">
          {props.gameWebSite}
        </a>
      </div>
    </>
  )
}

export default memo(GameWebsite)
