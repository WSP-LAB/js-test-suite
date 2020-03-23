load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

load("00e0aa336e6c8b65ee1f164279cff5fc.js");
evalInFrame(1, "a = 43");
let a = 42;
