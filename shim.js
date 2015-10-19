var arrayFill = require('./');

if (!Array.prototype.fill) {
  Array.prototype.fill = function (value, start, end) {
    return arrayFill(this, value, start, end);
  };
}
