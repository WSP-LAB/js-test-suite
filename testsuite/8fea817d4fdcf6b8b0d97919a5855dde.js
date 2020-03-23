load("201224b0d1c296b45befd2285e95dd42.js");
// collection.iterator() returns an iterator object.

load("e2c808509c360663d6364e14c187fc8f.js");

function test(obj, name) {
    var iter = obj[Symbol.iterator]();
    assertEq(typeof iter, "object");
    assertEq(iter instanceof Iterator, false); // Not a legacy Iterator.
    assertEq(iter.toString(), "[object " + obj.constructor.name + " Iterator]");
}

test([]);
test(new Map);
test(new Set);
