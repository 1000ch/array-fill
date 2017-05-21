var arrayFill = require('./');

if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    enumerable: false,
    value: function fill(value) {
      var start = arguments.length > 1 ? arguments[1] : undefined;
      var end = arguments.length > 2 ? arguments[2] : undefined;

      return arrayFill(this, value, start, end);
    }
  });
}
