load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = new Debugger(g);
try { g.eval('function drag(ev) {'); } catch (ex) { }
for (s of dbg.findScripts())
  s.lineCount;
