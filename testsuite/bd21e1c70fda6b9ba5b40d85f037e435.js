load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1031632 - Map.prototype.set, WeakMap.prototype.set and
// Set.prototype.add should be chainable

var wm = new WeakMap();
var bar = {};
assertEq(wm.set(bar, 'BAR'), wm);
var foo = {};
var a = wm.set(foo, 'FOO').get(foo);
assertEq(a, 'FOO');
