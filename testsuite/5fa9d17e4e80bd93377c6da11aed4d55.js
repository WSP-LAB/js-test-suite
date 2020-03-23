load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var o = {__iterator__:null, a:1, b:2, c:3}
var expect = '__iterator__,a,b,c,';
var actual = '';

try {
    for (var i in o)
        actual += i + ',';
} catch (e) {
    actual = '' + e;
    if (/invalid __iterator__ value/.test(actual) ||
        /null is not a function/.test(actual)) {
        expect = actual;
    }
}

reportCompare(expect, actual, "ok");
