load("201224b0d1c296b45befd2285e95dd42.js");
// for-of can iterate arguments objects after returning.

load("e2c808509c360663d6364e14c187fc8f.js");

function f() {
    return arguments;
}

var s = '';
var args = f('a', 'b', 'c');
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
for (var v of args)
    s += v;
assertEq(s, 'abc');
