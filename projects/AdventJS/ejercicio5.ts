function createCube(size: number) {
  let resultadoFinal = ""

  for (let i = 0; i < size; i++) {
    for (let j = i; j < size - 1; j++) {
      resultadoFinal += " "
    }

    for (let j = size - 1; j < size + i; j++) {
      resultadoFinal += "/\\"
    }

    for (let j = 0; j < size; j++) {
      resultadoFinal += "_\\"
    }

    resultadoFinal += "\n"
  }

  for (let i = 0; i < size; i++) {
    for (let j = i + size; j > size; j--) {
      resultadoFinal += " "
    }

    for (let j = i; j < size; j++) {
      resultadoFinal += "\\/"
    }

    for (let j = 0; j < size; j++) {
      resultadoFinal += "_/"
    }

    if (i + 1 < size) {
      resultadoFinal += "\n"
    }
  }

  return resultadoFinal
}

console.log(createCube(4))

