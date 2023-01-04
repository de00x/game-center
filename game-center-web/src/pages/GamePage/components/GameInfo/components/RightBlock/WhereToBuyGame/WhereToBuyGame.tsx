import { ReactComponent as EpicGamesLogo } from './img/epicGamesLogo.svg'
import { ReactComponent as SteamLogo } from './img/steamLogo.svg'
import { ReactComponent as GogLogo } from './img/gogLogo.svg'
import styles from './styles/WhereBuyGame.module.scss'
import { FC, memo } from 'react'

const WhereToBuyGame: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.whereBuyGameText}>Where to buy</div>
      <div className={styles.whereBuyGameContainer}>
        <div>
          GOG
          <GogLogo />
        </div>
        <div>
          Epic Games <EpicGamesLogo />
        </div>
        <div>
          Steam <SteamLogo />
        </div>
      </div>
    </>
  )
}

export default memo(WhereToBuyGame)
