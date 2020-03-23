load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");

var f = asmLink(asmCompile(USE_ASM + "function a234567() { return 42 } return a234567"));
assertEq(f(), 42);
enableGeckoProfiling();
assertEq(f(), 42);
