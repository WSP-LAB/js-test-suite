load("201224b0d1c296b45befd2285e95dd42.js");
// Direct proxies pass through the receiver argument to [[Set]] to their targets.
// This also tests that an ordinary object's [[Set]] method can change the length
// of an array passed as the receiver.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var a = [0, 1, 2, 3];
var p = new Proxy({}, {});
Reflect.set(p, "length", 2, a);
assertEq("length" in p, false);
assertEq(a.length, 2);
assertDeepEq(a, [0, 1]);
