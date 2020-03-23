load("201224b0d1c296b45befd2285e95dd42.js");
var proto = {};
var obj = Object.create(proto);
Object.defineProperty(proto, "x", { get: decodeURI, configurable: true });
Object.defineProperty(obj, "z", { get: function () { return this.x; } });
assertEq(obj.z, "undefined");

Object.defineProperty(proto, "x", { get: Math.sin, configurable: false });
assertEq(obj.z, NaN);
