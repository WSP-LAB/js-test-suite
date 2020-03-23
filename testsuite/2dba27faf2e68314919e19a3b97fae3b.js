load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Make sure that a proxy only has a [[Construct]] if the target does

var handler = {};
var p = new Proxy(Math.sin, handler);
var r = Proxy.revocable(Math.sin, handler).proxy;

assertThrowsInstanceOf(() => new p, TypeError, "Can't use 'new' on proxy with non-constructor target");
assertThrowsInstanceOf(() => new r, TypeError, "Can't use 'new' on proxy with non-constructor target");
// Better throw regardless of whether we have a handler trap.
handler.construct = (() => ({}));
assertThrowsInstanceOf(() => new p, TypeError, "Can't use 'new' on proxy with non-constructor target");
assertThrowsInstanceOf(() => new r, TypeError, "Can't use 'new' on proxy with non-constructor target");
