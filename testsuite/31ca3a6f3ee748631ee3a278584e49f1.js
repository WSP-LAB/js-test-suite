load("201224b0d1c296b45befd2285e95dd42.js");
var s, v = "NOPE";

s = '';
for (let v = 0, x = v; x < 3; x++)
    s += x;
assertEq(s, '012');

s = '';
for (let v = 0, x = eval('v'); x < 3; x++)
    s += x;
assertEq(s, '012');

s = ''
for (let v = 0, x = function () { with ({}) return v; }(); x < 3; x++)
    s += x;
assertEq(s, '012');
