load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-32-0428dbdf3d58-linux
// Flags:
//
o = (new Uint32Array).buffer
o.__proto__ = o
o.__proto__ = o
