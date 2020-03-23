load("201224b0d1c296b45befd2285e95dd42.js");
var a = {get p() { return 11; }};

function f() { return a; }

var g = 0;
for (var i = 0; i < 9; i++)
    g += f().p;
assertEq(g, 99);
