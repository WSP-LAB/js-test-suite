load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var k = g.eval('var u = new Object(); u');
var m = new WeakMap();
m.set(k, {});
k = null;
gc();
k = g.eval('u');
assertEq(m.has(k), true);
