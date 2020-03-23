load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Gary Kwong and Jason Orendorff
 */

function f(x) { return eval('"mumble"; x + 42'); }

var expect = true;
var actual = ('' + f).indexOf("mumble") >= 0;

reportCompare(expect, actual, "unknown directive in eval code wrongly dropped");
