load("201224b0d1c296b45befd2285e95dd42.js");

var scope = {};
scope.mod = eval(`"use strict"; (function() { "use asm"; function f() {} return f; });`);

scope.fun = scope.mod();

var caught = false;
for (let callee of ['mod', 'fun']) {
    for (let getter of ['caller', 'arguments']) {
        caught = false;
        try {
            scope[callee][getter];
        } catch (e) {
            caught = true;
            assertEq(e instanceof TypeError, true);
        }
        assertEq(caught, true);
    }
}
