load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

var x = [];
x.push(x, x); // more than one so the sort can't be optimized away
x.toString = x.sort;
x.toString();
