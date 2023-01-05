import { ReactComponent as NintendoSwitch } from './img/NintendoSwitch.svg'
import { ReactComponent as PlayStation } from './img/PlayStation.svg'
import { IItemPlatformsProps } from './types/ItemPlatforms.types'
import { ReactComponent as XboxOne } from './img/XboxOne.svg'
import { ReactComponent as Android } from './img/Android.svg'
import { getCurrentImgPlatforms } from '../../../../utils'
import { ReactComponent as Apple } from './img/Apple.svg'
import { ReactComponent as Linux } from './img/Linux.svg'
import styles from './styles/ItemPlatforms.module.scss'
import { ReactComponent as IOS } from './img/IOS.svg'
import { ReactComponent as PC } from './img/PC.svg'
import { FC, memo } from 'react'

const ItemIMGPlatforms: FC<IItemPlatformsProps> = ({ ...props }): JSX.Element => {
  return (
    <div className={styles.itemPlatforms}>
      {getCurrentImgPlatforms(props.gameItem.platforms, 'PC') === 'PC' && <PC />}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'PlayStation') === 'PlayStation' && (
        <PlayStation />
      )}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'Xbox') === 'Xbox' && <XboxOne />}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'iOS') === 'iOS' && <IOS />}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'Android') === 'Android' && <Android />}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'Apple') === 'Apple' && <Apple />}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'Nintendo') === 'Nintendo' && (
        <NintendoSwitch />
      )}
      {getCurrentImgPlatforms(props.gameItem.platforms, 'Linux') === 'Linux' && <Linux />}
    </div>
  )
}

export default memo(ItemIMGPlatforms)
