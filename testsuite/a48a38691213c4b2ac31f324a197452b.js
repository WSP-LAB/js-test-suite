load("201224b0d1c296b45befd2285e95dd42.js");
// For-of can't have initializers.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

function assertSyntaxError(str) {
  assertThrowsInstanceOf(function () { return Function(str); }, SyntaxError);
}

assertSyntaxError("for (var x = 1 of []) {}");
assertSyntaxError("for (var [x] = 1 of []) {}");
assertSyntaxError("for (var {x} = 1 of []) {}");

assertSyntaxError("for (let x = 1 of []) {}");
assertSyntaxError("for (let [x] = 1 of []) {}");
assertSyntaxError("for (let {x} = 1 of []) {}");

assertSyntaxError("for (const x = 1 of []) {}");
assertSyntaxError("for (const [x] = 1 of []) {}");
assertSyntaxError("for (const {x} = 1 of []) {}");
