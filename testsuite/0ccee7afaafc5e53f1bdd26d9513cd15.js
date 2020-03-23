load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var s = "grape";
function f() { "use strict"; return this; }
var p = new Proxy(f, {});
String.prototype.p = p;
assertEq(s.p(), "grape");

reportCompare(true,true);
