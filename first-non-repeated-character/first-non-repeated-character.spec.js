const FirstNonRepeatedCharacter = require('./first-non-repeated-character')

describe('detects first non repeated character of a string', () => {
  it('detects o in total', () => {
    const firstNonRepeatedCharacter = new FirstNonRepeatedCharacter()

    const result = firstNonRepeatedCharacter.detect('total')

    expect(result).toEqual('o')
  })

  it('detects r in teeter', () => {
    const firstNonRepeatedCharacter = new FirstNonRepeatedCharacter()

    const result = firstNonRepeatedCharacter.detect('teeter')

    expect(result).toEqual('r')
  })

  it('detects no repeating character', () => {
    const firstNonRepeatedCharacter = new FirstNonRepeatedCharacter()

    const result = firstNonRepeatedCharacter.detect('sees')

    expect(result).toEqual('')
  })
})
