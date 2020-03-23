load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

JSON.__proto__[1] = new Uint8ClampedArray().buffer
f = (function() {
    function g(c) {
        Object.freeze(c).__proto__ = c
    }
    for each(b in []) {
        try {
            g(b)
        } catch (e) {}
    }
})
f()
f()
