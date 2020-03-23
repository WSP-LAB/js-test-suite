load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

(function f() {
    let x = (new function() {
        x(() => {
            f.ArrayType(1, 2);
        }, "first argument of ctypes.cast must be a CData");
    })
})();
