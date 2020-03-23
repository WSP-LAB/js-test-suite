load("201224b0d1c296b45befd2285e95dd42.js");

function f(o) {
    o[{}] = 1;
    with(Object) {}
}
f(Object.prototype);
