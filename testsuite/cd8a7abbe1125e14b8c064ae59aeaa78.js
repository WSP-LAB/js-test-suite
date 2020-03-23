load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

load("dc4b20628140c803c89c741458a4c2d0.js");

assertEqArray(eval('[]'), []);
assertEqArray(eval('[,]'), [,]);
assertEqArray(eval('[,,]'), [,,]);
assertEqArray(eval('[1, 1, ]'), [1,1, ]);
assertEqArray(eval('[1, 1, true]'), [1, 1, true]);
assertEqArray(eval('[1, false, true]'), [1, false, true]);
