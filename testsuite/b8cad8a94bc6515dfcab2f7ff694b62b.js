load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
function f1(code) {
    f = Function(code)
    f2()
}
function f2() {
    f()
}
f1("d=this.__defineGetter__(\"x\",gc)")
f1("b(x&=w);function b(){}")

