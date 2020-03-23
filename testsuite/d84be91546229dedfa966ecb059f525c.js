load("201224b0d1c296b45befd2285e95dd42.js");
// Array.of does not leave holes

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertDeepEq(Array.of(undefined), [undefined]);
assertDeepEq(Array.of(undefined, undefined), [undefined, undefined]);
assertDeepEq(Array.of.apply(this, [,,undefined]), [undefined, undefined, undefined]);
assertDeepEq(Array.of.apply(this, Array(4)), [undefined, undefined, undefined, undefined]);
