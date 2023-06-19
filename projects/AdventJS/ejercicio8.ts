function checkPart(part: string) {
  if (part === part.split("").reverse().join("")) {
    return true
  }

  for (const character of part) {
    const newPart = part.replace(character, "")

    if (newPart === newPart.split("").reverse().join("")) {
      return true
    }
  }

  return false
}