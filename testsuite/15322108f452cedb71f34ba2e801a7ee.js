load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var arguments;

function b(foo) {
    delete foo.d
    delete foo.w
    foo.d = true
    foo.w = Object
    delete Object.defineProperty(foo, "d", ({
        set: Math.w
    })); {}
}
for each(e in [arguments, arguments]) {
    try {
        b(e)('')
    } catch (e) {}
}

reportCompare(0, 0, "ok");
