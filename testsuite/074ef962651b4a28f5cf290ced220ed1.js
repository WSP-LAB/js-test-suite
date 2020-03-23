load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var expect = "No error";
var actual = expect;

if (typeof options == "function") {
    var opts = options();
    if (!/\bstrict\b/.test(opts))
        options("strict");
    if (!/\bwerror\b/.test(opts))
        options("werror");
}

try {
    eval('function foo() { "use strict"; }');
} catch (e) {
    actual = '' + e;
}

reportCompare(expect, actual, "ok");
