# array-fill [![Build Status](https://travis-ci.org/1000ch/array-fill.svg?branch=master)](https://travis-ci.org/1000ch/array-fill)

Polyfill for Array.prototype.fill.

[![testling badge](https://ci.testling.com/1000ch/array-fill.png)](https://ci.testling.com/1000ch/array-fill)

## Usage

Functionally:

```javascript
var fill = require('array-fill');

console.log(fill([1, 2, 3], 4));
// => [ 4, 4, 4 ]

console.log(fill([1, 2, 3], 4, 1));
// => [ 1, 4, 4 ]
```

From Array object:

```javascript
require('array-fill/shim');

var array = [1, 2, 3];
array.fill(4, -3, -2);

console.log(array);
// => [ 4, 2, 3 ]
```

## License

MIT: http://1000ch.mit-license.org
