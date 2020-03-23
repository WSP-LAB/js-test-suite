load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var a = [];
for (var i = 0; i < 2; i++) {
    a[i] = {m: function () {}};
    Object.defineProperty(a[i], "m", {writable: false});
}
assertEq(a[0].m === a[1].m, false);

reportCompare(0, 0, "ok");
