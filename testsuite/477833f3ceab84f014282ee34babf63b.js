load("201224b0d1c296b45befd2285e95dd42.js");
// new Map(arr) throws if arr contains holes (or undefined values).

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
assertThrowsInstanceOf(function () { new Map([undefined]); }, TypeError);
assertThrowsInstanceOf(function () { new Map([null]); }, TypeError);
assertThrowsInstanceOf(function () { new Map([[0, 0], [1, 1], , [3, 3]]); }, TypeError);
assertThrowsInstanceOf(function () { new Map([[0, 0], [1, 1], ,]); }, TypeError);

// new Map(iterable) throws if iterable doesn't have array-like objects

assertThrowsInstanceOf(function () { new Map([1, 2, 3]); }, TypeError);
assertThrowsInstanceOf(function () {
	let s = new Set([1, 2, "abc"]);
	new Map(s);
}, TypeError);
