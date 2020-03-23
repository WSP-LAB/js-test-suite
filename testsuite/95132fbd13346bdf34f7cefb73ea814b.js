load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function throwsRangeError(t) {
    try {
        var date = new Date();
        date.setTime(t);
        var r = date.toISOString();
        throw new Error("toISOString didn't throw, instead returned " + r);
    } catch (err) {
        assertEq(err instanceof RangeError, true, 'wrong error: ' + err);
        return;
    }
    assertEq(0, 1, 'not good, nyan, nyan');
}

throwsRangeError(Infinity);
throwsRangeError(-Infinity);
throwsRangeError(NaN);

if (typeof reportCompare === "function")
  reportCompare(true, true);
