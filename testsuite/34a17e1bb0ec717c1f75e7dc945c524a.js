load("201224b0d1c296b45befd2285e95dd42.js");
enableShellAllocationMetadataBuilder();
var g = newGlobal()
g.eval("function f(a) { return h(); }");
g.h = function () {
    return [1, 2, 3];
};
var o = getAllocationMetadata(g.f(5));
assertEq(o.stack.length, 1);
assertEq(o.stack[0], g.h);
