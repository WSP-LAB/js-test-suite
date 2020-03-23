load("201224b0d1c296b45befd2285e95dd42.js");
var list = [Number, Function];

var ws = new WeakSet(list);
assertEq(ws.has(Number), true);
assertEq(ws.has(Function), true);

ws = new WeakSet(new Set(list));
assertEq(ws.has(Number), true);
assertEq(ws.has(Function), true);
