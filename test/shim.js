require('../shim');
var test = require('tape');
var Sym = typeof Symbol === 'undefined' ? {} : Symbol;
var isSymbol = function (sym) {
  return typeof Sym === 'function' && typeof sym === 'symbol';
};
var functionsHaveNames = (function foo() {}).name === 'foo';
var ifFunctionsHaveNamesTest = functionsHaveNames ? test : test.skip;
var ifSymbolUnscopablesTest = isSymbol(Sym.unscopables) ? test : test.skip;

if (!Object.prototype.hasOwnProperty.call(Array.prototype, 'fill')) {
  return test('exists', function (t) {
    t.same(!!Array.property.fill, true);
  });
}

ifFunctionsHaveNamesTest('has the correct name', function (t) {
  t.plan(1);

  t.same(Array.prototype.fill.name, 'fill');
});

test('has the right arity', function (t) {
  t.plan(1);

  t.same(Array.prototype.fill.length, 1);
});

test('is not enumerable', function (t) {
  t.plan(1);

  var descriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'fill');

  t.same(descriptor.enumerable, false);
});

test('works with just a value', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [-1, -1, -1, -1, -1, -1];

  t.same(original.fill(-1), filled);
});

test('accepts a positive start index', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [1, 2, 3, -1, -1, -1];

  t.same(original.fill(-1, 3), filled);
});

test('accepts a negative start index', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [1, 2, 3, -1, -1, -1];

  t.same(original.fill(-1, -3), filled);
});

test('accepts a negative end index', function (t) {
  t.plan(1);

  var original = [1, 2, 3];
  var filled = [4, 2, 3];

  t.same(original.fill(4, -3, -2), filled);
});

test('accepts a large start index', function (t) {
  t.plan(1);

  var original = [1, 2, 3, 4, 5, 6];
  var filled = [1, 2, 3, 4, 5, 6];

  t.same(original.fill(-1, 9), filled);
});

ifSymbolUnscopablesTest('should be unscopable if Symbols exist', function (t) {
  t.plan(2);

  var unscopables = Array.prototype[Sym.unscopables];

  t.same(!!unscopables, true);
  t.same(unscopables.fill, true);
});
