load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --baseline-eager; error: TypeError
try {
    this.__defineGetter__("x", Iterator)()
} catch (e) {}
f = function() {
    return (function() {
        this.x
    })
}()
try {
    f()
} catch (e) {}
f()
