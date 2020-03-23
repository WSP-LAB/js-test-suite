load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

// Binary: cache/js-dbg-64-0906d9490eaf-linux
// Flags:
//
var e = Error('');
e.fileName = e;
e.toSource();
--> Crash with too much recursion in exn_toSource
