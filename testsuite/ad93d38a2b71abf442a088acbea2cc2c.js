load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow
"use strict";

if (!('oomTest' in this))
    quit();

let g = (function() {
    "use asm";
    function f() {}
    return f;
})();

oomTest(() => "" + g);
