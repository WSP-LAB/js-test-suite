load("201224b0d1c296b45befd2285e95dd42.js");
var r;
Object.defineProperty(this, "x", {value: 0, writable: false});

for (var a = 0; a < 10; ++a)
    r = ++x;
assertEq(x, 0);
assertEq(r, 1);

for (var a = 0; a < 10; ++a)
    r = --x;
assertEq(x, 0);
assertEq(r, -1);

for (var a = 0; a < 10; ++a)
    r = x++;
assertEq(x, 0);
assertEq(r, 0);

for (var a = 0; a < 10; ++a)
    r = x--;
assertEq(x, 0);
assertEq(r, 0);
