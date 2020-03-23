load("201224b0d1c296b45befd2285e95dd42.js");
if (typeof oomAfterAllocations !== 'function' || typeof evaluate !== 'function')
    quit();

oomAfterAllocations(10, 2);
evaluate(`function mod(stdlib, ffi, heap) {
    "use asm";
    function f3(k) {
        k = k | 0;
    }
    function g3(k) {}
}`);
