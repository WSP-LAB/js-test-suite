load("201224b0d1c296b45befd2285e95dd42.js");
for (var i = 0; i < 500; i++)
  globalInt = i;

assertEq(globalInt, 499);
