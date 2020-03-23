load("201224b0d1c296b45befd2285e95dd42.js");
// Debugger.Environment should throw trying to setVariable on optimized out scope.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = newGlobal();
var dbg = new Debugger;
dbg.addDebuggee(g);

g.eval("" + function f() {
  var x = 42;
  function g() { }
  g();
});

dbg.onEnterFrame = function (f) {
  if (f.callee && (f.callee.name === "g"))
    assertThrowsInstanceOf(function () { f.environment.parent.setVariable("x", 43) }, ReferenceError);
}

g.f();
