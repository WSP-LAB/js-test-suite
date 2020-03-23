load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function outer() {
    function f() {}
    f.p = function() {};
    Object.seal(f);
    return f.p;
}

var m1 = outer();
var m2 = outer();
assertEq(m1 === m2, false);

m1.foo = "hi";
assertEq(m2.foo, undefined);

reportCompare(0, 0, "ok");
