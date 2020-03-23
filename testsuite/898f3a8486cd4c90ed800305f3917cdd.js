load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// See bug 630543.

function f() {
    "use strict";
    return !this;
}
assertEq(f.call(null), true);

reportCompare(0, 0, 'ok');
