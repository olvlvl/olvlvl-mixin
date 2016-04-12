# mixin

[![npm](https://img.shields.io/npm/v/olvlvl-mixin.svg)](https://www.npmjs.com/package/olvlvl-mixin)

I simple mixin helper to work with [ECMAScript 6 classes][].





## Usage

```js
"use strict";

const mixin = require('olvlvl-mixin')

class Plant {}
class Robot {}
class Killer {}

class KillerRobot extends mixin(Robot, Killer) {}
class KillerPlant extends mixin(Plant, Killer) {}
class KillerRobotPlant extends mixin(Plan, Robot, Killer) {} 
```





----------





## Requirement

ECMAScript 6.





## Installation

The recommended way to install the package in through [npm](https://www.npmjs.com/):

```bash
$ npm install olvlvl-mixin --save
```





## Cloning the repository

The package is [available on GitHub](https://github.com/olvlvl/mixin), its repository can be cloned with the following command line:

```bash
$ git clone https://github.com/olvlvl/mixin.git
```





## Testing

The test suite is ran with the `make test` command.





## License

**olvlvl-mixin** is licensed under the New BSD License - See the [LICENSE](LICENSE) file for details.





[ECMAScript 6 classes]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
