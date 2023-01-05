import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { IGamePlatPlaytimeProps } from './types/GamePlatPlaytime.types'
import { ReactComponent as PlayStation } from './img/PlayStation.svg'
import { getCurrentImgPlatforms } from '../../../../../../../utils'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import styles from './styles/GamePlatPlaytime.module.scss'
import { ReactComponent as Apple } from './img/Apple.svg'
import { ReactComponent as Linux } from './img/Linux.svg'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC, memo } from 'react'

const GamePlatformsPlaytime: FC<IGamePlatPlaytimeProps> = ({ ...props }): JSX.Element => {
  return (
    <div className={styles.platforms__playtime}>
      <div className={styles.itemPlatforms}>
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'PC') === 'PC' && <PC />}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'PlayStation') === 'PlayStation' && (
          <PlayStation />
        )}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'Xbox') === 'Xbox' && <XboxOne />}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'iOS') === 'iOS' && <IOS />}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'Android') === 'Android' && <Android />}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'Apple') === 'Apple' && <Apple />}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'Nintendo') === 'Nintendo' && (
          <NintendoSwitch />
        )}
        {getCurrentImgPlatforms(props.gameInfo.platforms, 'Linux') === 'Linux' && <Linux />}
      </div>
      <div className={styles.averagePlaytime}>
        AVERAGE PLAYTIME: {props.gameInfo.playtime} HOURS
      </div>
    </div>
  )
}

export default memo(GamePlatformsPlaytime)
