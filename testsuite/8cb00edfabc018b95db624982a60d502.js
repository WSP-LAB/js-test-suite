load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// |reftest| skip-if(!xulRuntime.shell) -- uses evalcx
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

try {
    evalcx("Object.freeze(this); eval('const q = undefined;')");
} catch (e) {
    assertEq(e.message, "({lazy:false}) is not extensible");
}

reportCompare(0, 0, "don't crash");
