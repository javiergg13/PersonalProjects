function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities.sort((a, b) => b - a);

  let result = [];
  let total = 0
  let sum = 0;

  function findCombination(startIndex, currentSum, currentCombination) {
    if (currentSum > maxGifts || currentCombination.length > maxCities) {
      return;
    }

    if (currentSum > sum) {
      sum = currentSum;
      result = currentCombination;
    }

    if (startIndex === giftsCities.length) {
      return;
    }

    for (let i = startIndex; i < giftsCities.length; i++) {
      findCombination(i + 1, currentSum + giftsCities[i], [...currentCombination, giftsCities[i]]);
    }
  }

  findCombination(0, 0, []);

  result.map(value => total += value)

  return total;
}