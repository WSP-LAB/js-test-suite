load("201224b0d1c296b45befd2285e95dd42.js");
// This test case is a simplified version of debug/Source-invisible.js.

if (!'gczeal' in this)
    quit();

gczeal(2,21);

var gi = newGlobal();
gi.eval('function f() {}');

var gv = newGlobal();
gv.f = gi.f;
gv.eval('f = clone(f);');

var dbg = new Debugger;
