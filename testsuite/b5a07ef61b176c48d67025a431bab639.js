load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 6;

load("789647b4b1873ad4adf74568147f8449.js");

var g = asmLink(asmCompile(USE_ASM + "function f(d) { d=+d; d=d*.1; d=d/.4; return +d } function g() { while(1) { +f(1.1) } } return g"));
timeout(1);
g();
assertEq(true, false);
