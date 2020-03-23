load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof gczeal === 'undefined' || typeof SIMD === 'undefined') {
    quit();
}

gczeal(9, 2);
var Int8x16 = SIMD.Int8x16;
var v = Int8x16();
var good = { valueOf: () => 21 };
Int8x16.shiftLeftByScalar(v, good);
