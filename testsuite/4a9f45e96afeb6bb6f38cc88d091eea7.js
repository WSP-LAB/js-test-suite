load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

// Verify that the compiler doesn't assert.

function f() {
    var o = {}, p = {};
    z = o instanceof p;
    z = 3 instanceof p;
    z = p instanceof 3;
    z = 3 instanceof 4;
}

f();
