load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1250190: Shouldn't crash. |jit-test| error: yadda

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onNewGlobalObject = function () {
  dbg.onNewGlobalObject = function () { throw "yadda"; };
  newGlobal();
}
newGlobal();
