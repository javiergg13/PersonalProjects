const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

function getGiftsToRefill(a1:string[], a2:string[], a3:string[]) {
  let gitsToReplenish:string[] = []

  for (const gift of a1) {
    if (!a2.includes(gift) && !a3.includes(gift)) {
      if(!gitsToReplenish.includes(gift)) {
        gitsToReplenish.push(gift)
      }
    }
  }

  for (const gift of a2) {
    if (!a1.includes(gift) && !a3.includes(gift)) {
      if(!gitsToReplenish.includes(gift)) {
        gitsToReplenish.push(gift)
      }
    }
  }

  for (const gift of a3) {
    if (!a2.includes(gift) && !a1.includes(gift)) {
      if(!gitsToReplenish.includes(gift)) {
        gitsToReplenish.push(gift)
      }
    }
  }

  return gitsToReplenish
}

console.log(getGiftsToRefill(a1, a2, a3))