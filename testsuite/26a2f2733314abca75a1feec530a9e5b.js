load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff
 */

if (typeof evalcx == 'function') {
    var cx = evalcx("");
    evalcx("function f() { return this; }", cx);
    f = cx.f;
    assertEq(f(), cx);

    evalcx("function g() { 'use strict'; return this; }", cx);
    g = cx.g;
    assertEq(g(), undefined);
}

reportCompare(0, 0, "ok");
