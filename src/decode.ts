export function decode(str: string): number {
  let num = 0;
  let charArray = str.split('').reverse()

  for (let i = 0; i < charArray.length; i++) {
    if (!['0', '1'].includes(charArray[i])) {
      throw new Error('The binary string can only contain "0" and "1", but "' + charArray[i] + '" was detected at position ' + i)
    }
    if (charArray[i] == '1') {
      num += Math.pow(2, i)
    }
  }
  
  return num
}