import { IGameIPhotoAlbumProps } from './types/GameIPhotoAlbum.types'
import styles from './styles/GameIPhotoAlbum.module.scss'
import { FC, memo } from 'react'

const GameInfoPhotoAlbum: FC<IGameIPhotoAlbumProps> = ({ ...props }): JSX.Element => {
  return (
    <div className={styles.gameIPhotoAlbContainer}>
      {props.photoAlbum.slice(1, 4).map((photos) => (
        <div className={styles.photoAlbumItem} key={photos}>
          <img src={photos} alt="photoAlbumItem" />
        </div>
      ))}
      <div className={styles.photoAlbumViewAll}>
        <div
          className={styles.photoAlbumBGDimage}
          style={{ backgroundImage: `url('${props.photoAlbum[5]}')` }}
        />
        <span>...</span>
        <span>view all</span>
      </div>
    </div>
  )
}

export default memo(GameInfoPhotoAlbum)
