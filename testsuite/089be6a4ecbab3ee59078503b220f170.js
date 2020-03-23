load("201224b0d1c296b45befd2285e95dd42.js");
// set.keys() and set.values() return iterators over the elements
// and set.entries() returns an iterator that yields pairs [e, e].

load("e2c808509c360663d6364e14c187fc8f.js");

var data = [1, 2, 3, 4];
var s = new Set(data);

var ki = s.keys();
assertIteratorNext(ki, 1);
assertIteratorNext(ki, 2);
assertIteratorNext(ki, 3);
assertIteratorNext(ki, 4);
assertIteratorDone(ki, undefined);

assertEq([...s.keys()].toSource(), data.toSource());
assertEq([...s.values()].toSource(), data.toSource());
assertEq([...s.entries()].toSource(), [[1, 1], [2, 2], [3, 3], [4, 4]].toSource());
