load("201224b0d1c296b45befd2285e95dd42.js");
// 'arguments' is lexically scoped in arrow functions

var args, g;
function f() {
    g = () => arguments;
    args = arguments;
}
f();
assertEq(g(), args);
