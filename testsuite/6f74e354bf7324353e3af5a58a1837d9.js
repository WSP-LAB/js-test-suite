load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError

// Binary: cache/js-dbg-32-8c7adf094b8e-linux
// Flags:
//
a = {}.__proto__
gc(evalcx('split'))
