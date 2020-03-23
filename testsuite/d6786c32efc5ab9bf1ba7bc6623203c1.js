load("201224b0d1c296b45befd2285e95dd42.js");
var re = /.*star.*/i;
var str = "The Shawshank Redemption (1994)";
for (var k = 0; k < 100; k++)
  assertEq(false, re.test(str));
