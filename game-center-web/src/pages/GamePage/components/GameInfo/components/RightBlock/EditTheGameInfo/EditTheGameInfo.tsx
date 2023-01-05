import { IEditTheGameInfoProps } from './types/EditTheGameInfo.types'
import { ReactComponent as EditPencil } from './img/editPencil.svg'
import styles from './styles/EditGameInfo.module.scss'
import { FC, memo } from 'react'

const EditTheGameInfo: FC<IEditTheGameInfoProps> = ({ ...props }): JSX.Element => {
  return (
    <>
      <div className={styles.editGameInfoBtn}>
        <EditPencil />
        Edit the game info
      </div>
      <div className={styles.lastModified}>Last Modified: {props.lastModified}</div>
    </>
  )
}

export default memo(EditTheGameInfo)
