import { IGameButtonsAddToProps } from './types/GameButtonsAddTo.types'
import { ReactComponent as Collections } from './img/Collections.svg'
import { ReactComponent as Wishlist } from './img/Wishlist.svg'
import styles from './styles/GameButtonsAddTo.module.scss'
import { ReactComponent as Plus } from './img/Plus.svg'
import { FC, memo } from 'react'

const GameButtonsAddTo: FC<IGameButtonsAddToProps> = ({ ...props }): JSX.Element => {
  return (
    <div className={styles.gameButtonsAddTo}>
      <div className={styles.btnAddMyGames}>
        <div>Add to</div>
        <div>
          My games <span>{props.ratingMyGames}</span>
        </div>
        <Plus />
      </div>
      <div className={styles.btnAddWishlist}>
        <div>Add to</div>
        <div>Wishlist</div>
        <Wishlist />
      </div>
      <div className={styles.btnSaveCollection}>
        <div>Save to</div>
        <span>
          Collection <Collections />
        </span>
      </div>
    </div>
  )
}

export default memo(GameButtonsAddTo)
