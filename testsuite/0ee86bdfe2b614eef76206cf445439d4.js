load("201224b0d1c296b45befd2285e95dd42.js");
var a = [0,1,2,3,4,5,6,7,8,9,10];
for (var i = 0; i < 10; i++)
    assertEq(delete a.length, false);
assertEq(delete a.length, false);
