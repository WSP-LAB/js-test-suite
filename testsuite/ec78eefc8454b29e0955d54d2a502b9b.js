load("201224b0d1c296b45befd2285e95dd42.js");
// Changing arguments.length affects a for-of loop iterating over arguments.

load("e2c808509c360663d6364e14c187fc8f.js");

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function f() {
    arguments.length = 2;
    for (var v of arguments)
        s += v;
}

s = '';
f('a', 'b', 'c', 'd', 'e');
assertEq(s, 'ab');
