load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: too much recursion
function f(code) {
    try {
        g = Function(code)
    } catch (e) {}
    g()
}
f("\
    Object.defineProperty(this,\"x\",{\
        get: function(){\
            evaluate(\"Array(x)\",{\
                catchTermination:(function(){})\
            })\
        }\
    })\
");
f("x");
f(")");
f("x");
