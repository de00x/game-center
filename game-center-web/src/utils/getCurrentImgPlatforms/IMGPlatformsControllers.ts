const getCurrentImgPlatforms = (
  platforms: string[],
  currentPlatofrm: string
): string | undefined => {
  const result = platforms.find((platform) => platform === currentPlatofrm)
  if (result !== undefined) return result
}
export default getCurrentImgPlatforms
