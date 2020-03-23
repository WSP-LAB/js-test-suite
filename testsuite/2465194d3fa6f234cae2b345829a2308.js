load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
var dbg = Debugger(g);
dbg.onNewScript = function (s) {
    eval(longScript);
}
const longScript = "var x = 1;\n" + new Array(5000).join("x + ") + "x";
g.eval(longScript);
