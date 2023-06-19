function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  let packWeigth = 0
  let reindeersLimit = 0

  packOfGifts.map(gift => {
    packWeigth += gift.length
  })

  reindeers.map(reindeer => {
    reindeersLimit += reindeer.length * 2
  })

  return Math.floor(reindeersLimit / packWeigth)
}