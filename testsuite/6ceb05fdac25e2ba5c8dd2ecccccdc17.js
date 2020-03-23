load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of basics

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var a = Array.of();
assertEq(a.length, 0);

a = Array.of(undefined, null, 3.14, []);
assertDeepEq(a, [undefined, null, 3.14, []]);

a = [];
for (var i = 0; i < 1000; i++)
    a[i] = i;
assertDeepEq(Array.of.apply({}, a), a);
