load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Script.prototype.source should be a different object for the same script
 * within different debuggers.
 */
let g = newGlobal();
let dbg1 = new Debugger(g);
let dbg2 = new Debugger(g);

var count = 0;
var source;
function test(script) {
    ++count;
    if (!source)
        source = script.source;
    else
        assertEq(script.source != source, true);
};
dbg1.onNewScript = test;
dbg2.onNewScript = test;

g.eval("2 * 3");
assertEq(count, 2);
