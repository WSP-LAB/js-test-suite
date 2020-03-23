load("201224b0d1c296b45befd2285e95dd42.js");
// map.iterator() and iter.next() are non-generic but work on cross-compartment wrappers.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("dc4b20628140c803c89c741458a4c2d0.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var g = newGlobal();

var iterator_fn = Map.prototype[Symbol.iterator];
assertThrowsInstanceOf(function () { iterator_fn.call({}); }, TypeError);
assertThrowsInstanceOf(function () { iterator_fn.call(new Set()); }, TypeError);
var mapw = g.eval("new Map([['x', 1], ['y', 2]])");
assertEqArray(iterator_fn.call(mapw).next().value, ["x", 1]);

var next_fn = (new Map())[Symbol.iterator]().next;
assertThrowsInstanceOf(function () { next_fn.call({}); }, TypeError);
assertThrowsInstanceOf(function () { next_fn.call((new Set())[Symbol.iterator]()); }, TypeError);
var iterw = mapw[Symbol.iterator]();
assertEqArray(next_fn.call(iterw).value, ["x", 1]);
assertEqArray(next_fn.call(iterw).value, ["y", 2]);
assertEq(next_fn.call(iterw).done, true);
