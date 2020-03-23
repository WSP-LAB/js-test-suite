load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-49afabda6701-linux
// Flags: -m -n -a
//

this.__proto__ = newGlobal();
eval("(toLocaleString)();");
