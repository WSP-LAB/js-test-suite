load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-44dcffe8792b-linux
// Flags: -a
//
try {
    x = [];
    Array.prototype.forEach()
} catch (e) {}
x.forEach()
