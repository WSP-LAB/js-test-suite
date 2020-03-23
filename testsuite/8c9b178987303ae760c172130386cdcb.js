load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

assertThrowsInstanceOf(() => Math.sin(...true), TypeError);
assertThrowsInstanceOf(() => Math.sin(...false), TypeError);
assertThrowsInstanceOf(() => Math.sin(...new Date()), TypeError);
assertThrowsInstanceOf(() => Math.sin(...Function("")), TypeError);
assertThrowsInstanceOf(() => Math.sin(...function () {}), TypeError);
assertThrowsInstanceOf(() => Math.sin(...(x => x)), TypeError);
assertThrowsInstanceOf(() => Math.sin(...1), TypeError);
assertThrowsInstanceOf(() => Math.sin(...{}), TypeError);
var foo = {}

foo[Symbol.iterator] = 10;
assertThrowsInstanceOf(() => Math.sin(...foo), TypeError);

foo[Symbol.iterator] = function() { return undefined; };
assertThrowsInstanceOf(() => Math.sin(...foo), TypeError);

foo[Symbol.iterator] = function() { return this; };
assertThrowsInstanceOf(() => Math.sin(...foo), TypeError);

foo[Symbol.iterator] = function() { return this; };
foo.next = function() { throw 10; };
assertThrowsValue(() => Math.sin(...foo), 10);

assertThrowsInstanceOf(() => Math.sin(.../a/), TypeError);
assertThrowsInstanceOf(() => Math.sin(...new Error()), TypeError);
