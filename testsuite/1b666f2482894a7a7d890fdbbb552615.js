load("201224b0d1c296b45befd2285e95dd42.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

try {
    var e = new Error();
    e.name = e;
    "" + e;
} catch (e) {
    assertEq(e.message, 'too much recursion');
}
