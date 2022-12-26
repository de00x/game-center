import styles from './styles/SkeletonHome.module.scss'
import { FC } from 'react'

const arraySkeletons = [1, 2, 3, 4, 5, 6, 7, 8]

export const SkeletonHome: FC = (): JSX.Element => {
  return (
    <>
      {arraySkeletons.map((skeleton) => (
        <div key={skeleton} className={styles.skeletonHome}></div>
      ))}
    </>
  )
}
