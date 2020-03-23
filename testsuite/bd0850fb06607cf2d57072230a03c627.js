load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var v = [0, 0x7fffffff];
v.sort();

assertEq(v[0], 0);
assertEq(v[1], 0x7fffffff);

v = [0x7fffffff, 0];
v.sort();

assertEq(v[0], 0);
assertEq(v[1], 0x7fffffff);
