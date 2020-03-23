load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: RangeError;
var vs = [1, 1, 1, 1, 3.5, 1];
for (var i = 0, sz = vs.length; i < sz; i++) new Array(vs[i]);
