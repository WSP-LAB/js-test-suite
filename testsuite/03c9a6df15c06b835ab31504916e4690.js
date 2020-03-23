load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError
this.__defineSetter__("x", function () {})
try {
    this.__defineGetter__("d", (Function("x")))
} catch (e) {}
d
print(delete x)
throw d


