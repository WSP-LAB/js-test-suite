load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| 
// Exercise finding a DebuggerSource cross compartment wrapper in
// JSCompartment::findOutgoingEdges()

let g = newGlobal();
let dbg = new Debugger(g);
dbg.onNewScript = function (script) {
  var text = script.source.text;
}
g.eval("function f() { function g() {} }");
gczeal(9, 1)
var a = {}
var b = {}
