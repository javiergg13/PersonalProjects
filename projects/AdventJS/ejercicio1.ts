function wrapping(gifts: string[]) {
  let wrappedGifts = []
  
  for (let gift of gifts) {
    let asteriscos = "**"
    for (let char of gift) {
        asteriscos += "*"
    }
    gift = asteriscos + "\n*" + gift + "*\n" + asteriscos
    wrappedGifts.push(gift)
  }

  return wrappedGifts
}
