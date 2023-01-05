import { ReactComponent as EpicGamesLogo } from './img/epicGamesLogo.svg'
import { IWhereToBuyGameProps } from './types/WhereToBuyGame.types'
import { ReactComponent as SteamLogo } from './img/steamLogo.svg'
import { ReactComponent as GogLogo } from './img/gogLogo.svg'
import styles from './styles/WhereBuyGame.module.scss'
import { FC, memo } from 'react'

const WhereToBuyGame: FC<IWhereToBuyGameProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div className={styles.whereBuyGameText}>Where to buy</div>
      <div className={styles.whereBuyGameContainer}>
        <a href={props.gameInfo.buyInGOG} target="_blank" rel="noreferrer">
          <div>
            GOG
            <GogLogo />
          </div>
        </a>
        <a href={props.gameInfo.buyInEG} target="_blank" rel="noreferrer">
          <div>
            Epic Games <EpicGamesLogo />
          </div>
        </a>
        <a href={props.gameInfo.buyInSteam} target="_blank" rel="noreferrer">
          <div>
            Steam <SteamLogo />
          </div>
        </a>
      </div>
    </>
  )
}

export default memo(WhereToBuyGame)
