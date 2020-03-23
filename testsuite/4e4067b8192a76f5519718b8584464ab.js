load("201224b0d1c296b45befd2285e95dd42.js");
// for-of can iterate arguments objects.

load("e2c808509c360663d6364e14c187fc8f.js");

// Arguments objects do not have a .@@iterator() method by default.
// Install one on Object.prototype.
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var s;
function test() {
    for (var v of arguments)
        s += v;
}

s = '';
test();
assertEq(s, '');

s = '';
test('x', 'y');
assertEq(s, 'xy');
