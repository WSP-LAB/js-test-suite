load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
function test(stdlib, foreign) {
    "use asm"
    var ff = foreign.ff
    function f(y) {
        y = +y;
        ff(0);
    }
    return f;
};
f = test(this, {ff: Object.defineProperty});
f();
