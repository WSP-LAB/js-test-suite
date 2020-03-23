load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assertEq(Math.round(9007199254740991), 9007199254740991);
assertEq(Math.round(-19007199254740990), -19007199254740990);

assertEq(Math.round("9007199254740991"), 9007199254740991);
assertEq(Math.round("-19007199254740990"), -19007199254740990);
