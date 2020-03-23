load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Scoping: `x` in the head of a `for (let x...)` loop refers to the loop variable.

assertThrowsInstanceOf(function () {
var s = "", x = {a: 1, b: 2, c: 3};
for (let x in eval('x'))
    s += x;
assertEq(s, "");
}, ReferenceError);
