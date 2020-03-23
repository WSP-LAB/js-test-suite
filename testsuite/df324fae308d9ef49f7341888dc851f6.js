load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

assertEq(Array.prototype.toSource.call([1, 'hi']), '[1, "hi"]');
assertEq(Array.prototype.toSource.call({1: 10, 0: 42, length: 2}), "[42, 10]");
assertEq(Array.prototype.toSource.call({1: 10, 0: 42, length: 1}), "[42]");
assertThrowsInstanceOf(() => Array.prototype.toSource.call("someString"), TypeError);
assertThrowsInstanceOf(() => Array.prototype.toSource.call(42), TypeError);
assertThrowsInstanceOf(() => Array.prototype.toSource.call(undefined), TypeError);
