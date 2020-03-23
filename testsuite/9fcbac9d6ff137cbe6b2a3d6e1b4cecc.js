load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: 3
var str = (function (x) {return (i for (i in x));}).toSource().replace('\n', '');
assertEq(str, "(function (x) {return (i for (i in x));})");
throw 3;
