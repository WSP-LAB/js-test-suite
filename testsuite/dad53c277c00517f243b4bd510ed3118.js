load("201224b0d1c296b45befd2285e95dd42.js");
var arr = new Float32Array(1);
arr[0] = 15;
var a = arr[0];
assertEq(a, 15);
switch (a) {
  case 15: break;
  default: throw "FAIL";
}

