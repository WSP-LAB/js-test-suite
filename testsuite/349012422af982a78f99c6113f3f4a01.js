load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
   quit();

gczeal(0);
gc();

schedulegc(this);
startgc(0, "shrinking");
var g = newGlobal();
g.offThreadCompileScript('debugger;', {});
g.runOffThreadScript();
