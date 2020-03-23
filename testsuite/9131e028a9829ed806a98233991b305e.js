load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; allow-unhandlable-oom
gcparam("maxBytes", gcparam("gcBytes") + 1);
fullcompartmentchecks(true);
/x/g[Symbol.replace]("        x".repeat(32768), "");
