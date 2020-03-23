load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

function testMethod(name) {
    var method = WeakSet.prototype[name];

    assertThrowsInstanceOf(function() { method.call(1); }, TypeError);
    assertThrowsInstanceOf(function() { method.call({}); }, TypeError);
    assertThrowsInstanceOf(function() { method.call(new WeakMap); }, TypeError);
    assertThrowsInstanceOf(function() { method.call(WeakSet.prototype); }, TypeError);
}

testMethod("has");
testMethod("add");
testMethod("delete");
testMethod("clear");

assertThrowsInstanceOf(function() { var ws = new WeakSet(); ws.add(1); }, TypeError);
assertThrowsInstanceOf(function() { new WeakSet({[Symbol.iterator]: 2}) }, TypeError);
assertEq(typeof [][Symbol.iterator], "function");

assertThrowsInstanceOf(function() { WeakSet(); }, TypeError);
