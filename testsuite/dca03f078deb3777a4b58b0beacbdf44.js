load("201224b0d1c296b45befd2285e95dd42.js");
// The right-hand-side of a for-of is an assignment expression.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function assertSyntaxError(str) {
  assertThrowsInstanceOf(function () { return Function(str); }, SyntaxError);
}

assertSyntaxError("for (var x     of 1, 2) {}");
assertSyntaxError("for (var [x]   of 1, 2) {}");
assertSyntaxError("for (var {x}   of 1, 2) {}");

assertSyntaxError("for (let x     of 1, 2) {}");
assertSyntaxError("for (let [x]   of 1, 2) {}");
assertSyntaxError("for (let {x}   of 1, 2) {}");

assertSyntaxError("for (const x   of 1, 2) {}");
assertSyntaxError("for (const [x] of 1, 2) {}");
assertSyntaxError("for (const {x} of 1, 2) {}");
