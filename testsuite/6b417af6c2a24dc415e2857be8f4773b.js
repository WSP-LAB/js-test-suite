load("201224b0d1c296b45befd2285e95dd42.js");
// Try out the pointerByteSize shell function.
var size = getBuildConfiguration()["pointer-byte-size"];
assertEq(size == 4 || size == 8, true);
