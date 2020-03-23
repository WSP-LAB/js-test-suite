load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --no-ion
if (!('oomTest' in this))
    quit();

var g = newGlobal();
oomTest(function() {
    Debugger(g);
});
