load("201224b0d1c296b45befd2285e95dd42.js");

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function C(a, b) {}
var f = C.bind(null, 2);
var that = this;
assertThrowsInstanceOf(function () { g = clone(f, that)}, TypeError);
