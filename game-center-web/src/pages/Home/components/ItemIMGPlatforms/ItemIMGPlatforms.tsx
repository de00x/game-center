import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { ReactComponent as PlayStation } from './img/PlayStation.svg'
import { IItemPlatformsProps } from './types/ItemPlatforms.types'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC } from 'react'
import styles from './styles/ItemPlatforms.module.scss'

export const ItemIMGPlatforms: FC<IItemPlatformsProps> = ({ gameItem }): JSX.Element => {
  const gameCardPlatforms = (platforms: string[], currentPlatofrm: string): string | undefined => {
    const result = platforms.find((platform) => platform === currentPlatofrm)
    if (result !== undefined) return result
  }
  return (
    <div className={styles.itemPlatforms}>
      {gameCardPlatforms(gameItem.platforms, 'PC') === 'PC' && <PC />}
      {gameCardPlatforms(gameItem.platforms, 'PlayStation') === 'PlayStation' && <PlayStation />}
      {gameCardPlatforms(gameItem.platforms, 'Xbox') === 'Xbox' && <XboxOne />}
      {gameCardPlatforms(gameItem.platforms, 'iOS') === 'iOS' && <IOS />}
      {gameCardPlatforms(gameItem.platforms, 'Android') === 'Android' && <Android />}
      {gameCardPlatforms(gameItem.platforms, 'Nintendo') === 'Nintendo' && <NintendoSwitch />}
    </div>
  )
}
