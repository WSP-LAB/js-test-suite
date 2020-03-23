load("201224b0d1c296b45befd2285e95dd42.js");
globalName = 907;
var globalInt = 0;
for (var i = 0; i < 500; i++)
  globalInt = globalName + i;

assertEq(globalInt, globalName + 499);
