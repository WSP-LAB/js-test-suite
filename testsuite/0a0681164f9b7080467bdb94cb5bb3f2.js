load("201224b0d1c296b45befd2285e95dd42.js");
var obj = {p: 100};
var name = "p";
var a = [];
for (var i = 0; i < 10; i++)
    a[i] = --obj[name];
assertEq(a.join(','), '99,98,97,96,95,94,93,92,91,90');
assertEq(obj.p, 90);
