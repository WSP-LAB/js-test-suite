load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
evalcx("\
    for(x = 0; x < 9; x++) {\
        let y = y.s()\
    }\
", newGlobal())
