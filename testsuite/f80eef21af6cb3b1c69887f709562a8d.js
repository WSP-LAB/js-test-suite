load("201224b0d1c296b45befd2285e95dd42.js");
// for-of can iterate strict arguments objects.

load("e2c808509c360663d6364e14c187fc8f.js");

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function test() {
    "use strict";
    for (var v of arguments)
        s += v;
}

s = '';
test();
assertEq(s, '');

s = '';
test('a', 'b');
assertEq(s, 'ab');
