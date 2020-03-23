load("201224b0d1c296b45befd2285e95dd42.js");
// frame properties throw if !frame.live

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var f;
Debugger(g).onDebuggerStatement = function (frame) {
    assertEq(frame.live, true);
    assertEq(frame.type, "call");
    assertEq(frame.this instanceof Object, true);
    assertEq(frame.older instanceof Debugger.Frame, true);
    assertEq(frame.callee instanceof Debugger.Object, true);
    assertEq(frame.generator, false);
    assertEq(frame.constructing, false);
    assertEq(frame.arguments.length, 0);
    f = frame;
};

g.eval("(function () { debugger; }).call({});");
assertEq(f.live, false);
assertThrowsInstanceOf(function () { f.type; }, Error);
assertThrowsInstanceOf(function () { f.this; }, Error);
assertThrowsInstanceOf(function () { f.older; }, Error);
assertThrowsInstanceOf(function () { f.callee; }, Error);
assertThrowsInstanceOf(function () { f.generator; }, Error);
assertThrowsInstanceOf(function () { f.constructing; }, Error);
assertThrowsInstanceOf(function () { f.arguments; }, Error);
