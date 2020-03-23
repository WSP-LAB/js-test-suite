load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Binary: cache/js-dbg-32-d5fcfa622f16-linux
// Flags:
//
load("6ec98b17981f95f4363b8bc9869495e2.js");

Function.toLocaleString.__proto__ = null
y = {}.__proto__
y.p = function() {}
y.__defineSetter__("", function() {})
if (globalPrototypeChainIsMutable())
    y.__proto__ = Function.toLocaleString;
function b(a) {
    this.__proto__ = a;
    Object.freeze(this)
}
for each(z in []) {
    new b
}
