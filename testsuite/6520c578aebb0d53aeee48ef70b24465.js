load("201224b0d1c296b45befd2285e95dd42.js");
var x = [1, 2, , 4]
x[100000] = 1;
var y = Object.create(x);
y.a = 1;
y.b = 1;
var arr = [];
for (var z in y)
    arr.push(z);
assertEq(arr.join(), "a,b,0,1,3,100000");
