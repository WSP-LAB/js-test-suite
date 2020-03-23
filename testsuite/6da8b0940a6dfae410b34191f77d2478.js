load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert with dead Debugger.Object and live cross-compartment wrapper of referent.
var g = newGlobal();
for (var j = 0; j < 4; j++) {
    var dbg = new Debugger;
    dbg.addDebuggee(g);
    dbg.enabled = false;
    dbg = null;
    gc(); gc();
} 
