load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
function f(o) {
    o.watch("x", this);
}
var c = evalcx("");
f(c);
