load("201224b0d1c296b45befd2285e95dd42.js");
// Iterator.prototype.next throws if applied to a value that isn't an iterator.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
for (var v of [null, undefined, false, 0, "ponies", {}, [], this])
    assertThrowsInstanceOf(function () { Iterator.prototype.next.call(v); }, TypeError);
