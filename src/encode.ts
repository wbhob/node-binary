export function encode(num: number, headingZeroes = false): string {
  let str = ''
  for (let i = 1023; i >= 0; i--) {
    if (num - Math.pow(2, i) > 0) {
      str += '1'
      num -= Math.pow(2, i)
    } else if (num - Math.pow(2, i) == 0) {
      str += '1'
      num -= Math.pow(2, i)
    } else if (headingZeroes) {
      str += '0'
    } else {
      if (str) {
        str += '0'
      }
    }
  }
  return str
}