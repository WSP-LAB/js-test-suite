load("201224b0d1c296b45befd2285e95dd42.js");
// Superficial tests for iterators created by Array.prototype.iterator

load("e2c808509c360663d6364e14c187fc8f.js");

var proto = Object.getPrototypeOf([][Symbol.iterator]());
var iterProto = Object.getPrototypeOf(proto);
proto = Object.getPrototypeOf([].keys());
assertEq(Object.getPrototypeOf(proto), iterProto);
proto = Object.getPrototypeOf([].entries());
assertEq(Object.getPrototypeOf(proto), iterProto);

function check(it) {
    assertEq(typeof it, 'object');
    assertEq(Object.getPrototypeOf(it), proto);
    assertEq(Object.getOwnPropertyNames(it).length, 0);
    assertEq(it[Symbol.iterator](), it);

    // for-in enumerates the iterator's properties.
    it.x = 0;
    var s = '';
    for (var p in it)
        s += p + '.';
    assertEq(s, 'x.');
}

check([][Symbol.iterator]());
check(Array.prototype[Symbol.iterator].call({}));
check([].keys());
check(Array.prototype.keys.call({}));
check([].entries());
check(Array.prototype.entries.call({}));
