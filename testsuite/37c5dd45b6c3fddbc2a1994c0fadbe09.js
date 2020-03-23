load("201224b0d1c296b45befd2285e95dd42.js");
bitwiseAndValue = Math.pow(2,32);
for (var i = 0; i < 60000; i++)
  bitwiseAndValue = bitwiseAndValue & i;

assertEq(bitwiseAndValue, 0);



