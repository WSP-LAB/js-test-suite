load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-bf8f2961d0cc-linux
// Flags:
//
Object.watch.call(new Uint8ClampedArray, "length", function() {});
