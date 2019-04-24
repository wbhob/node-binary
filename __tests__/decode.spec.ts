import { decode } from '../src/decode'

describe('decode()', () => {
  it('should decode binary string', () => {
    expect(decode('1001')).toEqual(9)
  })

  it('should decode some other binary string', () => {
    expect(decode('0110')).toEqual(6)
  })

  it('should throw error for unexpected letter', () => {
    expect(() => decode('1101a')).toThrowError()
  })
})