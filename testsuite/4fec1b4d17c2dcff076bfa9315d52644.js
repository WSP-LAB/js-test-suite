load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(1);

var g = newGlobal();

g.eval("\
var f = function(x) { \
    arg = arguments; \
    fun = function() { return x }; \
} \
");

g.f(3);
g.f = null;
assertEq(g.fun(), 3);
assertEq(g.arg[0], 3);
gc();
g.arg[0] = 9;
assertEq(g.fun(), 9);
assertEq(g.arg[0], 9);
