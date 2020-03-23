load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: out of memory

gcparam("maxBytes", gcparam("gcBytes"));
eval(`
    gczeal(2, 1);
    newGlobal();
`);
