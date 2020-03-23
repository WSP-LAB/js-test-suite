load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --dump-bytecode
if (!('oomTest' in this))
    quit();

function f() {
    eval("(function() {})()");
}
oomTest(f);
