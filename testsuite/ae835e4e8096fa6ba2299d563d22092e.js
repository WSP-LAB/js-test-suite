load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

gczeal(4, 10);
f = ([a = class target extends b {}, b] = [void 0]) => {
    class dbg {}
    class get {}
};
f()
