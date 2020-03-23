load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();
startgc(1, 'shrinking');
offThreadCompileScript("");
// Adapted from randomly chosen test: js/src/jit-test/tests/parser/bug-1263355-13.js
gczeal(9);
newGlobal();
