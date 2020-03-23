load("201224b0d1c296b45befd2285e95dd42.js");
// Changing arguments.length during a for-of loop iterating over arguments affects the loop.

load("e2c808509c360663d6364e14c187fc8f.js");

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function f() {
    for (var v of arguments) {
        s += v;
        arguments.length--;
    }
}

s = '';
f('a', 'b', 'c', 'd', 'e');
assertEq(s, 'abc');
