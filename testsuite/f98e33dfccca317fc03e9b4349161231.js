load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assertEq(raisesException(TypeError)('String.prototype.toString.call(42)'), true);
assertEq(raisesException(TypeError)('String.prototype.toString.call(true)'), true);
assertEq(raisesException(TypeError)('String.prototype.toString.call({})'), true);
assertEq(raisesException(TypeError)('String.prototype.toString.call(null)'), true);
assertEq(raisesException(TypeError)('String.prototype.toString.call([])'), true);
assertEq(raisesException(TypeError)('String.prototype.toString.call(undefined)'), true);
assertEq(completesNormally('String.prototype.toString.call("")'), true);

reportCompare(true, true);
