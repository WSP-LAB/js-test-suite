load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

"use strict";
try {
    eval("(function() { eval(); function eval() {} })");
    assertEq(0, 1);
} catch (e) {
    assertEq(e.name, "SyntaxError");
}

reportCompare(0, 0, "ok");
