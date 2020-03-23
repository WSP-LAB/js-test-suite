load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert.
try {
    eval("function x(y = {\
        x: (7) ? 0 : yield(0)\
    }");
} catch (e) {}
