load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function roundTrip(f) {
    try {
        eval(uneval(f));
        return true;
    } catch (e) {
        return '' + e;
    }
}

function f() { if (true) { 'use strict'; } var eval; }
assertEq(roundTrip(f), true);

reportCompare(true,true);
