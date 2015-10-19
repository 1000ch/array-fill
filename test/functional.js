var fill = require('../');
var test = require('tape');

test('array & value', function (t) {
  t.plan(3);

  var predicated = [4, 4, 4];
  var array = fill([1, 2, 3], 4);

  for (var i = 0, l = array.length; i < l; i++) {
    t.equal(array[i], predicated[i]);
  }
});

test('array & value & start', function (t) {
  t.plan(3);

  var predicated = [1, 4, 4];
  var array = fill([1, 2, 3], 4, 1);

  for (var i = 0, l = array.length; i < l; i++) {
    t.equal(array[i], predicated[i]);
  }
});

test('array & value & start & end', function (t) {
  t.plan(3);

  var predicated = [1, 4, 3];
  var array = fill([1, 2, 3], 4, 1, 2);

  for (var i = 0, l = array.length; i < l; i++) {
    t.equal(array[i], predicated[i]);
  }
});

test('array & value & start & end', function (t) {
  t.plan(3);

  var predicated = [1, 2, 3];
  var array = fill([1, 2, 3], 4, 1, 1);

  for (var i = 0, l = array.length; i < l; i++) {
    t.equal(array[i], predicated[i]);
  }
});

test('array & value & start & end', function (t) {
  t.plan(3);

  var predicated = [4, 2, 3];
  var array = fill([1, 2, 3], 4, -3, -2);

  for (var i = 0, l = array.length; i < l; i++) {
    t.equal(array[i], predicated[i]);
  }
});

test('array & value & start & end', function (t) {
  t.plan(3);

  var predicated = [1, 2, 3];
  var array = fill([1, 2, 3], 4, NaN, NaN);

  for (var i = 0, l = array.length; i < l; i++) {
    t.equal(array[i], predicated[i]);
  }
});
