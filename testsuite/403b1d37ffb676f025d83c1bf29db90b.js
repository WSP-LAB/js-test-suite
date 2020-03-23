load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

var a = [];
var f = a.forEach.bind(a);
a.push(f);
f(f);
