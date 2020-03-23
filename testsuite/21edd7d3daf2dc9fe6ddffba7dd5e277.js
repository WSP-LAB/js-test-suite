load("201224b0d1c296b45befd2285e95dd42.js");
function surprise(depth) {
    arguments.callee.caller(depth);
}

(function(depth) {
    function foo() { function asmModule() { 'use asm'; return {} } };
    if (depth)
        surprise(depth - 1);
})(2);
