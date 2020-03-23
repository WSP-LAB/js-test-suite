load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| module

// Test that accessing imports in lazily parsed functions works.

import { a } from "module1.js";

function add1(x) {
    return x + a;
}

assertEq(add1(2), 3);
