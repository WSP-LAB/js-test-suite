load("201224b0d1c296b45befd2285e95dd42.js");
// Superficial tests of the Array.prototype[@@iterator] builtin function and its workalikes.

load("e2c808509c360663d6364e14c187fc8f.js");

var constructors = [Array, String, Uint8Array, Uint8ClampedArray];
for (var c of constructors) {
    assertEq(c.prototype[Symbol.iterator].length, 0);

    var loc = (c === Array || c === String)
            ? c.prototype
            : Object.getPrototypeOf(c.prototype);

    var desc = Object.getOwnPropertyDescriptor(loc, Symbol.iterator);
    assertEq(desc.configurable, true);
    assertEq(desc.enumerable, false);
    assertEq(desc.writable, true);
}
