load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 6;

load("789647b4b1873ad4adf74568147f8449.js");

var f = asmLink(asmCompile(USE_ASM + "function f(i) { i=i|0; if (!i) return; f((i-1)|0); f((i-1)|0); f((i-1)|0); f((i-1)|0); f((i-1)|0); } return f"));
timeout(1);
f(100);
assertEq(true, false);
