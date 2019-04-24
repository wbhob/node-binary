# node-binary

This project is a simple encoder/decoder of binary numbers. `encode()` returns a binary string, and `decode()` returns a native number. Limited by your JavaScript engine's `Number.MAX_VALUE` value, but may also yield inaccurate results for numbers greater than `Number.MAX_SAFE_INTEGER`.

## Usage

```typescript
import {encode, decode} from 'node-binary'

encode(23) // returns '10111'
decode('10110') // returns '22'
```

## Contributing

If you want to contribute your own sorting algorithm, implement it in TypeScript in the `src/` directory. Add a test file in `__tests__/` to make sure it works properly – you can just copy one of the other testing files and substitute in your sorting algorithm.

## License

This project is licensed under the [MIT License](./LICENSE), so you're free to use it as you please with attribution and a link back to this project (though writing your own implementation would not be terribly difficult).

## Credits

Written by Wilson Hobbs, 2019.
