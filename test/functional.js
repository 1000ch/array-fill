var fill = require('../');
var test = require('tape');

test('works with just a value', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [-1, -1, -1, -1, -1, -1];

  t.same(fill(original, -1), filled);
});

test('accepts a positive start index', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [1, 2, 3, -1, -1, -1];

  t.same(fill(original, -1, 3), filled);
});

test('accepts a negative start index', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [1, 2, 3, -1, -1, -1];

  t.same(fill(original, -1, -3), filled);
});

test('accepts a negative end index', function (t) {
  t.plan(1);

  var original = [1, 2, 3];
  var filled = [4, 2, 3];

  t.same(fill(original, 4, -3, -2), filled);
});

test('accepts a large start index', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [1, 2, 3, 4, 5, 6];

  t.same(fill(original, -1, 9), filled);
});
