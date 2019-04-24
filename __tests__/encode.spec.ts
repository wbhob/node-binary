import { encode } from '../src/encode'

describe('encode()', () => {
  it('should encode binary string', () => {
    expect(encode(13)).toEqual('1101')
  })

  it('should encode some other binary string', () => {
    expect(encode(48)).toEqual('110000')
  })
})