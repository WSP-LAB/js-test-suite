load("201224b0d1c296b45befd2285e95dd42.js");
// new WeakMap(arr) throws if arr contains holes (or undefined values).

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var v3 = {};

assertThrowsInstanceOf(function () { new WeakMap([undefined]); }, TypeError);
assertThrowsInstanceOf(function () { new WeakMap([null]); }, TypeError);
assertThrowsInstanceOf(function () { new WeakMap([[k1, v1], [k2, v2], , [k3, k3]]); }, TypeError);
assertThrowsInstanceOf(function () { new WeakMap([[k1, v1], [k2, v2], ,]); }, TypeError);

// new WeakMap(iterable) throws if iterable doesn't have array-like objects

assertThrowsInstanceOf(function () { new WeakMap([1, 2, 3]); }, TypeError);
assertThrowsInstanceOf(function () {
  let s = new Set([1, 2, "abc"]);
  new WeakMap(s);
}, TypeError);
