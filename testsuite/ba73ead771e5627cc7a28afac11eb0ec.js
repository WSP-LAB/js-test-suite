load("201224b0d1c296b45befd2285e95dd42.js");
// Constant folding does not affect strict delete.

function f(x) {
    "use strict";

    // This senseless delete-expression is legal even in strict mode. Per ES5.1
    // 11.4.1 step 2, it does nothing and returns true.
    return delete (1 ? x : x);
}
assertEq(f(), true);
