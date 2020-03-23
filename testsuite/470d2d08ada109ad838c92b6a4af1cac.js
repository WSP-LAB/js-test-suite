load("201224b0d1c296b45befd2285e95dd42.js");
// don't assert or crash
function g(o) {
    o.__proto__ = arguments;
    o.length = 123;
}
function f() {
    g(arguments);
}
f();

