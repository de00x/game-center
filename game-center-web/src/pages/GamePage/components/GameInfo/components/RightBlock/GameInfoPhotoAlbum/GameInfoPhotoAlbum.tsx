import styles from './styles/GameIPhotoAlbum.module.scss'
import { FC, memo } from 'react'

const arrayPhotos = [
  'https://i.ibb.co/NZT9184/bloodlines2.jpg',
  'https://i.ibb.co/NZT9184/bloodlines2.jpg',
  'https://i.ibb.co/NZT9184/bloodlines2.jpg',
]

const GameInfoPhotoAlbum: FC = (): JSX.Element => {
  return (
    <div className={styles.gameIPhotoAlbContainer}>
      {arrayPhotos.map((photos, i) => (
        <div className={styles.photoAlbumItem} key={i}>
          <img src={photos} alt="photoAlbumItem" />
        </div>
      ))}
      <div className={styles.photoAlbumViewAll}>
        <div className={styles.photoAlbumBGDimage} />
        <span>...</span>
        <span>view all</span>
      </div>
    </div>
  )
}

export default memo(GameInfoPhotoAlbum)
