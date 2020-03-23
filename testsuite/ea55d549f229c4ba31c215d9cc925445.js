load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();

gczeal(9);
function rejectionTracker(state) {}
setPromiseRejectionTrackerCallback(rejectionTracker)
  lfGlobal = newGlobal();
offThreadCompileScript(`new Promise(()=>rej)`);
lfGlobal.runOffThreadScript();
for (lfLocal in this);
