load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| exitstatus: 3

if (typeof oomAfterAllocations !== 'function') {
    quit(3);
}

oomAfterAllocations(50, 2);
eval("(function() {'use asm'; function f() { return +pow(.0, .0) })")
