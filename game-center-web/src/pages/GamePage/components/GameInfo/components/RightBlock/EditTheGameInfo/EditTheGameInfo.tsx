import { ReactComponent as EditPencil } from './img/editPencil.svg'
import styles from './styles/EditGameInfo.module.scss'
import { FC, memo } from 'react'

const EditTheGameInfo: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.editGameInfoBtn}>
        <EditPencil />
        Edit the game info
      </div>
      <div className={styles.lastModified}>Last Modified:</div>
    </>
  )
}

export default memo(EditTheGameInfo)
