const IMGPlatformsControllers = () => {
  const gameCardPlatforms = (platforms: string[], currentPlatofrm: string): string | undefined => {
    const result = platforms.find((platform) => platform === currentPlatofrm)
    if (result !== undefined) return result
  }
  return { gameCardPlatforms }
}
export default IMGPlatformsControllers
