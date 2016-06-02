[![Build Status](https://travis-ci.org/ruff-drivers/driver-template.svg)](https://travis-ci.org/ruff-drivers/driver-template)

# {driver-name} Driver for Ruff

Some description of this device.

## Supported Models

- [{model-a}](https://rap.ruff.io/devices/{model-a})
- [{model-b}](https://rap.ruff.io/devices/{model-b})

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: {model-a}
```

Other possible steps involved if any.

## Usage

Here is the basic usage of this driver.

```js
$('#<device-id>').turnOn();
$('#<device-id>').turnOff();
```

## FAQ

Common issues or pitfalls of using this driver. Can be removed if none.

## API References

```ts
// Copy the declaration from `device.d.ts`, and remove `export`.
declare class Device extends RuffDevice {
    /**
     * Turn this device on.
     * @param callback - The callback.
     */
    turnOn(callback: (error: Error) => void): void;

    /**
     * Turn this device off.
     * @param callback - The callback.
     */
    turnOff(callback: (error: Error) => void): void;
}
```

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies or and then run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)
Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
