import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { ReactComponent as PlayStation } from './img/PlayStation.svg'
import { IItemPlatformsProps } from './types/ItemPlatforms.types'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import { ReactComponent as Apple } from './img/Apple.svg'
import { ReactComponent as Linux } from './img/Linux.svg'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC, memo } from 'react'
import styles from './styles/ItemPlatforms.module.scss'

const ItemIMGPlatforms: FC<IItemPlatformsProps> = ({ ...props }): JSX.Element => {
  const gameCardPlatforms = (platforms: string[], currentPlatofrm: string): string | undefined => {
    const result = platforms.find((platform) => platform === currentPlatofrm)
    if (result !== undefined) return result
  }
  return (
    <div className={styles.itemPlatforms}>
      {gameCardPlatforms(props.gameItem.platforms, 'PC') === 'PC' && <PC />}
      {gameCardPlatforms(props.gameItem.platforms, 'PlayStation') === 'PlayStation' && (
        <PlayStation />
      )}
      {gameCardPlatforms(props.gameItem.platforms, 'Xbox') === 'Xbox' && <XboxOne />}
      {gameCardPlatforms(props.gameItem.platforms, 'iOS') === 'iOS' && <IOS />}
      {gameCardPlatforms(props.gameItem.platforms, 'Android') === 'Android' && <Android />}
      {gameCardPlatforms(props.gameItem.platforms, 'Apple') === 'Apple' && <Apple />}
      {gameCardPlatforms(props.gameItem.platforms, 'Nintendo') === 'Nintendo' && <NintendoSwitch />}
      {gameCardPlatforms(props.gameItem.platforms, 'Linux') === 'Linux' && <Linux />}
    </div>
  )
}

export default memo(ItemIMGPlatforms)
