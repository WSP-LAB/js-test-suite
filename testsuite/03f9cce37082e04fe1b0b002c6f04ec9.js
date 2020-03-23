load("201224b0d1c296b45befd2285e95dd42.js");
// Map.prototype.delete works whether the key is present or not.

var m = new Map;
var key = {};

// when the map is new
assertEq(m.delete(key), false);
assertEq(m.has(key), false);

// when the key is present
assertEq(m.set(key, 'x'), m);
assertEq(m.delete(key), true);
assertEq(m.has(key), false);
assertEq(m.get(key), undefined);

// when the key has already been deleted
assertEq(m.delete(key), false);
assertEq(m.has(key), false);
