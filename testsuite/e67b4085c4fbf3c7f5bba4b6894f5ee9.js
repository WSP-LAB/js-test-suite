load("201224b0d1c296b45befd2285e95dd42.js");
// map.iterator() and iter.next() are non-generic but work on cross-compartment wrappers.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var g = newGlobal();

var iterator_fn = Set.prototype[Symbol.iterator];
assertThrowsInstanceOf(function () { iterator_fn.call({}); }, TypeError);
assertThrowsInstanceOf(function () { iterator_fn.call(new Map()); }, TypeError);
var setw = g.eval("new Set(['x', 'y'])");
assertIteratorNext(iterator_fn.call(setw), "x");

var next_fn = (new Set())[Symbol.iterator]().next;
assertThrowsInstanceOf(function () { next_fn.call({}); }, TypeError);
assertThrowsInstanceOf(function () { next_fn.call((new Map())[Symbol.iterator]()); }, TypeError);
var iterw = setw[Symbol.iterator]();
assertIteratorResult(next_fn.call(iterw), "x", false);
assertIteratorResult(next_fn.call(iterw), "y", false);
assertIteratorResult(next_fn.call(iterw), undefined, true);
