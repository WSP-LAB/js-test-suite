load("201224b0d1c296b45befd2285e95dd42.js");
var rg = /(X(?:.(?!X))*?Y)|(Y(?:.(?!Y))*?Z)/g;
var str = "Y aaa X Match1 Y aaa Y Match2 Z";
assertEq(str.match(rg) + "", "X Match1 Y,Y Match2 Z");
