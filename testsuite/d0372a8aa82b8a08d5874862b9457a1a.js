load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() === 0)
    quit();
gczeal(10);
newGlobal();
offThreadCompileScript("let x = 1;");
abortgc();
