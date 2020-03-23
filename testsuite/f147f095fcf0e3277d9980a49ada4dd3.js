load("201224b0d1c296b45befd2285e95dd42.js");
// Setting a Map key to undefined, or a missing argument, isn't the same as deleting it.

var m = new Map;
m.set(42, undefined);
assertEq(m.has(42), true);
assertEq(m.get(42), undefined);

m.set(42, "wrong");
m.set(42);
assertEq(m.has(42), true);
assertEq(m.get(42), undefined);

m.set();
assertEq(m.has(undefined), true);
assertEq(m.get(undefined), undefined);
