load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

// Binary: cache/js-dbg-64-3dd6ec45084c-linux
// Flags:
//
this.__defineGetter__("x", eval);
eval.toString = toLocaleString
eval < x
