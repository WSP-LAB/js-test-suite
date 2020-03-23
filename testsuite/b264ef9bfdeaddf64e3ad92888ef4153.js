load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow

if (helperThreadCount() == 0)
  quit(0);

var s = '';
for (var i = 0; i < 70000; i++)
 {
    s += 'function x' + i + '() { x' + i + '(); }\n';
}
evaluate(s);
var g = newGlobal();
(new Debugger).addDebuggee(g);
g.offThreadCompileScript('debugger;',{});
g.runOffThreadScript();
