const detectFirstNonRepeatedCharacter = require('./first-non-repeated-character')

describe('detects first non repeated character of a string', () => {
  it('detects o in total', () => {
    const result = detectFirstNonRepeatedCharacter('total')

    expect(result).toEqual('o')
  })

  it('detects r in teeter', () => {
    const result = detectFirstNonRepeatedCharacter('teeter')

    expect(result).toEqual('r')
  })

  it('detects no repeating character', () => {
    const result = detectFirstNonRepeatedCharacter('sees')

    expect(result).toEqual('')
  })
})
