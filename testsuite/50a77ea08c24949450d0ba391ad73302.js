load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
function eq(e, a) {
    passed = (a == e);
}
function f(e, a) {
    fail();
    eq(e, a);
}
try {
    f();
} catch (exc1) {}
eq(.1, .1);
var sym = Symbol("method");
evaluate("f(test, sym, 0)", {isRunOnce:true});
