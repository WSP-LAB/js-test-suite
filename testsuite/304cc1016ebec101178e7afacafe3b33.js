load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1031632 - Map.prototype.set, WeakMap.prototype.set and
// Set.prototype.add should be chainable

var m = new Map();
assertEq(m.set('oof', 'RAB'), m);
var a = m.set('foo', 'BAR').get('foo');
assertEq(a, 'BAR');
