load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

// Binary: cache/js-dbg-64-a3946d490610-linux
// Flags:
//
var x = [];
x.join = x.toString;
"" + x;
