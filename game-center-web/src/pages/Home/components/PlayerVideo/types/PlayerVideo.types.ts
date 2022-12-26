import { IGameCard } from '../../../../../pages/Home/types/Home.types'

interface IPlayerVideoProps {
  gameItem: IGameCard
  currentPlayVideo: number
}
interface IPlayerVideoBGDProps {
  gameItem: IGameCard
  currentPlayVideo: number
  setUrlPlayFullVideo: React.Dispatch<React.SetStateAction<string>>
}
interface IPlayerVideoStylesProps {
  gameItem: IGameCard
  currentPlayVideo: number
  setUrlPlayFullVideo: React.Dispatch<React.SetStateAction<string>>
}

export type { IPlayerVideoProps, IPlayerVideoBGDProps, IPlayerVideoStylesProps }
