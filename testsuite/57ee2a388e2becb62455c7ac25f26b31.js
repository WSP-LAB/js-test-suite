load("201224b0d1c296b45befd2285e95dd42.js");
|jit-test| error: Error
gcparam("lowFrequencyHeapGrowth", 0.1);
gcparam("lowFrequencyHeapGrowth", 2);
let ok = false;
try {
    gcparam("lowFrequencyHeapGrowth", 0x22222222);
} catch (e) {
    ok = true;
}
assertEq(ok, true);
