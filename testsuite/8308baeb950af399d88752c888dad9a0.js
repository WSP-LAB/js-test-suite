load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
    quit();
startgc(8301);
offThreadCompileScript("(({a,b,c}))");
gcparam("maxBytes", gcparam("gcBytes"));
