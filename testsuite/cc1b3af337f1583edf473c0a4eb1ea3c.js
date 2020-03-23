load("201224b0d1c296b45befd2285e95dd42.js");
|jit-test| error: Error
function testChangeParam(key) {
    gcparam(key, 0x22222222);
}
testChangeParam("lowFrequencyHeapGrowth");
