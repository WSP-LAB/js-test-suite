load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

f = ([a = class b extends b {}, b] = [void 0]) => {};
f()
