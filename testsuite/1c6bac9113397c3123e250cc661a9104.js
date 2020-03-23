load("201224b0d1c296b45befd2285e95dd42.js");
var arr = [1, 2, 3];
var y = 0;
for (var i = 0; i < 10; i++)
    for (var x of arr)
        y += x;
assertEq(y, 60);
