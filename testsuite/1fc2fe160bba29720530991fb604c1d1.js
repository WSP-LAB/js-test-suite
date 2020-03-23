load("201224b0d1c296b45befd2285e95dd42.js");
var arr = [2];
arr.pop();
arr[0] = 2;
assertEq(arr.length, 1);
