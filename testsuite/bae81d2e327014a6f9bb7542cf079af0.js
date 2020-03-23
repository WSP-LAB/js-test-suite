load("201224b0d1c296b45befd2285e95dd42.js");
try {
    // On X64 this was crashing rather than causing a "too much recursion" exception.
    x = /x/;
    (function f() {
        x.r = x;
        return f()
    })();
} catch (e) {}

