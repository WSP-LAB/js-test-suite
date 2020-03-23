load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

if (typeof options == "function") {
    var opts = options();
    if (!/\bstrict_mode\b/.test(opts))
        options("strict_mode");
}

var ok = false;
try {
    eval('foo = true;');
} catch (e) {
    if (/^ReferenceError:/.test(e.toString()))
        ok = true;
}

if (ok)
    reportCompare(0, 0, "ok");
else
    reportCompare(true, false, "this should have thrown a ReferenceError");
