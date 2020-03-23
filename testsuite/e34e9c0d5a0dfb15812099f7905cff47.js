load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);

dbg.onDebuggerStatement = (frame) => {
  assertEq(frame.environment.parent.type, "object");
  assertEq(frame.environment.parent.object.getOwnPropertyDescriptor("x").value, 42);
}
g.evalReturningScope("x = 42; debugger;");
