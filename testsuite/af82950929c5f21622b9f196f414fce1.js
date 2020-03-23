load("201224b0d1c296b45befd2285e95dd42.js");
// Check superficial features of Array.of.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var desc = Object.getOwnPropertyDescriptor(Array, "of");
assertEq(desc.configurable, true);
assertEq(desc.enumerable, false);
assertEq(desc.writable, true);
assertEq(Array.of.length, 0);
assertThrowsInstanceOf(() => new Array.of(), TypeError);  // not a constructor

// When the this-value passed in is not a constructor, the result is an array.
for (let v of [undefined, null, false, "cow"])
    assertEq(Array.isArray(Array.of.call(v)), true);
