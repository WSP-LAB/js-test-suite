load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1026477: Defining functions with D.F.p.eval works, even if there's
// already a var binding for the identifier.

var g = newGlobal();
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function (frame) {
  frame.eval('function f() { }');
};

// When the compiler sees the 'debugger' statement, it marks all variables as
// aliased, so f will live in a Call object.
assertEq(typeof g.eval('(function () { var f = 42; debugger; return f;})();'),
         "function");
