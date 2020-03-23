load("201224b0d1c296b45befd2285e95dd42.js");
function f(h, i, Q) {
  var L = Q;
  var H = h;

  return h[i] * L ^ L * 0x1010100;
}
assertEq(f([6], 0, 12345), 1768429654);
