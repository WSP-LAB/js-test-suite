load("201224b0d1c296b45befd2285e95dd42.js");
var obj = new Proxy(Object.create(null), {});
assertEq(typeof obj, 'object');
assertEq(obj != null, true);
