const heights = [1, 2, 7, 3, 5]

function checkJump(heights: number[]) {
  const maxHeight = Math.max(...heights)
  const positionMax = heights.indexOf(maxHeight)

  for (let i = 1; i < positionMax; i++) {
    if (heights[i] != positionMax && heights[i] < heights[i - 1]) {
      return false
    }
  }

  if (heights[heights.length - 1] === maxHeight) {
    return false
  }

  for (let i = positionMax; i < heights.length; i++) {
    if (heights[i] != positionMax && heights[i] < heights[i + 1]) {
      return false
    }
  }

  return true
}

console.log(checkJump(heights))