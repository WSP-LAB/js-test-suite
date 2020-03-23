load("201224b0d1c296b45befd2285e95dd42.js");
var Q = 0;
try {
   (function f(i) { Q = i; if (i == 100000) return; f(i+1); })(1)
} catch (e) {
}

if (Q == 100000)
   assertEq(Q, "fail");

