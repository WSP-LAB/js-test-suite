load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * This should compile without triggering the following assertion:
 * 
 * Assertion failure: cg->fun->u.i.skipmin <= skip, at ../jsemit.cpp:2346
 */

function f() {
    function g() {
        function h() {
            g; x;
        }
        var [x] = [];
    }
}

reportCompare(true, true);
