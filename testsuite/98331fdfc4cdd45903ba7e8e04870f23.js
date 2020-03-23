load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var o = {}
try {
    eval('o.\\u82f1 = 42;');
}
catch (e) {
    assertEq('should not fail', true);
}
assertEq(o['\u82f1'], 42);

if (typeof reportCompare == 'function')
    reportCompare(true, true);
