function getCompleted(part: string, total: string) {
  const [hoursPart, minutesPart, secondsPart] = part.split(":")
  const [hoursTotal, minutesTotal, secondsTotal] = total.split(":")

  const partSecons = parseInt(hoursPart) * 3600 + parseInt(minutesPart) * 60 + parseInt(secondsPart)
  const totalSeconds = parseInt(hoursTotal) * 3600 + parseInt(minutesTotal) * 60 + parseInt(secondsTotal)

  const fraction = getFraction(partSecons, totalSeconds)

  function getFraction(timeElapsed, totalTime) {
  const gcd = greatestCommonDivisor(timeElapsed, totalTime)
  const numerator = timeElapsed / gcd
  const denominator = totalTime / gcd
  return { numerator, denominator }
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a
  }
  return greatestCommonDivisor(b, a % b)
}

function simplifyFraction(fraction) {
  const { numerator, denominator } = fraction
  if (denominator === 1) {
    return '1/1'
  } else {
    return `${numerator}/${denominator}`
  }
}


  return simplifyFraction(fraction)
}

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00'))
console.log(getCompleted('01:00:00', '01:00:00'))
console.log(getCompleted('00:10:00', '01:00:00'))
console.log(getCompleted('01:10:10', '03:30:30'))
console.log(getCompleted('03:30:30', '05:50:50'))