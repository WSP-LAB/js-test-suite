load("201224b0d1c296b45befd2285e95dd42.js");
// var declarations in strict frame.eval do not modify the frame

var g = newGlobal();
var dbg = new Debugger(g);
var cv;
dbg.onDebuggerStatement = function (frame) {
    cv = frame.eval("'use strict'; var a = 2; h();");
};
g.a = 1;
g.eval("function f(s) { function h() { return a; } eval(s); debugger; } ");
g.eval("f('0');");
assertEq(cv.return, 1);
g.eval("f('var a = 3;');");
assertEq(cv.return, 3);
