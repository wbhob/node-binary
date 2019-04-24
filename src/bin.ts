import { encode, decode } from './index'

let args = process.argv

if (args[1] == '-d' || args[1] == '--decode') {
  console.log(decode(args[2].toString()))
} else if (args[1] == '-e' || args[1] == '--encode') {
  console.log(encode(+args[2]))
} else {
  console.log(`
Unknown option.

Usage:
binary -d/--decode 0110101
binary -e/--encode 3895274
`)
}