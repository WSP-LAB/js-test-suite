load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(7,1);
try {
gcparam("maxBytes", gcparam("gcBytes") + 4*1024);
newGlobal("same-compartment");
} catch(exc1) {}
gczeal(1);
