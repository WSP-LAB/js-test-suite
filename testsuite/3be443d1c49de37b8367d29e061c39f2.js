load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Christian Holler <decoder@own-hero.net> and Jason Orendorff
 */

function C(){}
C.prototype = 1;
assertEq(Object.getOwnPropertyDescriptor(C, "prototype").configurable, false);

reportCompare(0, 0, "ok");
