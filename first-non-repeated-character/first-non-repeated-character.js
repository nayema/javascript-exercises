const detectFirstNonRepeatedCharacter = function (word) {
  let repetition = 0

  for (let i = 0; i < word.length; i++) {
    repetition = 0

    for (let j = 0; j < word.length; j++) {
      if (word.charAt(i) === word.charAt(j)) {
        repetition++
      }
    }

    if (repetition < 2) {
      return word.charAt(i)
    }
  }

  return ''
}

module.exports = detectFirstNonRepeatedCharacter
