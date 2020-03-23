load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assertEq(raisesException(TypeError)('Number.prototype.toSource.call("")'), true);
assertEq(raisesException(TypeError)('Number.prototype.toSource.call(true)'), true);
assertEq(raisesException(TypeError)('Number.prototype.toSource.call({})'), true);
assertEq(raisesException(TypeError)('Number.prototype.toSource.call(null)'), true);
assertEq(raisesException(TypeError)('Number.prototype.toSource.call([])'), true);
assertEq(raisesException(TypeError)('Number.prototype.toSource.call(undefined)'), true);
assertEq(raisesException(TypeError)('Number.prototype.toSource.call(new Boolean(true))'), true);

assertEq(completesNormally('Number.prototype.toSource.call(42)'), true);
assertEq(completesNormally('Number.prototype.toSource.call(new Number(42))'), true);

reportCompare(true, true);
