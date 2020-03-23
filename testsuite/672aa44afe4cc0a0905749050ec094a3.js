load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof oomTest !== 'function')
    quit();

x = 0;
try {
    a;
    b;
} catch (e) {}
var g = newGlobal();
oomTest(function() {
    return Debugger(g);
});
eval("function g() {}");
