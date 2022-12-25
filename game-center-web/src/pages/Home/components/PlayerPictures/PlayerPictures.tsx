import { IPlayerPicturesProps } from './types/PlayerPictures.types'
import styles from './styles/PlayerPictures.module.scss'
import { FC, useState } from 'react'

export const PlayerPictures: FC<IPlayerPicturesProps> = ({ ...props }): JSX.Element => {
  const [currentViewPictures, setCurrentViewPictures] = useState(props.gameItem.logoImg)

  return (
    <div className={styles.playerPicturesContainer}>
      <div className={styles.currentPictures}>
        <img src={currentViewPictures} alt="gamePictures" />
      </div>
      {props.gameItem.clipPictures !== null && (
        <>
          {props.gameItem.clipPictures.map((column) => (
            <div
              key={column}
              className={styles.columnContainer}
              onMouseEnter={() => setCurrentViewPictures(column)}
            >
              <div className={styles.column}></div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
