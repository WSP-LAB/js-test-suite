load("201224b0d1c296b45befd2285e95dd42.js");
var dbgGlobal = newGlobal();
var dbg = new dbgGlobal.Debugger();
dbg.addDebuggee(this);
function f() {
  var a = arguments;
  a[1];
  dbg.getNewestFrame().eval("a");
}
f();

