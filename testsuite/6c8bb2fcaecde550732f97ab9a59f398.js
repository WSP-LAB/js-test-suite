load("201224b0d1c296b45befd2285e95dd42.js");
var loc = Reflect.parse("f()").body[0].expression.loc;
assertEq(loc.start.column, 0);
assertEq(loc.end.column, 3);

loc = Reflect.parse("f(x)").body[0].expression.loc;
assertEq(loc.start.column, 0);
assertEq(loc.end.column, 4);
