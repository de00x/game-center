import { ReactComponent as PlusWithoutBgd } from './img/PlusWithoutBgd.svg'
import { ReactComponent as Comment } from './img/Comment.svg'
import styles from './styles/GameBtnsRevCom.module.scss'
import { FC, memo } from 'react'

const GameBtnsReviewComment: FC = (): JSX.Element => {
  return (
    <div className={styles.btnReview__Comment}>
      <div className={styles.btnReview}>
        <PlusWithoutBgd /> Write a review 143
      </div>
      <div className={styles.btnComment}>
        <Comment /> Write a comment
      </div>
    </div>
  )
}

export default memo(GameBtnsReviewComment)
