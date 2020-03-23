load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1133085 - Test that descriptors are properly reconstituted
// when only .get or only .set is present.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var input, output;
var p = new Proxy({x: 0}, {
    defineProperty(t, k, desc) { output = desc; print("ok"); return true; }
});

input = {get: function () {}};
Object.defineProperty(p, "x", input);
assertDeepEq(output, input);

input = {set: function () {}};
Object.defineProperty(p, "x", input);
assertDeepEq(output, input);
