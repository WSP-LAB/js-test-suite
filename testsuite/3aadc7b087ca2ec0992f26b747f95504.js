load("201224b0d1c296b45befd2285e95dd42.js");
// for-of can iterate arguments objects for other active frames.

load("e2c808509c360663d6364e14c187fc8f.js");

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function g(obj) {
    for (var v of obj)
        s += v;
}

function f() {
    g(arguments);
}

s = '';
f(1, 2, 3);
assertEq(s, '123');
