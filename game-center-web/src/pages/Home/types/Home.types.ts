interface IGameCard {
  clipPictures: string[] | null
  clip: string | null
  platforms: string[]
  fullVideo: string
  genres: string[]
  logoImg: string
  release: string
  chart: string
  name: string
  id: number
}
interface IHomeControllersProps {
  gameCard: IGameCard[]
  setGameCard: React.Dispatch<React.SetStateAction<IGameCard[]>>
}

export type { IGameCard, IHomeControllersProps }
