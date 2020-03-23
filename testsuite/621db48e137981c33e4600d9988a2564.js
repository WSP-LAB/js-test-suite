load("201224b0d1c296b45befd2285e95dd42.js");
var evalInFrame = (function (global) {
  var dbgGlobal = newGlobal();
  var dbg = new dbgGlobal.Debugger();
  return function evalInFrame(upCount, code) {
    dbg.addDebuggee(global);
    var frame = dbg.getNewestFrame().older;
    var completion = frame.eval(code);
  };
})(this);
function f() {
    {
        let {} = "xxx";
        yield evalInFrame(0, "x");
    }
}
var gen = f();
gen.next()

